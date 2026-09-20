import fs from 'fs';
import path from 'path';
import https from 'https';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (['node_modules', '.nuxt', '.output', '.git', '.gemini'].includes(file)) return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (file.endsWith('.ts') || file.endsWith('.vue') || file.endsWith('.js') || file.endsWith('.json')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walk(process.cwd());
const urlRegex = /https:\/\/images\.unsplash\.com\/[^\s"'`\),\\]+/g;
const foundUrls = new Map();

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = urlRegex.exec(content)) !== null) {
    let url = match[0];
    // Clean trailing query punctuation if any
    url = url.replace(/[;,\)\>]$/, '');
    if (!foundUrls.has(url)) {
      foundUrls.set(url, []);
    }
    foundUrls.get(url).push(path.relative(process.cwd(), file));
  }
}

console.log(`Found ${foundUrls.size} unique Unsplash URLs.`);

function checkUrl(url) {
  return new Promise((resolve) => {
    try {
      const u = new URL(url);
      const req = https.request({
        hostname: u.hostname,
        path: u.pathname + u.search,
        method: 'HEAD',
        headers: { 'User-Agent': 'Mozilla/5.0' }
      }, (res) => {
        resolve({ url, status: res.statusCode });
      });
      req.on('error', (e) => resolve({ url, status: 'ERROR: ' + e.message }));
      req.setTimeout(8000, () => {
        req.destroy();
        resolve({ url, status: 'TIMEOUT' });
      });
      req.end();
    } catch (err) {
      resolve({ url, status: 'INVALID URL: ' + err.message });
    }
  });
}

async function run() {
  const entries = Array.from(foundUrls.keys());
  const broken = [];
  const ok = [];
  for (let i = 0; i < entries.length; i += 6) {
    const batch = entries.slice(i, i + 6);
    const results = await Promise.all(batch.map(checkUrl));
    for (const r of results) {
      if (r.status === 200 || (typeof r.status === 'number' && r.status < 400)) {
        ok.push(r);
      } else {
        console.log(`❌ [STATUS ${r.status}] ${r.url}`);
        console.log(`   Used in: ${foundUrls.get(r.url).join(', ')}`);
        broken.push(r);
      }
    }
  }
  console.log(`\nScan Finished: ${ok.length} Valid (HTTP 200/3xx), ${broken.length} Broken/Failed.`);
  process.exit(broken.length > 0 ? 1 : 0);
}

run();
