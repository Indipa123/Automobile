import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, removeResponseHeader, createError, getQuery as getQuery$1, readBody, getResponseStatus, lazyEventHandler, useBase, createApp, createRouter as createRouter$1, toNodeListener, getRouterParam, getResponseStatusText } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/h3/dist/index.mjs';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { escapeHtml } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/@vue/shared/dist/shared.cjs.js';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, decodePath, withLeadingSlash, withoutTrailingSlash, joinRelativeURL } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/ufo/dist/index.mjs';
import { renderToString } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/vue/server-renderer/index.mjs';
import destr, { destr as destr$1 } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/indipaayomal/dev/Automobile/node_modules/unstorage/drivers/fs.mjs';
import { digest } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/youch-core/build/index.js';
import { Youch } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/source-map/source-map.js';
import { AsyncLocalStorage } from 'node:async_hooks';
import { stringify, uneval } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/devalue/index.js';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/errx/dist/index.js';
import { isVNode, isRef, toValue } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/vue/index.mjs';
import _wH6JrtIxmaSoA8lCPWFnE9z4lQeXW6H5z3l5aymEQw from 'file:///Users/indipaayomal/dev/Automobile/node_modules/@nuxt/vite-builder/dist/fix-stacktrace.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1, isAbsolute } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/pathe/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/unhead/dist/server.mjs';
import { DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/unhead/dist/plugins.mjs';
import { walkResolver } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/unhead/dist/utils.mjs';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'file:///Users/indipaayomal/dev/Automobile/node_modules/ipx/dist/index.mjs';

const serverAssets = [{"baseName":"server","dir":"/Users/indipaayomal/dev/Automobile/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/indipaayomal/dev/Automobile","watchOptions":{"ignored":[null]}}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/indipaayomal/dev/Automobile/server","watchOptions":{"ignored":[null]}}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/indipaayomal/dev/Automobile/.nuxt"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/indipaayomal/dev/Automobile/.nuxt/cache"}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/indipaayomal/dev/Automobile/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "apiBase": "/api",
    "googleMapsKey": ""
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": []
    },
    "http": {
      "domains": [
        "images.unsplash.com"
      ]
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

/**
* Nitro internal functions extracted from https://github.com/nitrojs/nitro/blob/v2/src/runtime/internal/utils.ts
*/
function isJsonRequest(event) {
	// If the client specifically requests HTML, then avoid classifying as JSON.
	if (hasReqHeader(event, "accept", "text/html")) {
		return false;
	}
	return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
	const value = getRequestHeader(event, name);
	return !!(value && typeof value === "string" && value.toLowerCase().includes(includes));
}

const iframeStorageBridge = (nonce) => `
(function () {
  const NONCE = ${JSON.stringify(nonce)};
  const memoryStore = Object.create(null);

  const post = (type, payload) => {
    window.parent.postMessage({ type, nonce: NONCE, ...payload }, '*');
  };

  const isValid = (data) => data && data.nonce === NONCE;

  const mockStorage = {
    getItem(key) {
      return Object.hasOwn(memoryStore, key)
        ? memoryStore[key]
        : null;
    },
    setItem(key, value) {
      const v = String(value);
      memoryStore[key] = v;
      post('storage-set', { key, value: v });
    },
    removeItem(key) {
      delete memoryStore[key];
      post('storage-remove', { key });
    },
    clear() {
      for (const key of Object.keys(memoryStore))
        delete memoryStore[key];
      post('storage-clear', {});
    },
    key(index) {
      const keys = Object.keys(memoryStore);
      return keys[index] ?? null;
    },
    get length() {
      return Object.keys(memoryStore).length;
    }
  };

  const defineLocalStorage = () => {
    try {
      Object.defineProperty(window, 'localStorage', {
        value: mockStorage,
        writable: false,
        configurable: true
      });
    } catch {
      window.localStorage = mockStorage;
    }
  };

  defineLocalStorage();

  window.addEventListener('message', (event) => {
    const data = event.data;
    if (!isValid(data) || data.type !== 'storage-sync-data') return;

    const incoming = data.data || {};
    for (const key of Object.keys(incoming))
      memoryStore[key] = incoming[key];

    if (typeof window.initTheme === 'function')
      window.initTheme();
    window.dispatchEvent(new Event('storage-ready'));
  });

  // Clipboard API is unavailable in data: URL iframe, so we use postMessage
  document.addEventListener('DOMContentLoaded', function() {
    window.copyErrorMessage = function(button) {
      post('clipboard-copy', { text: button.dataset.errorText });
      button.classList.add('copied');
      setTimeout(function() { button.classList.remove('copied'); }, 2000);
    };
  });

  post('storage-sync-request', {});
})();
`;
const parentStorageBridge = (nonce) => `
(function () {
  const host = document.querySelector('nuxt-error-overlay');
  if (!host) return;

  const NONCE = ${JSON.stringify(nonce)};
  const isValid = (data) => data && data.nonce === NONCE;

  // Handle clipboard copy from iframe
  window.addEventListener('message', function(e) {
    if (isValid(e) && e.data.type === 'clipboard-copy') {
      navigator.clipboard.writeText(e.data.text).catch(function() {});
    }
  });

  const collectLocalStorage = () => {
    const all = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k != null) all[k] = localStorage.getItem(k);
    }
    return all;
  };

  const attachWhenReady = () => {
    const root = host.shadowRoot;
    if (!root)
      return false;
    const iframe = root.getElementById('frame');
    if (!iframe || !iframe.contentWindow)
      return false;

    const handlers = {
      'storage-set': (d) => localStorage.setItem(d.key, d.value),
      'storage-remove': (d) => localStorage.removeItem(d.key),
      'storage-clear': () => localStorage.clear(),
      'storage-sync-request': () => {
        iframe.contentWindow.postMessage({
          type: 'storage-sync-data',
          data: collectLocalStorage(),
          nonce: NONCE
        }, '*');
      }
    };

    window.addEventListener('message', (event) => {
      const data = event.data;
      if (!isValid(data)) return;
      const fn = handlers[data.type];
      if (fn) fn(data);
    });

    return true;
  };

  if (attachWhenReady())
    return;

  const obs = new MutationObserver(() => {
    if (attachWhenReady())
      obs.disconnect();
  });

  obs.observe(host, { childList: true, subtree: true });
})();
`;
const errorCSS = `
:host {
  --preview-width: 240px;
  --preview-height: 180px;
  --base-width: 1200px;
  --base-height: 900px;
  --z-base: 999999998;
  --error-pip-left: auto;
  --error-pip-top: auto;
  --error-pip-right: 5px;
  --error-pip-bottom: 5px;
  --error-pip-origin: bottom right;
  --app-preview-left: auto;
  --app-preview-top: auto;
  --app-preview-right: 5px;
  --app-preview-bottom: 5px;
  all: initial;
  display: contents;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
#frame {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  z-index: var(--z-base);
}
#frame[inert] {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: var(--error-pip-right);
  bottom: var(--error-pip-bottom);
  width: var(--base-width);
  height: var(--base-height);
  transform: scale(calc(240 / 1200));
  transform-origin: var(--error-pip-origin);
  overflow: hidden;
  border-radius: calc(1200 * 8px / 240);
}
#preview {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: var(--app-preview-right);
  bottom: var(--app-preview-bottom);
  width: var(--preview-width);
  height: var(--preview-height);
  overflow: hidden;
  border-radius: 6px;
  pointer-events: none;
  z-index: var(--z-base);
  background: white;
  display: none;
}
#preview iframe {
  transform-origin: var(--error-pip-origin);
}
#frame:not([inert]) + #preview {
  display: block;
}
#toggle {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: calc(var(--app-preview-right) - 3px);
  bottom: calc(var(--app-preview-bottom) - 3px);
  width: var(--preview-width);
  height: var(--preview-height);
  background: none;
  border: 3px solid #00DC82;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s, box-shadow 0.2s;
  z-index: calc(var(--z-base) + 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
#toggle:hover,
#toggle:focus {
  opacity: 1;
  box-shadow: 0 0 20px rgba(0, 220, 130, 0.6);
}
#toggle:focus-visible {
  outline: 3px solid #00DC82;
  outline-offset: 0;
  box-shadow: 0 0 24px rgba(0, 220, 130, 0.8);
}
#frame[inert] ~ #toggle {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: calc(var(--error-pip-right) - 3px);
  bottom: calc(var(--error-pip-bottom) - 3px);
  cursor: grab;
}
:host(.dragging) #frame[inert] ~ #toggle {
  cursor: grabbing;
}
#frame:not([inert]) ~ #toggle,
#frame:not([inert]) + #preview {
  cursor: grab;
}
:host(.dragging-preview) #frame:not([inert]) ~ #toggle,
:host(.dragging-preview) #frame:not([inert]) + #preview {
  cursor: grabbing;
}

#pip-close {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 16px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  pointer-events: auto;
}
#pip-close:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}

#pip-restore {
  position: fixed;
  right: 16px;
  bottom: 16px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 2px solid #00DC82;
  background: #111;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  z-index: calc(var(--z-base) + 2);
  cursor: grab;
}
#pip-restore:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}
:host(.dragging-restore) #pip-restore {
  cursor: grabbing;
}

#frame[hidden],
#toggle[hidden],
#preview[hidden],
#pip-restore[hidden],
#pip-close[hidden] {
  display: none !important;
}

@media (prefers-reduced-motion: reduce) {
  #toggle {
    transition: none;
  }
}
`;
function webComponentScript(base64HTML, startMinimized) {
	return `
(function () {
  try {
    // =========================
    // Host + Shadow
    // =========================
    const host = document.querySelector('nuxt-error-overlay');
    if (!host)
      return;
    const shadow = host.attachShadow({ mode: 'open' });

    // =========================
    // DOM helpers
    // =========================
    const el = (tag) => document.createElement(tag);
    const on = (node, type, fn, opts) => node.addEventListener(type, fn, opts);
    const hide = (node, v) => node.toggleAttribute('hidden', !!v);
    const setVar = (name, value) => host.style.setProperty(name, value);
    const unsetVar = (name) => host.style.removeProperty(name);

    // =========================
    // Create DOM
    // =========================
    const style = el('style');
    style.textContent = ${JSON.stringify(errorCSS)};

    const iframe = el('iframe');
    iframe.id = 'frame';
    iframe.src = 'data:text/html;base64,${base64HTML}';
    iframe.title = 'Detailed error stack trace';
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-top-navigation-by-user-activation');

    const preview = el('div');
    preview.id = 'preview';

    const toggle = el('div');
    toggle.id = 'toggle';
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('tabindex', '0');
    toggle.innerHTML = '<span class="sr-only">Toggle detailed error view</span>';

    const liveRegion = el('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.className = 'sr-only';

    const pipCloseButton = el('button');
    pipCloseButton.id = 'pip-close';
    pipCloseButton.setAttribute('type', 'button');
    pipCloseButton.setAttribute('aria-label', 'Hide error preview overlay');
    pipCloseButton.innerHTML = '&times;';
    pipCloseButton.hidden = true;
    toggle.appendChild(pipCloseButton);

    const pipRestoreButton = el('button');
    pipRestoreButton.id = 'pip-restore';
    pipRestoreButton.setAttribute('type', 'button');
    pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
    pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
    pipRestoreButton.hidden = true;

    // Order matters: #frame + #preview adjacency
    shadow.appendChild(style);
    shadow.appendChild(liveRegion);
    shadow.appendChild(iframe);
    shadow.appendChild(preview);
    shadow.appendChild(toggle);
    shadow.appendChild(pipRestoreButton);

    // =========================
    // Constants / keys
    // =========================
    const POS_KEYS = {
      position: 'nuxt-error-overlay:position',
      hiddenPretty: 'nuxt-error-overlay:error-pip:hidden',
      hiddenPreview: 'nuxt-error-overlay:app-preview:hidden'
    };

    const CSS_VARS = {
      pip: {
        left: '--error-pip-left',
        top: '--error-pip-top',
        right: '--error-pip-right',
        bottom: '--error-pip-bottom'
      },
      preview: {
        left: '--app-preview-left',
        top: '--app-preview-top',
        right: '--app-preview-right',
        bottom: '--app-preview-bottom'
      }
    };

    const MIN_GAP = 5;
    const DRAG_THRESHOLD = 2;

    // =========================
    // Local storage safe access + state
    // =========================
    let storageReady = true;
    let isPrettyHidden = false;
    let isPreviewHidden = false;

    const safeGet = (k) => {
      try {
        return localStorage.getItem(k);
      } catch {
        return null;
      }
    };

    const safeSet = (k, v) => {
      if (!storageReady) 
        return;
      try {
        localStorage.setItem(k, v);
      } catch {}
    };

    // =========================
    // Sizing helpers
    // =========================
    const vvSize = () => {
      const v = window.visualViewport;
      return v ? { w: v.width, h: v.height } : { w: window.innerWidth, h: window.innerHeight };
    };

    const previewSize = () => {
      const styles = getComputedStyle(host);
      const w = parseFloat(styles.getPropertyValue('--preview-width')) || 240;
      const h = parseFloat(styles.getPropertyValue('--preview-height')) || 180;
      return { w, h };
    };

    const sizeForTarget = (target) => {
      if (!target)
        return previewSize();
      const rect = target.getBoundingClientRect();
      if (rect.width && rect.height)
        return { w: rect.width, h: rect.height };
      return previewSize();
    };

    // =========================
    // Dock model + offset/alignment calculations
    // =========================
    const dock = { edge: null, offset: null, align: null, gap: null };

    const maxOffsetFor = (edge, size) => {
      const vv = vvSize();
      if (edge === 'left' || edge === 'right')
        return Math.max(MIN_GAP, vv.h - size.h - MIN_GAP);
      return Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
    };

    const clampOffset = (edge, value, size) => {
      const max = maxOffsetFor(edge, size);
      return Math.min(Math.max(value, MIN_GAP), max);
    };

    const updateDockAlignment = (size) => {
      if (!dock.edge || dock.offset == null)
        return;
      const max = maxOffsetFor(dock.edge, size);
      if (dock.offset <= max / 2) {
        dock.align = 'start';
        dock.gap = dock.offset;
      } else {
        dock.align = 'end';
        dock.gap = Math.max(0, max - dock.offset);
      }
    };

    const appliedOffsetFor = (size) => {
      if (!dock.edge || dock.offset == null)
        return null;
      const max = maxOffsetFor(dock.edge, size);

      if (dock.align === 'end' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, max - dock.gap, size);
      }
      if (dock.align === 'start' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, dock.gap, size);
      }
      return clampOffset(dock.edge, dock.offset, size);
    };

    const nearestEdgeAt = (x, y) => {
      const { w, h } = vvSize();
      const d = { left: x, right: w - x, top: y, bottom: h - y };
      return Object.keys(d).reduce((a, b) => (d[a] < d[b] ? a : b));
    };

    const cornerDefaultDock = () => {
      const vv = vvSize();
      const size = previewSize();
      const offset = Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
      return { edge: 'bottom', offset };
    };

    const currentTransformOrigin = () => {
      if (!dock.edge) return null;
      if (dock.edge === 'left' || dock.edge === 'top')
        return 'top left';
      if (dock.edge === 'right')
        return 'top right';
      return 'bottom left';
    };

    // =========================
    // Persist / load dock
    // =========================
    const loadDock = () => {
      const raw = safeGet(POS_KEYS.position);
      if (!raw)
        return;
      try {
        const parsed = JSON.parse(raw);
        const { edge, offset, align, gap } = parsed || {};
        if (!['left', 'right', 'top', 'bottom'].includes(edge))
          return;
        if (typeof offset !== 'number')
          return;

        dock.edge = edge;
        dock.offset = clampOffset(edge, offset, previewSize());
        dock.align = align === 'start' || align === 'end' ? align : null;
        dock.gap = typeof gap === 'number' ? gap : null;

        if (!dock.align || dock.gap == null)
          updateDockAlignment(previewSize());
      } catch {}
    };

    const persistDock = () => {
      if (!dock.edge || dock.offset == null)
        return; 
      safeSet(POS_KEYS.position, JSON.stringify({
        edge: dock.edge,
        offset: dock.offset,
        align: dock.align,
        gap: dock.gap
      }));
    };

    // =========================
    // Apply dock
    // =========================
    const dockToVars = (vars) => ({
      set: (side, v) => host.style.setProperty(vars[side], v),
      clear: (side) => host.style.removeProperty(vars[side])
    });

    const dockToEl = (node) => ({
      set: (side, v) => { node.style[side] = v; },
      clear: (side) => { node.style[side] = ''; }
    });

    const applyDock = (target, size, opts) => {
      if (!dock.edge || dock.offset == null) {
        target.clear('left');
        target.clear('top');
        target.clear('right');
        target.clear('bottom');
        return;
      }

      target.set('left', 'auto');
      target.set('top', 'auto');
      target.set('right', 'auto');
      target.set('bottom', 'auto');

      const applied = appliedOffsetFor(size);

      if (dock.edge === 'left') {
        target.set('left', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'right') {
        target.set('right', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'top') {
        target.set('top', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      } else {
        target.set('bottom', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      }

      if (!opts || opts.persist !== false)
        persistDock();
    };

    const applyDockAll = (opts) => {
      applyDock(dockToVars(CSS_VARS.pip), previewSize(), opts);
      applyDock(dockToVars(CSS_VARS.preview), previewSize(), opts);
      applyDock(dockToEl(pipRestoreButton), sizeForTarget(pipRestoreButton), opts);
    };

    const repaintToDock = () => {
      if (!dock.edge || dock.offset == null)
        return;
      const origin = currentTransformOrigin();
      if (origin)
        setVar('--error-pip-origin', origin);
      else 
        unsetVar('--error-pip-origin');
      applyDockAll({ persist: false });
    };

    // =========================
    // Hidden state + UI
    // =========================
    const loadHidden = () => {
      const rawPretty = safeGet(POS_KEYS.hiddenPretty);
      if (rawPretty != null)
        isPrettyHidden = rawPretty === '1' || rawPretty === 'true';
      const rawPreview = safeGet(POS_KEYS.hiddenPreview);
      if (rawPreview != null)
        isPreviewHidden = rawPreview === '1' || rawPreview === 'true';
    };

    const setPrettyHidden = (v) => {
      isPrettyHidden = !!v;
      safeSet(POS_KEYS.hiddenPretty, isPrettyHidden ? '1' : '0');
      updateUI();
    };

    const setPreviewHidden = (v) => {
      isPreviewHidden = !!v;
      safeSet(POS_KEYS.hiddenPreview, isPreviewHidden ? '1' : '0');
      updateUI();
    };

    const isMinimized = () => iframe.hasAttribute('inert');

    const setMinimized = (v) => {
      if (v) {
        iframe.setAttribute('inert', '');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        iframe.removeAttribute('inert');
        toggle.setAttribute('aria-expanded', 'true');
      }
    };

    const setRestoreLabel = (kind) => {
      if (kind === 'pretty') {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
      } else {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error page</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error page');
      }
    };

    const updateUI = () => {
      const minimized = isMinimized();
      const showPiP = minimized && !isPrettyHidden;
      const showPreview = !minimized && !isPreviewHidden;
      const pipHiddenByUser = minimized && isPrettyHidden;
      const previewHiddenByUser = !minimized && isPreviewHidden;
      const showToggle = minimized ? showPiP : showPreview;
      const showRestore = pipHiddenByUser || previewHiddenByUser;

      hide(iframe, pipHiddenByUser);
      hide(preview, !showPreview);
      hide(toggle, !showToggle);
      hide(pipCloseButton, !showToggle);
      hide(pipRestoreButton, !showRestore);

      pipCloseButton.setAttribute('aria-label', minimized ? 'Hide error overlay' : 'Hide error page preview');

      if (pipHiddenByUser)
        setRestoreLabel('pretty');
      else if (previewHiddenByUser)
        setRestoreLabel('preview');

      host.classList.toggle('pip-hidden', isPrettyHidden);
      host.classList.toggle('preview-hidden', isPreviewHidden);
    };

    // =========================
    // Preview snapshot
    // =========================
    const updatePreview = () => {
      try {
        let previewIframe = preview.querySelector('iframe');
        if (!previewIframe) {
          previewIframe = el('iframe');
          previewIframe.style.cssText = 'width: 1200px; height: 900px; transform: scale(0.2); transform-origin: top left; border: none;';
          previewIframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
          preview.appendChild(previewIframe);
        }

        const doctype = document.doctype ? '<!DOCTYPE ' + document.doctype.name + '>' : '';
        const cleanedHTML = document.documentElement.outerHTML
          .replace(/<nuxt-error-overlay[^>]*>.*?<\\/nuxt-error-overlay>/gs, '')
          .replace(/<script[^>]*>.*?<\\/script>/gs, '');

        const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(doctype + cleanedHTML);
        iframeDoc.close();
      } catch (err) {
        console.error('Failed to update preview:', err);
      }
    };

    // =========================
    // View toggling
    // =========================
    const toggleView = () => {
      if (isMinimized()) {
        updatePreview();
        setMinimized(false);
        liveRegion.textContent = 'Showing detailed error view';
        setTimeout(() => { 
          try { 
            iframe.contentWindow.focus();
          } catch {}
        }, 100);
      } else {
        setMinimized(true);
        liveRegion.textContent = 'Showing error page';
        repaintToDock();
        void iframe.offsetWidth;
      }
      updateUI();
    };

    // =========================
    // Dragging (unified, rAF throttled)
    // =========================
    let drag = null;
    let rafId = null;
    let suppressToggleClick = false;
    let suppressRestoreClick = false;

    const beginDrag = (e) => {
      if (drag) 
        return;

      if (!dock.edge || dock.offset == null) {
        const def = cornerDefaultDock();
        dock.edge = def.edge;
        dock.offset = def.offset;
        updateDockAlignment(previewSize());
      }

      const isRestoreTarget = e.currentTarget === pipRestoreButton;

      drag = {
        kind: isRestoreTarget ? 'restore' : (isMinimized() ? 'pip' : 'preview'),
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        lastX: e.clientX,
        lastY: e.clientY,
        moved: false,
        target: e.currentTarget
      };

      drag.target.setPointerCapture(e.pointerId);

      if (drag.kind === 'restore')
        host.classList.add('dragging-restore');
      else 
        host.classList.add(drag.kind === 'pip' ? 'dragging' : 'dragging-preview');

      e.preventDefault();
    };

    const moveDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      drag.lastX = e.clientX;
      drag.lastY = e.clientY;
      
      const dx = drag.lastX - drag.startX;
      const dy = drag.lastY - drag.startY;

      if (!drag.moved && (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)) {
        drag.moved = true;
      }

      if (!drag.moved)
        return;
      if (rafId)
        return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const edge = nearestEdgeAt(drag.lastX, drag.lastY);
        const size = sizeForTarget(drag.target);

        let offset;
        if (edge === 'left' || edge === 'right') {
          const top = drag.lastY - (size.h / 2);
          offset = clampOffset(edge, Math.round(top), size);
        } else {
          const left = drag.lastX - (size.w / 2);
          offset = clampOffset(edge, Math.round(left), size);
        }

        dock.edge = edge;
        dock.offset = offset;
        updateDockAlignment(size);

        const origin = currentTransformOrigin();
        setVar('--error-pip-origin', origin || 'bottom right');

        applyDockAll({ persist: false });
      });
    };

    const endDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      const endedKind = drag.kind;
      drag.target.releasePointerCapture(e.pointerId);

      if (endedKind === 'restore')
        host.classList.remove('dragging-restore');
      else 
        host.classList.remove(endedKind === 'pip' ? 'dragging' : 'dragging-preview');

      const didMove = drag.moved;
      drag = null;

      if (didMove) {
        persistDock();
        if (endedKind === 'restore')
          suppressRestoreClick = true;
        else 
          suppressToggleClick = true;
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const bindDragTarget = (node) => {
      on(node, 'pointerdown', beginDrag);
      on(node, 'pointermove', moveDrag);
      on(node, 'pointerup', endDrag);
      on(node, 'pointercancel', endDrag);
    };

    bindDragTarget(toggle);
    bindDragTarget(pipRestoreButton);

    // =========================
    // Events (toggle / close / restore)
    // =========================
    on(toggle, 'click', (e) => {
      if (suppressToggleClick) {
        e.preventDefault();
        suppressToggleClick = false;
        return;
      }
      toggleView();
    });

    on(toggle, 'keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleView();
      }
    });

    on(pipCloseButton, 'click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized())
        setPrettyHidden(true);
      else
        setPreviewHidden(true);
    });

    on(pipCloseButton, 'pointerdown', (e) => {
      e.stopPropagation();
    });

    on(pipRestoreButton, 'click', (e) => {
      if (suppressRestoreClick) {
        e.preventDefault();
        suppressRestoreClick = false;
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized()) 
        setPrettyHidden(false);
      else 
        setPreviewHidden(false);
    });

    // =========================
    // Lifecycle: load / sync / repaint
    // =========================
    const loadState = () => {
      loadDock();
      loadHidden();

      if (isPrettyHidden && !isMinimized())
        setMinimized(true);

      updateUI();
      repaintToDock();
    };

    loadState();

    on(window, 'storage-ready', () => {
      storageReady = true;
      loadState();
    });

    const onViewportChange = () => repaintToDock();

    on(window, 'resize', onViewportChange);

    if (window.visualViewport) {
      on(window.visualViewport, 'resize', onViewportChange);
      on(window.visualViewport, 'scroll', onViewportChange);
    }

    // initial preview
    setTimeout(updatePreview, 100);

    // initial minimized option
    if (${startMinimized}) {
      setMinimized(true);
      repaintToDock();
      void iframe.offsetWidth;
      updateUI();
    }
  } catch (err) {
    console.error('Failed to initialize Nuxt error overlay:', err);
  }
})();
`;
}
function generateErrorOverlayHTML(html, options) {
	const nonce = Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, "0")).join("");
	const errorPage = html.replace("<head>", `<head><script>${iframeStorageBridge(nonce)}<\/script>`);
	const base64HTML = Buffer.from(errorPage, "utf8").toString("base64");
	return `
    <script>${parentStorageBridge(nonce)}<\/script>
    <nuxt-error-overlay></nuxt-error-overlay>
    <script>${webComponentScript(base64HTML, options?.startMinimized ?? false)}<\/script>
  `;
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
	if (event.handled || isJsonRequest(event)) {
		// let Nitro handle JSON errors
		return;
	}
	// invoke default Nitro error handler (which will log appropriately if required)
	const defaultRes = await defaultHandler(error, event, { json: true });
	// let Nitro handle redirect if appropriate
	const status = error.status || error.statusCode || 500;
	if (status === 404 && defaultRes.status === 302) {
		setResponseHeaders(event, defaultRes.headers);
		setResponseStatus(event, defaultRes.status, defaultRes.statusText);
		return send(event, JSON.stringify(defaultRes.body, null, 2));
	}
	if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
		// normalize to string format expected by nuxt `error.vue`
		defaultRes.body.stack = defaultRes.body.stack.join("\n");
	}
	const errorObject = defaultRes.body;
	// remove proto/hostname/port from URL
	const url = new URL(errorObject.url);
	errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
	// add default server message (keep sanitized for unhandled errors)
	errorObject.message = error.unhandled ? errorObject.message || "Server Error" : error.message || errorObject.message || "Server Error";
	// we will be rendering this error internally so we can pass along the error.data safely
	errorObject.data ||= error.data;
	errorObject.statusText ||= error.statusText || error.statusMessage;
	delete defaultRes.headers["content-type"];
	delete defaultRes.headers["content-security-policy"];
	setResponseHeaders(event, defaultRes.headers);
	// Access request headers
	const reqHeaders = getRequestHeaders(event);
	// Detect to avoid recursion in SSR rendering of errors
	const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
	// HTML response (via SSR)
	const res = isRenderingError ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject), {
		headers: {
			...reqHeaders,
			"x-nuxt-error": "true"
		},
		redirect: "manual"
	}).catch(() => null);
	if (event.handled) {
		return;
	}
	// Fallback to static rendered error page
	if (!res) {
		const { template } = await Promise.resolve().then(function () { return error500; });
		{
			// TODO: Support `message` in template
			errorObject.description = errorObject.message;
		}
		setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
		return send(event, template(errorObject));
	}
	const html = await res.text();
	for (const [header, value] of res.headers.entries()) {
		if (header === "set-cookie") {
			appendResponseHeader(event, header, value);
			continue;
		}
		setResponseHeader(event, header, value);
	}
	setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
	if (!globalThis._importMeta_.test && typeof html === "string") {
		const prettyResponse = await defaultHandler(error, event, { json: false });
		if (typeof prettyResponse.body === "string") {
			return send(event, html.replace("</body>", `${generateErrorOverlayHTML(prettyResponse.body, { startMinimized: 300 <= status && status < 500 })}</body>`));
		}
	}
	return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json ?? !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const script$1 = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const __SeFFzSk3UWcjqTX_iLRuhWdkq8zfWVc4Dw5cxKps4 = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script$1}<\/script>`);
  });
});

const rootDir = "/Users/indipaayomal/dev/Automobile";

const appHead = {"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"description","content":"Buy and sell new and used cars in Sri Lanka. Expert reviews, price comparisons, dealer directory, and finance tools."},{"property":"og:title","content":"Automobile.lk"},{"property":"og:description","content":"Sri Lanka's #1 Automobile Marketplace"},{"property":"og:type","content":"website"}],"link":[{"rel":"preconnect","href":"https://fonts.googleapis.com"},{"rel":"preconnect","href":"https://fonts.gstatic.com","crossorigin":""},{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=JetBrains+Mono:wght@400;500&display=swap"}],"style":[],"script":[],"noscript":[],"title":"Automobile.lk — Sri Lanka's #1 Car Marketplace"};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appId = "nuxt-app";

const devReducers = {
	VNode: (data) => isVNode(data) ? {
		type: data.type,
		props: data.props
	} : undefined,
	URL: (data) => data instanceof URL ? data.toString() : undefined
};
const asyncContext = getContext("nuxt-dev", {
	asyncContext: true,
	AsyncLocalStorage
});
const _1qB28YnmRMJT8mw_LtpetgKtvs_IALkuiCWUOaivUe0 = (nitroApp) => {
	const handler = nitroApp.h3App.handler;
	nitroApp.h3App.handler = (event) => {
		return asyncContext.callAsync({
			logs: [],
			event
		}, () => handler(event));
	};
	onConsoleLog((_log) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		const rawStack = captureRawStackTrace();
		if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
			return;
		}
		const trace = [];
		let filename = "";
		for (const entry of parseRawStackTrace(rawStack)) {
			if (entry.source === globalThis._importMeta_.url) {
				continue;
			}
			if (EXCLUDE_TRACE_RE.test(entry.source)) {
				continue;
			}
			filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
			trace.push({
				...entry,
				source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
			});
		}
		const log = {
			..._log,
			filename,
			stack: trace
		};
		// retain log to be include in the next render
		ctx.logs.push(log);
	});
	nitroApp.hooks.hook("afterResponse", () => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		return nitroApp.hooks.callHook("dev:ssr-logs", {
			logs: ctx.logs,
			path: ctx.event.path
		});
	});
	// Pass any logs to the client
	nitroApp.hooks.hook("render:html", (htmlContext) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		try {
			const reducers = Object.assign(Object.create(null), devReducers, ctx.event.context["~payloadReducers"]);
			htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
		} catch (e) {
			const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
			console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.`);
		}
	});
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
	consola$1.addReporter({ log(logObj) {
		callback(logObj);
	} });
	consola$1.wrapConsole();
}

const script = "\"use strict\";(()=>{const t=window,e=document.documentElement,c=[\"dark\",\"light\"],n=getStorageValue(\"localStorage\",\"nuxt-color-mode\")||\"dark\";let i=n===\"system\"?u():n;const r=e.getAttribute(\"data-color-mode-forced\");r&&(i=r),l(i),t[\"__NUXT_COLOR_MODE__\"]={preference:n,value:i,getColorScheme:u,addColorScheme:l,removeColorScheme:d};function l(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.add(s):e.className+=\" \"+s,a&&e.setAttribute(\"data-\"+a,o)}function d(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.remove(s):e.className=e.className.replace(new RegExp(s,\"g\"),\"\"),a&&e.removeAttribute(\"data-\"+a)}function f(o){return t.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function u(){if(t.matchMedia&&f(\"\").media!==\"not all\"){for(const o of c)if(f(\":\"+o).matches)return o}return\"dark\"}})();function getStorageValue(t,e){switch(t){case\"localStorage\":return window.localStorage.getItem(e);case\"sessionStorage\":return window.sessionStorage.getItem(e);case\"cookie\":return getCookie(e);default:return null}}function getCookie(t){const c=(\"; \"+window.document.cookie).split(\"; \"+t+\"=\");if(c.length===2)return c.pop()?.split(\";\").shift()}";

const _QMsKd4WkbZdd1wKfheLn4HU5lBAhl5Jsqc3cvnEMY6I = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  __SeFFzSk3UWcjqTX_iLRuhWdkq8zfWVc4Dw5cxKps4,
_1qB28YnmRMJT8mw_LtpetgKtvs_IALkuiCWUOaivUe0,
_QMsKd4WkbZdd1wKfheLn4HU5lBAhl5Jsqc3cvnEMY6I,
_wH6JrtIxmaSoA8lCPWFnE9z4lQeXW6H5z3l5aymEQw
];

const assets = {};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _rXqLSG = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

// @__NO_SIDE_EFFECTS__
function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

const NUXT_RUNTIME_PAYLOAD_EXTRACTION = false;

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
  disableCapoSorting: false,
  plugins: [DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin],
};

function createSSRContext(event) {
	const ssrContext = {
		url: event.path,
		event,
		runtimeConfig: useRuntimeConfig(event),
		noSSR: event.context.nuxt?.noSSR || (false),
		head: createHead(unheadOptions),
		error: false,
		nuxt: undefined,
		payload: {},
		["~payloadReducers"]: Object.create(null),
		modules: new Set()
	};
	return ssrContext;
}
function setSSRError(ssrContext, error) {
	ssrContext.error = true;
	ssrContext.payload = { error };
	ssrContext.url = error.url;
}

function buildAssetsDir() {
	// TODO: support passing event to `useRuntimeConfig`
	return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
	return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
	// TODO: support passing event to `useRuntimeConfig`
	const app = useRuntimeConfig().app;
	const publicBase = app.cdnURL || app.baseURL;
	return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
// @ts-expect-error file will be produced after app build
const getServerEntry = () => import('file:///Users/indipaayomal/dev/Automobile/.nuxt//dist/server/server.mjs').then((r) => r.default || r);
// @ts-expect-error file will be produced after app build
const getClientManifest = () => import('file:///Users/indipaayomal/dev/Automobile/.nuxt//dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
// -- SSR Renderer --
const getSSRRenderer = lazyCachedFunction(async () => {
	// Load server bundle
	const createSSRApp = await getServerEntry();
	if (!createSSRApp) {
		throw new Error("Server bundle is not available");
	}
	// Load precomputed dependencies
	const precomputed = undefined ;
	// Create renderer
	const renderer = createRenderer(createSSRApp, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: renderToString$1,
		buildAssetsURL
	});
	async function renderToString$1(input, context) {
		const html = await renderToString(input, context);
		// In development with vite-node, the manifest is on-demand and will be available after rendering
		// eslint-disable-next-line no-restricted-globals
		if (process.env.NUXT_VITE_NODE_OPTIONS) {
			renderer.rendererContext.updateManifest(await getClientManifest());
		}
		return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
	}
	return renderer;
});
// -- SPA Renderer --
const getSPARenderer = lazyCachedFunction(async () => {
	const precomputed = undefined ;
	// @ts-expect-error virtual file
	const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
		{
			return APP_ROOT_OPEN_TAG + r + APP_ROOT_CLOSE_TAG;
		}
	});
	// Create SPA renderer and cache the result for all requests
	const renderer = createRenderer(() => () => {}, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: () => spaTemplate,
		buildAssetsURL
	});
	const result = await renderer.renderToString({});
	const renderToString = (ssrContext) => {
		const config = useRuntimeConfig(ssrContext.event);
		ssrContext.modules ||= new Set();
		ssrContext.payload.serverRendered = false;
		ssrContext.config = {
			public: config.public,
			app: config.app
		};
		return Promise.resolve(result);
	};
	return {
		rendererContext: renderer.rendererContext,
		renderToString
	};
});
function lazyCachedFunction(fn) {
	let res = null;
	return () => {
		if (res === null) {
			res = fn().catch((err) => {
				res = null;
				throw err;
			});
		}
		return res;
	};
}
function getRenderer(ssrContext) {
	return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
// @ts-expect-error file will be produced after app build
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
	const styleMap = await getSSRStyles();
	const inlinedStyles = new Set();
	for (const mod of usedModules) {
		if (mod in styleMap && styleMap[mod]) {
			for (const style of await styleMap[mod]()) {
				inlinedStyles.add(style);
			}
		}
	}
	return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

// @ts-expect-error virtual file
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
/**
* remove the root node from the html body
*/
function getServerComponentHTML(body) {
	const match = body.match(ROOT_NODE_REGEX);
	return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
		return undefined;
	}
	const response = {};
	for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
		response[name] = {
			...slot,
			fallback: ssrContext.teleports?.[`island-fallback=${name}`]
		};
	}
	return response;
}
function getClientIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
		return undefined;
	}
	const response = {};
	for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
		// remove teleport anchor to avoid hydration issues
		const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
		response[clientUid] = {
			...component,
			html,
			slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
		};
	}
	return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
	const entries = Object.entries(teleports);
	const slots = {};
	for (const [key, value] of entries) {
		const match = key.match(SSR_CLIENT_SLOT_MARKER);
		if (match) {
			const [, id, slot] = match;
			if (!slot || clientUid !== id) {
				continue;
			}
			slots[slot] = value;
		}
	}
	return slots;
}
function replaceIslandTeleports(ssrContext, html) {
	const { teleports, islandContext } = ssrContext;
	if (islandContext || !teleports) {
		return html;
	}
	for (const key in teleports) {
		const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
		if (matchClientComp) {
			const [, uid, clientId] = matchClientComp;
			if (!uid || !clientId) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
			continue;
		}
		const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
		if (matchSlot) {
			const [, uid, slot] = matchSlot;
			if (!uid || !slot) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
		}
	}
	return html;
}

const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const handler$1 = defineEventHandler(async (event) => {
	const nitroApp = useNitroApp();
	setResponseHeaders(event, {
		"content-type": "application/json;charset=utf-8",
		"x-powered-by": "Nuxt"
	});
	const islandContext = await getIslandContext(event);
	const ssrContext = {
		...createSSRContext(event),
		islandContext,
		noSSR: false,
		url: islandContext.url
	};
	// Render app
	const renderer = await getSSRRenderer();
	const renderResult = await renderer.renderToString(ssrContext).catch(async (err) => {
		await ssrContext.nuxt?.hooks.callHook("app:error", err);
		throw err;
	});
	// Handle errors
	if (ssrContext.payload?.error) {
		throw ssrContext.payload.error;
	}
	const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult
	});
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	{
		const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
		const link = [];
		for (const resource of Object.values(styles)) {
			// Do not add links to resources that are inlined (vite v5+)
			if ("inline" in getQuery(resource.file)) {
				continue;
			}
			// Add CSS links in <head> for CSS files
			// - in dev mode when rendering an island and the file has scoped styles and is not a page
			if (resource.file.includes("scoped") && !resource.file.includes("pages/")) {
				link.push({
					rel: "stylesheet",
					href: renderer.rendererContext.buildAssetsURL(resource.file),
					crossorigin: ""
				});
			}
		}
		if (link.length) {
			ssrContext.head.push({ link }, { mode: "server" });
		}
	}
	const islandHead = {};
	for (const entry of ssrContext.head.entries.values()) {
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
			const currentValue = islandHead[key];
			if (Array.isArray(currentValue)) {
				currentValue.push(...value);
			} else {
				islandHead[key] = value;
			}
		}
	}
	// TODO: remove for v4
	islandHead.link ||= [];
	islandHead.style ||= [];
	const islandResponse = {
		id: islandContext.id,
		head: islandHead,
		html: getServerComponentHTML(renderResult.html),
		components: getClientIslandResponse(ssrContext),
		slots: getSlotIslandResponse(ssrContext)
	};
	await nitroApp.hooks.callHook("render:island", islandResponse, {
		event,
		islandContext
	});
	return islandResponse;
});
const ISLAND_PATH_PREFIX = "/__nuxt_island/";
const VALID_COMPONENT_NAME_RE = /^[a-z][\w.-]*$/i;
async function getIslandContext(event) {
	let url = event.path || "";
	if (!url.startsWith(ISLAND_PATH_PREFIX)) {
		throw createError({
			statusCode: 400,
			statusMessage: "Invalid island request path"
		});
	}
	const componentParts = url.substring(ISLAND_PATH_PREFIX.length).replace(ISLAND_SUFFIX_RE, "").split("_");
	const hashId = componentParts.length > 1 ? componentParts.pop() : undefined;
	const componentName = componentParts.join("_");
	if (!componentName || !VALID_COMPONENT_NAME_RE.test(componentName)) {
		throw createError({
			statusCode: 400,
			statusMessage: "Invalid island component name"
		});
	}
	const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
	// Only extract known context fields to prevent arbitrary data injection
	return {
		url: typeof context?.url === "string" ? context.url : "/",
		id: hashId,
		name: componentName,
		props: destr$1(context.props) || {},
		slots: {},
		components: {}
	};
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

const mockCars = [
  {
    id: "1",
    slug: "toyota-prius-2022-1",
    title: "2022 Toyota Prius",
    make: "Toyota",
    model: "Prius",
    variant: "Hybrid G",
    year: 2022,
    condition: "used",
    bodyType: "sedan",
    price: 85e5,
    negotiable: true,
    mileage: 42e3,
    fuelType: "hybrid",
    transmission: "cvt",
    engineCC: 1800,
    horsepower: 122,
    torque: 163,
    color: "Pearl White",
    seats: 5,
    driveType: "fwd",
    features: ["Reverse Camera", "Apple CarPlay", "Lane Assist", "Heated Seats", "Sunroof", "LED Headlights"],
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=450&fit=crop&auto=format"
    ],
    location: { province: "Western", district: "Colombo", city: "Colombo 04", lat: 6.887, lng: 79.851 },
    dealerId: "d1",
    sellerType: "dealer",
    dealRating: "great",
    marketValue: 95e5,
    safetyRating: 5,
    posted: "2024-12-15T10:00:00Z",
    views: 1842,
    featured: true,
    fuelConsumption: "26 km/L",
    description: "Well-maintained Toyota Prius Hybrid directly from Prima Auto Lanka showroom. Single Japanese auction owner. Full service history and 3-year warranty included.",
    length: 4575,
    width: 1760,
    height: 1470,
    wheelbase: 2700
  },
  {
    id: "2",
    slug: "honda-vezel-2023-2",
    title: "2023 Honda Vezel",
    make: "Honda",
    model: "Vezel",
    variant: "Hybrid e:HEV Z",
    year: 2023,
    condition: "new",
    bodyType: "suv",
    price: 128e5,
    negotiable: false,
    mileage: 0,
    fuelType: "hybrid",
    transmission: "automatic",
    engineCC: 1500,
    horsepower: 131,
    torque: 253,
    color: "Sonic Grey",
    seats: 5,
    driveType: "fwd",
    features: ["Honda Sensing", "Apple CarPlay", "Android Auto", "Wireless Charging", "Panoramic Roof", "LED Headlights", "Adaptive Cruise Control"],
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=450&fit=crop&auto=format"
    ],
    location: { province: "Western", district: "Gampaha", city: "Ja-Ela", lat: 7.073, lng: 79.893 },
    dealerId: "d2",
    sellerType: "dealer",
    dealRating: "good",
    marketValue: 132e5,
    safetyRating: 5,
    posted: "2024-12-18T09:30:00Z",
    views: 2341,
    featured: true,
    fuelConsumption: "22 km/L"
  },
  {
    id: "3",
    slug: "toyota-land-cruiser-prado-2022-3",
    title: "2022 Toyota Land Cruiser Prado",
    make: "Toyota",
    model: "Land Cruiser Prado",
    variant: "TXL 2.8D",
    year: 2022,
    condition: "used",
    bodyType: "suv",
    price: 325e5,
    negotiable: true,
    mileage: 28e3,
    fuelType: "diesel",
    transmission: "automatic",
    engineCC: 2800,
    horsepower: 204,
    torque: 500,
    color: "Midnight Black",
    seats: 7,
    driveType: "4wd",
    features: ["360 Camera", "Terrain Monitor", "Heated/Cooled Seats", "Mark Levinson Audio", "Sunroof", "Power Running Boards", "Apple CarPlay"],
    images: [
      "https://images.unsplash.com/photo-1583267746897-2cf415887172?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=450&fit=crop&auto=format"
    ],
    location: { province: "Western", district: "Colombo", city: "Colombo 04", lat: 6.887, lng: 79.851 },
    dealerId: "d1",
    sellerType: "dealer",
    dealRating: "great",
    marketValue: 35e6,
    safetyRating: 5,
    posted: "2024-12-10T11:00:00Z",
    views: 5621,
    featured: true,
    fuelConsumption: "11 km/L"
  },
  {
    id: "4",
    slug: "suzuki-alto-2023-4",
    title: "2023 Suzuki Alto",
    make: "Suzuki",
    model: "Alto",
    variant: "VXR AGS",
    year: 2023,
    condition: "new",
    bodyType: "hatchback",
    price: 185e4,
    negotiable: false,
    mileage: 0,
    fuelType: "petrol",
    transmission: "automatic",
    engineCC: 660,
    horsepower: 49,
    torque: 60,
    color: "Cerulean Blue",
    seats: 5,
    driveType: "fwd",
    features: ["ABS", "Airbags", "Power Steering", "Remote Key", "USB Charging"],
    images: [
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=450&fit=crop&auto=format"
    ],
    location: { province: "Central", district: "Kandy", city: "Kandy", lat: 7.289, lng: 80.632 },
    dealerId: "d4",
    sellerType: "dealer",
    dealRating: "good",
    marketValue: 195e4,
    safetyRating: 3,
    posted: "2024-12-20T08:00:00Z",
    views: 1120,
    featured: false,
    fuelConsumption: "22 km/L"
  },
  {
    id: "5",
    slug: "bmw-3-series-2021-5",
    title: "2021 BMW 3 Series",
    make: "BMW",
    model: "3 Series",
    variant: "320i M Sport",
    year: 2021,
    condition: "used",
    bodyType: "sedan",
    price: 22e6,
    negotiable: true,
    mileage: 35e3,
    fuelType: "petrol",
    transmission: "automatic",
    engineCC: 1998,
    horsepower: 184,
    torque: 290,
    color: "Mineral White",
    seats: 5,
    driveType: "rwd",
    features: ["M Sport Package", "Adaptive LED", "HUD", "Harman Kardon Audio", "Parking Assist", "Apple CarPlay", "Heated Seats"],
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=450&fit=crop&auto=format"
    ],
    location: { province: "Western", district: "Colombo", city: "Colombo 03", lat: 6.895, lng: 79.855 },
    dealerId: "d3",
    sellerType: "dealer",
    dealRating: "fair",
    marketValue: 215e5,
    safetyRating: 5,
    posted: "2024-12-08T14:00:00Z",
    views: 3240,
    featured: true,
    fuelConsumption: "14 km/L"
  },
  {
    id: "6",
    slug: "nissan-x-trail-2022-6",
    title: "2022 Nissan X-Trail",
    make: "Nissan",
    model: "X-Trail",
    variant: "e-Power Autech",
    year: 2022,
    condition: "reconditioned",
    bodyType: "suv",
    price: 142e5,
    negotiable: true,
    mileage: 18e3,
    fuelType: "hybrid",
    transmission: "automatic",
    engineCC: 1500,
    horsepower: 204,
    torque: 330,
    color: "Champagne Silver",
    seats: 7,
    driveType: "awd",
    features: ["ProPILOT Assist", "Around View Monitor", "Bose Audio", "Dual Zone A/C", "Power Tailgate"],
    images: [
      "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=450&fit=crop&auto=format"
    ],
    location: { province: "Western", district: "Gampaha", city: "Ja-Ela", lat: 7.073, lng: 79.893 },
    dealerId: "d2",
    sellerType: "dealer",
    dealRating: "good",
    marketValue: 15e6,
    safetyRating: 5,
    posted: "2024-12-12T10:30:00Z",
    views: 2890,
    featured: false,
    fuelConsumption: "16 km/L"
  },
  {
    id: "7",
    slug: "mercedes-c-class-2020-7",
    title: "2020 Mercedes-Benz C-Class",
    make: "Mercedes-Benz",
    model: "C-Class",
    variant: "C200 AMG Line",
    year: 2020,
    condition: "used",
    bodyType: "sedan",
    price: 285e5,
    negotiable: true,
    mileage: 52e3,
    fuelType: "petrol",
    transmission: "automatic",
    engineCC: 1991,
    horsepower: 204,
    torque: 300,
    color: "Obsidian Black",
    seats: 5,
    driveType: "rwd",
    features: ["AMG Styling", "Burmester Audio", "MBUX", "Heated Seats", "Panoramic Sunroof", "LED Headlights", "Wireless Charging"],
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&h=450&fit=crop&auto=format"
    ],
    location: { province: "Western", district: "Colombo", city: "Colombo 03", lat: 6.895, lng: 79.855 },
    dealerId: "d3",
    sellerType: "dealer",
    dealRating: "fair",
    marketValue: 275e5,
    safetyRating: 5,
    posted: "2024-11-28T09:00:00Z",
    views: 4120,
    featured: true,
    fuelConsumption: "13 km/L"
  },
  {
    id: "8",
    slug: "mitsubishi-outlander-2023-8",
    title: "2023 Mitsubishi Outlander",
    make: "Mitsubishi",
    model: "Outlander",
    variant: "PHEV G",
    year: 2023,
    condition: "new",
    bodyType: "suv",
    price: 189e5,
    negotiable: false,
    mileage: 0,
    fuelType: "hybrid",
    transmission: "automatic",
    engineCC: 2400,
    horsepower: 224,
    torque: 332,
    color: "Diamond White",
    seats: 7,
    driveType: "awd",
    features: ["PHEV", "MI-PILOT Assist", "Surround View Camera", "Bose Audio", "Power Tailgate", "Heated Steering"],
    images: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=450&fit=crop&auto=format"
    ],
    location: { province: "Western", district: "Colombo", city: "Colombo 09", lat: 6.919, lng: 79.863 },
    dealerId: "d6",
    sellerType: "dealer",
    dealRating: "good",
    marketValue: 195e5,
    safetyRating: 5,
    posted: "2024-12-19T12:00:00Z",
    views: 1567,
    featured: true,
    fuelConsumption: "20 km/L (electric range: 84km)"
  },
  {
    id: "9",
    slug: "honda-fit-2022-9",
    title: "2022 Honda Fit",
    make: "Honda",
    model: "Fit",
    variant: "e:HEV Basic",
    year: 2022,
    condition: "used",
    bodyType: "hatchback",
    price: 52e5,
    negotiable: true,
    mileage: 31e3,
    fuelType: "hybrid",
    transmission: "cvt",
    engineCC: 1500,
    horsepower: 98,
    torque: 131,
    color: "Lunar Silver",
    seats: 5,
    driveType: "fwd",
    features: ["Honda Sensing", "Wireless Charging", "Apple CarPlay", "Magic Seats", "LED Headlights"],
    images: [
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&h=450&fit=crop&auto=format"
    ],
    location: { province: "Western", district: "Gampaha", city: "Ja-Ela", lat: 7.073, lng: 79.893 },
    dealerId: "d2",
    sellerType: "dealer",
    dealRating: "great",
    marketValue: 6e6,
    safetyRating: 4,
    posted: "2024-12-16T16:00:00Z",
    views: 890,
    featured: false,
    fuelConsumption: "27 km/L"
  },
  {
    id: "10",
    slug: "hyundai-tucson-2023-10",
    title: "2023 Hyundai Tucson",
    make: "Hyundai",
    model: "Tucson",
    variant: "Hybrid Luxury",
    year: 2023,
    condition: "new",
    bodyType: "suv",
    price: 165e5,
    negotiable: false,
    mileage: 0,
    fuelType: "hybrid",
    transmission: "automatic",
    engineCC: 1600,
    horsepower: 230,
    torque: 350,
    color: "Abyss Black",
    seats: 5,
    driveType: "awd",
    features: ["SmartSense Safety", "Bose Audio", "Head-Up Display", "Remote Start", "Ventilated Seats", "Panoramic Sunroof"],
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=450&fit=crop&auto=format"
    ],
    location: { province: "Central", district: "Kandy", city: "Kandy", lat: 7.289, lng: 80.632 },
    dealerId: "d4",
    sellerType: "dealer",
    dealRating: "good",
    marketValue: 172e5,
    safetyRating: 5,
    posted: "2024-12-17T13:00:00Z",
    views: 2103,
    featured: true,
    fuelConsumption: "17 km/L"
  },
  {
    id: "11",
    slug: "isuzu-d-max-2022-11",
    title: "2022 Isuzu D-Max",
    make: "Isuzu",
    model: "D-Max",
    variant: "LS-Terrain 4WD",
    year: 2022,
    condition: "used",
    bodyType: "pickup",
    price: 118e5,
    negotiable: true,
    mileage: 48e3,
    fuelType: "diesel",
    transmission: "automatic",
    engineCC: 3e3,
    horsepower: 190,
    torque: 450,
    color: "Spinel Red",
    seats: 5,
    driveType: "4wd",
    features: ["Around View Monitor", "ADAS Safety Suite", "Rear Diff Lock", "Apple CarPlay", "Wireless Charging"],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1583267746897-2cf415887172?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&h=450&fit=crop&auto=format"
    ],
    location: { province: "Southern", district: "Galle", city: "Galle", lat: 6.055, lng: 80.218 },
    dealerId: "d5",
    sellerType: "dealer",
    dealRating: "great",
    marketValue: 135e5,
    safetyRating: 5,
    posted: "2024-12-05T10:00:00Z",
    views: 3120,
    featured: false,
    fuelConsumption: "12 km/L"
  },
  {
    id: "12",
    slug: "kia-ev6-2023-12",
    title: "2023 Kia EV6",
    make: "Kia",
    model: "EV6",
    variant: "Wind AWD",
    year: 2023,
    condition: "new",
    bodyType: "electric",
    price: 295e5,
    negotiable: false,
    mileage: 0,
    fuelType: "electric",
    transmission: "automatic",
    engineCC: 0,
    horsepower: 320,
    torque: 605,
    color: "Aurora Black",
    seats: 5,
    driveType: "awd",
    features: ["800V Ultra Fast Charging", "V2L Technology", "Meridian Audio", "HUD", "Remote Smart Parking", "Full ADAS Suite"],
    images: [
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&h=450&fit=crop&auto=format"
    ],
    location: { province: "Western", district: "Colombo", city: "Colombo 09", lat: 6.919, lng: 79.863 },
    dealerId: "d6",
    sellerType: "dealer",
    dealRating: "good",
    marketValue: 305e5,
    safetyRating: 5,
    posted: "2024-12-22T11:00:00Z",
    views: 4890,
    featured: true,
    fuelConsumption: "0 L/100km (515 km range)"
  }
];

const mockDealers = [
  {
    id: "d1",
    name: "Prima Auto Lanka",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=160&h=160&fit=crop&auto=format",
    bannerImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&h=500&fit=crop&auto=format",
    showroomImages: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop&auto=format"
    ],
    province: "Western",
    district: "Colombo",
    address: "142 Galle Road, Colombo 04",
    phone: "+94 11 234 5678",
    whatsapp: "+94 77 234 5678",
    email: "sales@primaautolanka.lk",
    website: "https://primaautolanka.lk",
    rating: 4.8,
    reviewCount: 124,
    listingCount: 89,
    specialization: ["Toyota Specialists", "Hybrid Vehicles", "Brand New & Reconditioned", "EV Ready"],
    verified: true,
    lat: 6.887,
    lng: 79.851,
    description: "Premier authorized automobile dealership in Sri Lanka with over 20 years of excellence. Specializing in genuine Japanese imports, certified hybrid maintenance, and factory-fresh luxury vehicles with full 3-year warranties.",
    established: 2003,
    openHours: "Mon - Sat: 8:30 AM - 6:30 PM",
    openingHours: {
      weekdays: "8:30 AM - 6:30 PM",
      saturday: "9:00 AM - 5:00 PM",
      sunday: "10:00 AM - 2:00 PM (By Appointment)"
    },
    services: [
      "Official Dealership Warranty (3 Years / 100,000 km)",
      "Speedy Bank Lease Assistance (1-day pre-approval)",
      "Guaranteed Trade-In & Vehicle Exchange Valuations",
      "Doorstep Test Drives & VIP Home Consultations",
      "Government Registration & Revenue License Handling"
    ],
    badges: ["Top Rated Dealer 2024", "Verified Showroom", "Hybrid Certified", "Direct Importer"],
    reviewsList: [
      {
        id: "dr1",
        author: "Damith Wickramasinghe",
        rating: 5,
        date: "2024-11-20",
        comment: "Purchased a 2022 Prius from Prima Auto Lanka. The entire process was transparent, all auction sheets were verified Japanese originals, and loan approval took only 24 hours. Highly recommended!",
        vehiclePurchased: "2022 Toyota Prius Hybrid G",
        verifiedBuyer: true
      },
      {
        id: "dr2",
        author: "Chaminda Silva",
        rating: 5,
        date: "2024-10-14",
        comment: "Outstanding customer care. Their showroom in Bambalapitiya is state of the art and their staff explained the hybrid battery warranty thoroughly.",
        vehiclePurchased: "2023 Toyota Land Cruiser Prado",
        verifiedBuyer: true
      },
      {
        id: "dr3",
        author: "Anura Bandara",
        rating: 4.5,
        date: "2024-09-02",
        comment: "Great selection of hybrid cars with authentic mileage certificates. Very professional team.",
        vehiclePurchased: "2021 Toyota Corolla Cross",
        verifiedBuyer: true
      }
    ]
  },
  {
    id: "d2",
    name: "Millennium Motors",
    logo: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=160&h=160&fit=crop&auto=format",
    bannerImage: "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=1600&h=500&fit=crop&auto=format",
    showroomImages: [
      "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=500&fit=crop&auto=format"
    ],
    province: "Western",
    district: "Gampaha",
    address: "28 Negombo Road, Ja-Ela",
    phone: "+94 11 345 6789",
    whatsapp: "+94 77 345 6789",
    email: "info@millenniummotors.lk",
    website: "https://millenniummotors.lk",
    rating: 4.6,
    reviewCount: 87,
    listingCount: 145,
    specialization: ["Used Cars", "Japanese SUVs", "Honda e:HEV", "Family Vans"],
    verified: true,
    lat: 7.073,
    lng: 79.893,
    description: "One of the largest vehicle showrooms in the Gampaha district with over 140+ verified vehicles on display. Specializing in immaculate Japanese pre-owned SUVs, compact city hatchbacks, and fuel-efficient family crossovers.",
    established: 2008,
    openHours: "Mon - Sun: 8:00 AM - 7:00 PM",
    openingHours: {
      weekdays: "8:00 AM - 7:00 PM",
      saturday: "8:00 AM - 6:00 PM",
      sunday: "9:00 AM - 4:00 PM"
    },
    services: [
      "Comprehensive 150-Point Pre-Purchase Inspection Report",
      "Special Low-Interest Leasing via Major Banks",
      "Direct Vehicle Exchange with Best Market Value",
      "Free 1-Year Comprehensive Lube & Oil Maintenance"
    ],
    badges: ["Gampaha #1 Volume Dealer", "Verified Showroom", "150-Point Checked"],
    reviewsList: [
      {
        id: "dr4",
        author: "Niroshan Fonseka",
        rating: 5,
        date: "2024-12-01",
        comment: "Bought my Honda Vezel e:HEV here. Clean documentation, zero hidden charges, and hassle-free registration.",
        vehiclePurchased: "2023 Honda Vezel e:HEV",
        verifiedBuyer: true
      },
      {
        id: "dr5",
        author: "Priyantha Jayasuriya",
        rating: 4,
        date: "2024-11-05",
        comment: "Huge showroom with lots of options. Negotiable pricing and polite staff.",
        vehiclePurchased: "2022 Nissan X-Trail",
        verifiedBuyer: true
      }
    ]
  },
  {
    id: "d3",
    name: "Luxury Auto Gallery",
    logo: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=160&h=160&fit=crop&auto=format",
    bannerImage: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1600&h=500&fit=crop&auto=format",
    showroomImages: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=500&fit=crop&auto=format"
    ],
    province: "Western",
    district: "Colombo",
    address: "56 Duplication Road, Colombo 03",
    phone: "+94 11 456 7890",
    whatsapp: "+94 77 456 7890",
    email: "concierge@luxuryautogallery.lk",
    website: "https://luxuryautogallery.lk",
    rating: 4.9,
    reviewCount: 62,
    listingCount: 34,
    specialization: ["European Luxury", "BMW M Series", "Mercedes-AMG", "Porsche", "Audi S-Line"],
    verified: true,
    lat: 6.895,
    lng: 79.855,
    description: "Colombo\u2019s premier boutique showroom for European performance and luxury marques. Each vehicle is hand-selected from authorized dealers in the UK, Germany, and Japan with meticulous service records.",
    established: 2015,
    openHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    openingHours: {
      weekdays: "9:00 AM - 7:00 PM",
      saturday: "9:30 AM - 5:30 PM",
      sunday: "Private Appointments Only"
    },
    services: [
      "Bespoke European Import Sourcing on Demand",
      "Private VIP Viewing Lounge & Test Drive Service",
      "Ceramic Coating & Paint Protection Film (PPF) Pre-delivery",
      "Exclusive Tailored Financial & Lease Concierge"
    ],
    badges: ["Luxury Specialist", "Verified VIP Dealer", "European Import Award"],
    reviewsList: [
      {
        id: "dr6",
        author: "Roshan Samarasinghe",
        rating: 5,
        date: "2024-11-18",
        comment: "Picked up a 2021 BMW 320i M Sport. Immaculate condition just as described. The VIP service in Colombo 03 is second to none.",
        vehiclePurchased: "2021 BMW 3 Series 320i M Sport",
        verifiedBuyer: true
      },
      {
        id: "dr7",
        author: "Dr. Mahesh Fernando",
        rating: 5,
        date: "2024-09-25",
        comment: "Top tier luxury experience. Traded in my older C200 for a new model without any headache.",
        vehiclePurchased: "2020 Mercedes-Benz C200 AMG Line",
        verifiedBuyer: true
      }
    ]
  },
  {
    id: "d4",
    name: "Island Wide Auto",
    logo: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=160&h=160&fit=crop&auto=format",
    bannerImage: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1600&h=500&fit=crop&auto=format",
    showroomImages: [
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&h=500&fit=crop&auto=format"
    ],
    province: "Central",
    district: "Kandy",
    address: "78 Peradeniya Road, Kandy",
    phone: "+94 81 234 5678",
    whatsapp: "+94 77 567 8901",
    email: "kandy@islandwideauto.lk",
    rating: 4.5,
    reviewCount: 98,
    listingCount: 112,
    specialization: ["Economy Cars", "City Hatchbacks", "Family Sedans", "Used Cars"],
    verified: true,
    lat: 7.289,
    lng: 80.632,
    established: 2005,
    openHours: "Mon - Sun: 8:30 AM - 6:00 PM",
    openingHours: {
      weekdays: "8:30 AM - 6:00 PM",
      saturday: "8:30 AM - 5:00 PM",
      sunday: "9:00 AM - 2:00 PM"
    },
    services: [
      "Hill Country Vehicle Health & Brake Certifications",
      "Affordable Leasing Options with 10% Down Payment",
      "Instant Ownership Transfer Support"
    ],
    badges: ["Kandy #1 Dealer", "Verified Showroom", "Budget Friendly"],
    reviewsList: [
      {
        id: "dr8",
        author: "Kavindu Senanayake",
        rating: 4.5,
        date: "2024-11-10",
        comment: "Bought a 2023 Suzuki Alto. Perfect for commuting in Kandy. The staff arranged bank leasing within two days.",
        vehiclePurchased: "2023 Suzuki Alto VXR",
        verifiedBuyer: true
      }
    ]
  },
  {
    id: "d5",
    name: "Southern Motors",
    logo: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=160&h=160&fit=crop&auto=format",
    bannerImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=500&fit=crop&auto=format",
    showroomImages: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1583267746897-2cf415887172?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop&auto=format"
    ],
    province: "Southern",
    district: "Galle",
    address: "34 Matara Road, Galle",
    phone: "+94 91 234 5678",
    whatsapp: "+94 77 678 9012",
    rating: 4.3,
    reviewCount: 45,
    listingCount: 67,
    specialization: ["4WD & Pickups", "Commercial Vehicles", "SUVs", "Used Cars"],
    verified: true,
    lat: 6.055,
    lng: 80.218,
    established: 2011,
    openHours: "Mon - Sat: 8:00 AM - 6:00 PM",
    openingHours: {
      weekdays: "8:00 AM - 6:00 PM",
      saturday: "8:00 AM - 5:00 PM",
      sunday: "Closed"
    },
    services: [
      "4x4 Drivetrain & Suspension Inspections",
      "Commercial Fleet Leasing Support",
      "Exchange with Outstation Vehicles"
    ],
    badges: ["Southern Province Specialist", "Verified 4x4 Dealer"],
    reviewsList: [
      {
        id: "dr9",
        author: "Sunil De Silva",
        rating: 4.5,
        date: "2024-10-22",
        comment: "Great experience purchasing an Isuzu D-Max. Powerful machine and genuine condition.",
        vehiclePurchased: "2022 Isuzu D-Max LS-Terrain",
        verifiedBuyer: true
      }
    ]
  },
  {
    id: "d6",
    name: "EV Lanka Motors",
    logo: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=160&h=160&fit=crop&auto=format",
    bannerImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1600&h=500&fit=crop&auto=format",
    showroomImages: [
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600790142055-619df03207e6?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&h=500&fit=crop&auto=format"
    ],
    province: "Western",
    district: "Colombo",
    address: "22 Baseline Road, Colombo 09",
    phone: "+94 11 567 8901",
    whatsapp: "+94 77 789 0123",
    rating: 4.7,
    reviewCount: 38,
    listingCount: 28,
    specialization: ["Electric Vehicles", "PHEV Hybrids", "EV Home Charging Solutions", "Battery Health Audits"],
    verified: true,
    lat: 6.919,
    lng: 79.863,
    established: 2020,
    openHours: "Mon - Sat: 9:00 AM - 6:30 PM",
    openingHours: {
      weekdays: "9:00 AM - 6:30 PM",
      saturday: "9:00 AM - 5:00 PM",
      sunday: "10:00 AM - 3:00 PM"
    },
    services: [
      "Complimentary 7.4kW Home EV Wallbox Charger & Installation",
      "State-of-Health (SOH) Certified EV Battery Reports",
      "8-Year High Voltage Battery Warranty Coverage"
    ],
    badges: ["EV Pioneer", "Certified Battery Lab", "Verified Showroom"],
    reviewsList: [
      {
        id: "dr10",
        author: "Malinda Senaratne",
        rating: 5,
        date: "2024-11-28",
        comment: "Got my Kia EV6 here. They installed the home charger within 48 hours. Excellent EV knowledge and support in Sri Lanka.",
        vehiclePurchased: "2023 Kia EV6 Wind AWD",
        verifiedBuyer: true
      }
    ]
  }
];

const mockParts = [
  {
    id: "p1",
    title: "Genuine Toyota Electric Inverter Water Pump Assembly",
    slug: "genuine-toyota-inverter-water-pump-zvw50-zvw30",
    partNumber: "G9040-48020",
    oemNumber: "G9040-52010",
    brand: "Toyota Genuine",
    category: "engine",
    categoryLabel: "Engine & Hybrid System",
    price: 38500,
    originalPrice: 45e3,
    condition: "brand-new-oem",
    vehicleType: "Car",
    compatibleVehicles: [
      {
        type: "Car",
        make: "Toyota",
        model: "Prius",
        yearRange: "2015-2023",
        chassisCodes: ["ZVW50", "ZVW51", "ZVW52", "ZVW55", "ZVW30"]
      },
      {
        type: "Car",
        make: "Toyota",
        model: "Aqua",
        yearRange: "2012-2021",
        chassisCodes: ["NHP10"]
      },
      {
        type: "Car",
        make: "Toyota",
        model: "Corolla Axio Hybrid",
        yearRange: "2013-2022",
        chassisCodes: ["NKE165"]
      }
    ],
    chassisCodes: ["ZVW50", "ZVW51", "ZVW52", "ZVW55", "ZVW30", "NHP10", "NKE165"],
    inStock: true,
    stockQuantity: 14,
    warranty: "1 Year / 20,000 km Replacement Warranty",
    rating: 4.9,
    reviewCount: 38,
    images: [
      "https://images.unsplash.com/photo-1600790142055-619df03207e6?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800&h=600&fit=crop&auto=format"
    ],
    description: "100% Genuine Made in Japan inverter coolant water pump. Essential replacement to prevent hybrid inverter overheating and inverter warning light check codes. Comes in original Toyota packaging with holographic seal.",
    specifications: {
      "Manufacturer": "Toyota Motor Corporation (Aisin Japan)",
      "Voltage": "12V DC Electric",
      "Country of Origin": "Japan",
      "Part Type": "Hybrid Inverter Cooling Pump",
      "Fitting Position": "Engine Bay Front Left"
    },
    seller: {
      id: "d1",
      name: "Prima Auto Lanka Parts Division",
      verified: true,
      location: "Colombo 04",
      phone: "+94 11 234 5678",
      whatsapp: "+94 77 234 5678",
      rating: 4.9,
      storeId: "d1"
    },
    featured: true,
    badge: "OEM Genuine"
  },
  {
    id: "p2",
    title: "Panasonic OEM Certified Hybrid Battery Pack (Reconditioned / Cells Tested)",
    slug: "panasonic-oem-hybrid-battery-zvw50-zvw30-nhp10",
    partNumber: "G9510-47062",
    oemNumber: "G9510-47060",
    brand: "Panasonic / Toyota OEM",
    category: "batteries",
    categoryLabel: "Hybrid & EV Batteries",
    price: 345e3,
    originalPrice: 38e4,
    condition: "reconditioned",
    vehicleType: "Car",
    compatibleVehicles: [
      {
        type: "Car",
        make: "Toyota",
        model: "Prius",
        yearRange: "2016-2022",
        chassisCodes: ["ZVW50", "ZVW51", "ZVW30"]
      },
      {
        type: "Car",
        make: "Toyota",
        model: "Aqua",
        yearRange: "2012-2020",
        chassisCodes: ["NHP10"]
      }
    ],
    chassisCodes: ["ZVW50", "ZVW51", "ZVW30", "NHP10"],
    inStock: true,
    stockQuantity: 5,
    warranty: "2 Years Comprehensive Warranty with Free Battery Health Audit",
    rating: 4.8,
    reviewCount: 29,
    images: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600790142055-619df03207e6?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800&h=600&fit=crop&auto=format"
    ],
    description: "Fully re-balanced and impedance-tested NiMH hybrid battery pack featuring brand-new Panasonic Grade-A matched cells. Restores original factory fuel consumption (25+ km/L) and instant torque response.",
    specifications: {
      "Cell Chemistry": "Nickel-Metal Hydride (Ni-MH)",
      "Nominal Voltage": "201.6V (28 Modules x 7.2V)",
      "Capacity": "6.5 Ah Tested",
      "Diagnostic Report": "Included with individual cell IR readings",
      "Installation": "Free installation available at Colombo showroom"
    },
    seller: {
      id: "d6",
      name: "EV Lanka Motors Battery Tech",
      verified: true,
      location: "Colombo 09",
      phone: "+94 11 567 8901",
      whatsapp: "+94 77 789 0123",
      rating: 4.8,
      storeId: "d6"
    },
    featured: true,
    badge: "Hybrid Certified"
  },
  {
    id: "p3",
    title: "Akebono Japan Ceramic Ultra-Quiet Front Brake Pads Set",
    slug: "akebono-ceramic-front-brake-pads-honda-vezel-fit",
    partNumber: "AN-753WK",
    oemNumber: "45022-T7A-J00",
    brand: "Akebono",
    category: "suspension-brakes",
    categoryLabel: "Brakes & Suspension",
    price: 16800,
    originalPrice: 19500,
    condition: "brand-new-oem",
    vehicleType: "SUV",
    compatibleVehicles: [
      {
        type: "SUV",
        make: "Honda",
        model: "Vezel",
        yearRange: "2014-2023",
        chassisCodes: ["RU1", "RU2", "RU3", "RU4", "RV3", "RV5"]
      },
      {
        type: "Car",
        make: "Honda",
        model: "Fit",
        yearRange: "2014-2022",
        chassisCodes: ["GP5", "GP6", "GK3", "GK5"]
      },
      {
        type: "Car",
        make: "Honda",
        model: "Grace",
        yearRange: "2014-2020",
        chassisCodes: ["GM4", "GM5"]
      },
      {
        type: "Car",
        make: "Honda",
        model: "Civic",
        yearRange: "2016-2021",
        chassisCodes: ["FK7", "FC1"]
      }
    ],
    chassisCodes: ["RU1", "RU2", "RU3", "RU4", "RV3", "RV5", "GP5", "GP6", "GK3", "GK5", "GM4", "GM5", "FK7", "FC1"],
    inStock: true,
    stockQuantity: 28,
    warranty: "6 Months / 15,000 km Warranty",
    rating: 4.9,
    reviewCount: 47,
    images: [
      "https://images.unsplash.com/photo-1600790142055-619df03207e6?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop&auto=format"
    ],
    description: "Premier Akebono Pro-ACT ceramic disc brake pads engineered in Japan. Delivers maximum stopping power, zero brake squeal, and ultra-low rotor dust for Honda Vezel and Fit models.",
    specifications: {
      "Friction Material": "Advanced Ceramic Matrix",
      "Position": "Front Axle (Left & Right)",
      "Shim": "Multi-layered Rubberized Anti-Squeal Shim Included",
      "Country of Origin": "Japan"
    },
    seller: {
      id: "d2",
      name: "Millennium Motors Parts Outlet",
      verified: true,
      location: "Ja-Ela, Negombo Rd",
      phone: "+94 11 345 6789",
      whatsapp: "+94 77 345 6789",
      rating: 4.7,
      storeId: "d2"
    },
    featured: true,
    badge: "Best Seller"
  },
  {
    id: "p4",
    title: "Mobil 1 Advanced Fuel Economy 0W-20 Full Synthetic Engine Oil (4 Litres)",
    slug: "mobil-1-0w20-advanced-fuel-economy-4l",
    partNumber: "MOB-0W20-4L",
    brand: "Mobil 1",
    category: "lubricants-fluids",
    categoryLabel: "Lubricants & Fluids",
    price: 24500,
    originalPrice: 27e3,
    condition: "brand-new-oem",
    vehicleType: "Universal",
    compatibleVehicles: [
      {
        type: "Car",
        make: "Toyota",
        model: "Prius / Aqua / Corolla",
        yearRange: "2012-2024",
        chassisCodes: ["ZVW50", "ZVW30", "NHP10", "NZE161", "E210"]
      },
      {
        type: "SUV",
        make: "Honda",
        model: "Vezel / CR-V / Fit",
        yearRange: "2014-2024",
        chassisCodes: ["RU3", "RV5", "GP5", "RW1"]
      },
      {
        type: "Car",
        make: "Suzuki",
        model: "Alto / Wagon R / Hustler",
        yearRange: "2015-2024",
        chassisCodes: ["HA36S", "MH44S", "MH55S", "MR31S"]
      }
    ],
    chassisCodes: ["ZVW50", "ZVW30", "NHP10", "NZE161", "E210", "RU3", "RV5", "GP5", "RW1", "HA36S", "MH44S", "MH55S", "MR31S"],
    inStock: true,
    stockQuantity: 65,
    warranty: "100% Genuine Product Guarantee with Verification QR",
    rating: 5,
    reviewCount: 92,
    images: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800&h=600&fit=crop&auto=format"
    ],
    description: "Mobil 1 0W-20 is an advanced full synthetic engine oil designed to help deliver outstanding engine protection and enhanced fuel economy benefits. Ideal for modern Japanese hybrid and direct-injection petrol engines.",
    specifications: {
      "Viscosity Grade": "SAE 0W-20",
      "API Service": "API SP / SN PLUS / SN",
      "ILSAC Rating": "GF-6A Resource Conserving",
      "Volume": "4 Litres Bottle (Made in USA / Singapore)",
      "Recommended Drain Interval": "10,000 km or 12 months"
    },
    seller: {
      id: "d1",
      name: "Prima Auto Lanka Parts Division",
      verified: true,
      location: "Colombo 04",
      phone: "+94 11 234 5678",
      whatsapp: "+94 77 234 5678",
      rating: 4.9,
      storeId: "d1"
    },
    featured: true,
    badge: "Popular Choice"
  },
  {
    id: "p5",
    title: "Castrol EDGE Titanium FST 5W-30 Full Synthetic Motor Oil (4 Litres)",
    slug: "castrol-edge-5w30-titanium-fst-4l",
    partNumber: "CAS-5W30-4L",
    brand: "Castrol",
    category: "lubricants-fluids",
    categoryLabel: "Lubricants & Fluids",
    price: 26800,
    originalPrice: 29500,
    condition: "brand-new-oem",
    vehicleType: "Universal",
    compatibleVehicles: [
      {
        type: "Car",
        make: "BMW",
        model: "3 Series / 5 Series",
        yearRange: "2012-2024",
        chassisCodes: ["F30", "G20", "F10", "G30"]
      },
      {
        type: "Car",
        make: "Mercedes-Benz",
        model: "C-Class / E-Class",
        yearRange: "2014-2024",
        chassisCodes: ["W205", "W206", "W213"]
      },
      {
        type: "SUV",
        make: "Toyota",
        model: "Land Cruiser Prado / Fortuner",
        yearRange: "2010-2024",
        chassisCodes: ["GDJ150", "TRJ150", "GUN156"]
      }
    ],
    chassisCodes: ["F30", "G20", "F10", "G30", "W205", "W206", "W213", "GDJ150", "TRJ150", "GUN156", "NZE141"],
    inStock: true,
    stockQuantity: 42,
    warranty: "Official Castrol Importer Genuine Seal",
    rating: 4.8,
    reviewCount: 54,
    images: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600790142055-619df03207e6?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop&auto=format"
    ],
    description: "Castrol EDGE with Fluid TITANIUM technology transforms its structure under extreme pressure to keep metal apart and reduce friction. Recommended for European luxury turbo engines and modern common-rail diesels.",
    specifications: {
      "Viscosity Grade": "SAE 5W-30",
      "Approvals": "BMW Longlife-04, MB-Approval 229.51/229.52, VW 504 00/507 00",
      "API Standard": "API SN / CF, ACEA C3",
      "Volume": "4 Litres Canister"
    },
    seller: {
      id: "d3",
      name: "Luxury Auto Gallery Concierge",
      verified: true,
      location: "Colombo 03",
      phone: "+94 11 456 7890",
      whatsapp: "+94 77 456 7890",
      rating: 4.9,
      storeId: "d3"
    },
    badge: "European Spec"
  },
  {
    id: "p6",
    title: "KYB Japan Excel-G Front Gas Shock Absorbers (Pair Left & Right)",
    slug: "kyb-excel-g-front-shock-absorbers-toyota-corolla-nze141",
    partNumber: "KYB-339031-339032",
    oemNumber: "48510-12A50",
    brand: "KYB (Kayaba Japan)",
    category: "suspension-brakes",
    categoryLabel: "Brakes & Suspension",
    price: 48500,
    originalPrice: 56e3,
    condition: "brand-new-oem",
    vehicleType: "Car",
    compatibleVehicles: [
      {
        type: "Car",
        make: "Toyota",
        model: "Corolla / Axio / Fielder",
        yearRange: "2007-2016",
        chassisCodes: ["NZE141", "NZE144", "ZRE142", "ZRE144"]
      },
      {
        type: "Car",
        make: "Toyota",
        model: "Premio / Allion",
        yearRange: "2007-2020",
        chassisCodes: ["NZT260", "ZRT260", "ZRT261"]
      }
    ],
    chassisCodes: ["NZE141", "NZE144", "ZRE142", "ZRE144", "NZT260", "ZRT260", "ZRT261"],
    inStock: true,
    stockQuantity: 12,
    warranty: "1 Year KYB Manufacturer Warranty",
    rating: 4.7,
    reviewCount: 31,
    images: [
      "https://images.unsplash.com/photo-1600790142055-619df03207e6?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&h=600&fit=crop&auto=format"
    ],
    description: "Original KYB Excel-G twin-tube nitrogen gas pressurized struts made in Japan. Restores OEM stability, precise handling, and comfortable ride quality over Sri Lankan road conditions.",
    specifications: {
      "Design": "Twin Tube Nitrogen Gas Charged",
      "Piston Rod": "Triple Chrome Plated Induction Hardened",
      "Fitment": "Direct Bolt-on OEM Replacement",
      "Quantity": "Set of 2 Struts (Left & Right)"
    },
    seller: {
      id: "d4",
      name: "Island Wide Auto Kandy",
      verified: true,
      location: "Peradeniya Road, Kandy",
      phone: "+94 81 234 5678",
      whatsapp: "+94 77 567 8901",
      rating: 4.6,
      storeId: "d4"
    },
    badge: "Made in Japan"
  },
  {
    id: "p7",
    title: "Denso Iridium TT Spark Plugs (Set of 3) - Suzuki Alto & Wagon R",
    slug: "denso-iridium-tt-spark-plugs-suzuki-alto-wagon-r",
    partNumber: "IXUH22I",
    oemNumber: "09482-00624",
    brand: "Denso Japan",
    category: "engine",
    categoryLabel: "Engine & Ignition",
    price: 11500,
    originalPrice: 13500,
    condition: "brand-new-oem",
    vehicleType: "Car",
    compatibleVehicles: [
      {
        type: "Car",
        make: "Suzuki",
        model: "Alto",
        yearRange: "2014-2023",
        chassisCodes: ["HA36S", "HA36V", "HA25S"]
      },
      {
        type: "Car",
        make: "Suzuki",
        model: "Wagon R",
        yearRange: "2014-2023",
        chassisCodes: ["MH44S", "MH55S", "MH34S"]
      },
      {
        type: "Car",
        make: "Suzuki",
        model: "Spacia / Hustler",
        yearRange: "2015-2023",
        chassisCodes: ["MK42S", "MK53S", "MR31S", "MR41S"]
      }
    ],
    chassisCodes: ["HA36S", "HA36V", "HA25S", "MH44S", "MH55S", "MH34S", "MK42S", "MK53S", "MR31S", "MR41S"],
    inStock: true,
    stockQuantity: 50,
    warranty: "50,000 km Guaranteed Ignition Life",
    rating: 4.9,
    reviewCount: 66,
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600790142055-619df03207e6?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800&h=600&fit=crop&auto=format"
    ],
    description: "Denso Twin-Tip Iridium & Platinum 0.4mm spark plugs engineered for Suzuki 660cc R06A engines. Solves idle shivering, cold start lag, and boosts fuel efficiency up to 26+ km/L.",
    specifications: {
      "Center Electrode": "0.4mm Ultra-Fine Iridium",
      "Ground Electrode": "0.7mm Platinum Needle Tip",
      "Thread Diameter": "12 mm",
      "Quantity": "Pack of 3 Plugs"
    },
    seller: {
      id: "d4",
      name: "Island Wide Auto Kandy",
      verified: true,
      location: "Peradeniya Road, Kandy",
      phone: "+94 81 234 5678",
      whatsapp: "+94 77 567 8901",
      rating: 4.6,
      storeId: "d4"
    },
    badge: "Fuel Saver"
  },
  {
    id: "p8",
    title: "Brembo UV-Coated Front Ventilated Brake Discs (Pair) - Mercedes-Benz",
    slug: "brembo-uv-coated-brake-discs-mercedes-w205-c-class",
    partNumber: "09.C399.13",
    oemNumber: "A0004212112",
    brand: "Brembo Italy",
    category: "suspension-brakes",
    categoryLabel: "Brakes & Suspension",
    price: 84e3,
    originalPrice: 96e3,
    condition: "brand-new-oem",
    vehicleType: "Car",
    compatibleVehicles: [
      {
        type: "Car",
        make: "Mercedes-Benz",
        model: "C-Class Sedan & Coupe",
        yearRange: "2014-2021",
        chassisCodes: ["W205", "S205", "C205", "A205"]
      },
      {
        type: "Car",
        make: "Mercedes-Benz",
        model: "E-Class",
        yearRange: "2016-2023",
        chassisCodes: ["W213", "S213"]
      }
    ],
    chassisCodes: ["W205", "S205", "C205", "A205", "W213", "S213"],
    inStock: true,
    stockQuantity: 8,
    warranty: "1 Year / 25,000 km Warranty",
    rating: 5,
    reviewCount: 19,
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600790142055-619df03207e6?w=800&h=600&fit=crop&auto=format"
    ],
    description: "High carbon Brembo ventilated disc rotors with anti-corrosion UV coating. Specifically designed for Mercedes-Benz AMG Line braking systems with drilled cooling channels.",
    specifications: {
      "Diameter": "342 mm Ventilated & Perforated",
      "Thickness": "32 mm (Minimum wear 30mm)",
      "Coating": "UV Metallic Anti-Rust Protective Finish",
      "Country of Origin": "Italy"
    },
    seller: {
      id: "d3",
      name: "Luxury Auto Gallery Concierge",
      verified: true,
      location: "Colombo 03",
      phone: "+94 11 456 7890",
      whatsapp: "+94 77 456 7890",
      rating: 4.9,
      storeId: "d3"
    },
    badge: "High Performance"
  },
  {
    id: "p9",
    title: "70mai A810 Flagship 4K HDR Dual Dashcam with Sony Starvis 2 & Built-in GPS",
    slug: "70mai-a810-4k-hdr-dual-dashcam-sony-starvis-2",
    partNumber: "70MAI-A810-KIT",
    brand: "70mai / Xiaomi Ecosystem",
    category: "accessories",
    categoryLabel: "Car Tech & Accessories",
    price: 49500,
    originalPrice: 58e3,
    condition: "brand-new-oem",
    vehicleType: "Universal",
    compatibleVehicles: [
      {
        type: "Universal",
        make: "All Makes",
        model: "Universal Fit (Cars, SUVs, Vans, Pickups, Trucks)",
        yearRange: "2000-2025",
        chassisCodes: ["ALL"]
      }
    ],
    chassisCodes: ["ALL", "ZVW50", "RU3", "NZE141", "W205", "F30", "HA36S"],
    inStock: true,
    stockQuantity: 32,
    warranty: "1 Year Complete Hardware Replacement Warranty",
    rating: 4.9,
    reviewCount: 78,
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=600&fit=crop&auto=format"
    ],
    description: "The ultimate automotive safety companion for Sri Lankan roads. Features true 4K Ultra HD front camera powered by Sony STARVIS 2 IMX678 sensor and 1080P rear camera. Built-in ADAS lane departure alerts, collision warning, 24-hour parking surveillance, and Sri Lanka GPS coordinates recording.",
    specifications: {
      "Video Resolution": "4K UHD (3840x2160) Front + 1080P HDR Rear",
      "Image Sensor": "Sony STARVIS 2 IMX678 (Supreme Night Vision)",
      "Display": "3.0 inch IPS Screen",
      "Connectivity": "Built-in Wi-Fi & Smartphone App (iOS / Android)",
      "Included in Box": "Front Cam, Rear Cam, Hardwire Kit, 64GB High-Endurance MicroSD"
    },
    seller: {
      id: "d1",
      name: "Prima Auto Lanka Parts Division",
      verified: true,
      location: "Colombo 04",
      phone: "+94 11 234 5678",
      whatsapp: "+94 77 234 5678",
      rating: 4.9,
      storeId: "d1"
    },
    featured: true,
    badge: "Top Tech 2024"
  },
  {
    id: "p10",
    title: "7D Laser-Fitted All-Weather Luxury Floor Liners (Complete Set)",
    slug: "7d-laser-fitted-all-weather-floor-liners-toyota-prius-zvw50",
    partNumber: "7D-PRIUS-50-BLK",
    brand: "Autocraft Premium",
    category: "accessories",
    categoryLabel: "Car Interior & Accessories",
    price: 28500,
    originalPrice: 34e3,
    condition: "brand-new-oem",
    vehicleType: "Car",
    compatibleVehicles: [
      {
        type: "Car",
        make: "Toyota",
        model: "Prius",
        yearRange: "2016-2023",
        chassisCodes: ["ZVW50", "ZVW51", "ZVW55"]
      }
    ],
    chassisCodes: ["ZVW50", "ZVW51", "ZVW55"],
    inStock: true,
    stockQuantity: 18,
    warranty: "2 Years Wear & Tear Material Warranty",
    rating: 4.8,
    reviewCount: 35,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=600&fit=crop&auto=format"
    ],
    description: "Precision laser-scanned 7D waterproof floor mats with deep tray design and detachable wire-loop coil layer. Shields against monsoon mud, spilled liquids, and sand while providing luxury acoustic sound dampening.",
    specifications: {
      "Material": "High-density EVA foam + Carbon texture leatherette + Detachable PVC curly mat",
      "Fitment": "Custom 3D scanned for Right-Hand Drive (RHD) Sri Lankan Prius ZVW50",
      "Waterproof": "100% Water, Mud & Oil Resistant",
      "Pieces": "Front Driver, Front Passenger, Full Rear Row Bridge"
    },
    seller: {
      id: "d1",
      name: "Prima Auto Lanka Parts Division",
      verified: true,
      location: "Colombo 04",
      phone: "+94 11 234 5678",
      whatsapp: "+94 77 234 5678",
      rating: 4.9,
      storeId: "d1"
    },
    badge: "Custom Molded"
  },
  {
    id: "p11",
    title: "Amaron PRO Hi-Life Maintenance-Free Automotive Battery (DIN65 / 65Ah)",
    slug: "amaron-pro-hi-life-automotive-battery-din65",
    partNumber: "AMR-DIN65-PRO",
    brand: "Amaron Pro",
    category: "batteries",
    categoryLabel: "Automotive Batteries",
    price: 49500,
    originalPrice: 54e3,
    condition: "brand-new-oem",
    vehicleType: "Universal",
    compatibleVehicles: [
      {
        type: "Car",
        make: "BMW",
        model: "3 Series",
        yearRange: "2012-2022",
        chassisCodes: ["F30", "G20"]
      },
      {
        type: "Car",
        make: "Mercedes-Benz",
        model: "C-Class",
        yearRange: "2014-2022",
        chassisCodes: ["W205"]
      },
      {
        type: "SUV",
        make: "Hyundai",
        model: "Tucson / Santa Fe",
        yearRange: "2016-2023",
        chassisCodes: ["TL", "NX4"]
      }
    ],
    chassisCodes: ["F30", "G20", "W205", "TL", "NX4"],
    inStock: true,
    stockQuantity: 24,
    warranty: "3 Years Full Replacement Warranty with Amaron Hologram Card",
    rating: 4.9,
    reviewCount: 42,
    images: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600790142055-619df03207e6?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop&auto=format"
    ],
    description: "High heat-resistant SilvenX alloy technology patented by Amaron. Provides incredible cranking amps and vibration resistance in Sri Lanka\u2019s tropical climate.",
    specifications: {
      "Capacity": "65 Ah",
      "Cold Cranking Amps (CCA)": "600 CCA",
      "Technology": "Silver-Alloy Maintenance Free Lead Acid",
      "Terminal": "Standard DIN Terminal"
    },
    seller: {
      id: "d3",
      name: "Luxury Auto Gallery Concierge",
      verified: true,
      location: "Colombo 03",
      phone: "+94 11 456 7890",
      whatsapp: "+94 77 456 7890",
      rating: 4.9,
      storeId: "d3"
    },
    badge: "3-Year Warranty"
  },
  {
    id: "p12",
    title: "Michelin Primacy 4+ 215/55 R17 Premium Tyres (Set of 4)",
    slug: "michelin-primacy-4-plus-215-55-r17-set-of-4",
    partNumber: "MICH-2155517-P4P",
    brand: "Michelin",
    category: "tyres-wheels",
    categoryLabel: "Tyres & Wheels",
    price: 215e3,
    originalPrice: 236e3,
    condition: "brand-new-oem",
    vehicleType: "Universal",
    compatibleVehicles: [
      {
        type: "SUV",
        make: "Honda",
        model: "Vezel",
        yearRange: "2014-2024",
        chassisCodes: ["RU3", "RV5"]
      },
      {
        type: "Car",
        make: "Toyota",
        model: "Prius / Camry",
        yearRange: "2016-2024",
        chassisCodes: ["ZVW50", "AXVH70"]
      },
      {
        type: "SUV",
        make: "Nissan",
        model: "X-Trail",
        yearRange: "2015-2023",
        chassisCodes: ["T32"]
      }
    ],
    chassisCodes: ["RU3", "RV5", "ZVW50", "AXVH70", "T32"],
    inStock: true,
    stockQuantity: 16,
    warranty: "5 Years Manufacturer Warranty / 60,000 km Mileage Warranty",
    rating: 5,
    reviewCount: 38,
    images: [
      "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600790142055-619df03207e6?w=800&h=600&fit=crop&auto=format"
    ],
    description: "The gold standard for luxury touring comfort and wet road braking performance. EverGrip Technology ensures safety from the first kilometer to the legal tread wear limit.",
    specifications: {
      "Size": "215/55 R17 94W",
      "Speed Rating": "W (Up to 270 km/h)",
      "Wet Grip Grade": "Grade A (Shortest stopping distance)",
      "Manufacture Date": "Fresh 2024 Production DOT Batch"
    },
    seller: {
      id: "d2",
      name: "Millennium Motors Parts Outlet",
      verified: true,
      location: "Ja-Ela",
      phone: "+94 11 345 6789",
      whatsapp: "+94 77 345 6789",
      rating: 4.7,
      storeId: "d2"
    },
    badge: "Premium Comfort"
  }
];

const mockServices = [
  {
    id: "s1",
    name: "Flash Towing 24/7 Emergency Breakdown Assistance",
    slug: "flash-towing-247-colombo",
    type: "towing",
    typeLabel: "24/7 Emergency Towing",
    verified: true,
    rating: 4.9,
    reviewCount: 215,
    address: "88 Baseline Road, Colombo 09",
    city: "Colombo",
    district: "Colombo",
    province: "Western",
    phone: "+94 11 789 2424",
    emergencyPhone: "+94 77 999 2424",
    whatsapp: "+94 77 999 2424",
    openHours: "Open 24 Hours / 7 Days",
    is24x7: true,
    lat: 6.927,
    lng: 79.871,
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format"],
    specializations: ["Flatbed Towing", "Accident Recovery", "Wheel-Lift Towing", "Jump Start & Battery", "Lockout & Tyre Change"],
    servicesOffered: [
      { name: "Hydraulic Flatbed Towing (Zero-Damage)", priceEstimate: "Rs. 7,500 base + Rs. 350/km", duration: "Avg 20 mins arrival" },
      { name: "Rapid Battery Jump Start & Alternator Test", priceEstimate: "Rs. 3,500 flat", duration: "15 mins arrival" },
      { name: "Emergency On-Site Tyre Replacement / Inflation", priceEstimate: "Rs. 3,000 flat", duration: "20 mins arrival" },
      { name: "Highway / Expressway Breakdown Towing", priceEstimate: "Rs. 12,000 base + Rs. 400/km", duration: "Immediate dispatch" }
    ],
    description: "Western Province\u2019s fastest 24/7 roadside emergency response fleet with 18 modern hydraulic flatbeds and rapid motor response units. Zero-scratch tow guarantee for luxury cars, hybrids, and electric vehicles.",
    features: ["24/7 Live Hotline", "GPS Tracking of Tow Truck", "Expressway Authorized Permit", "Direct Insurance Billing (Ceylinco, SLIC, Allianz)"],
    towingDetails: {
      flatbed: true,
      wheelLift: true,
      heavyDuty: false,
      baseFare: 7500,
      perKmFare: 350,
      avgResponseMins: 20,
      expresswayPermit: true,
      hotline: "+94 77 999 2424",
      serviceAreas: ["Colombo 01-15", "Dehiwala-Mount Lavinia", "Sri Jayawardenepura Kotte", "Gampaha", "Southern Expressway Kadawatha to Dodangoda"]
    },
    badge: "Fastest ETA 20 Mins"
  },
  {
    id: "s2",
    name: "Expressway Highway Rescue 24/7",
    slug: "expressway-highway-rescue-247",
    type: "towing",
    typeLabel: "24/7 Highway Towing",
    verified: true,
    rating: 4.8,
    reviewCount: 148,
    address: "Kottawa Interchange, High Level Road, Kottawa",
    city: "Kottawa",
    district: "Colombo",
    province: "Western",
    phone: "+94 11 444 8899",
    emergencyPhone: "+94 71 888 2424",
    whatsapp: "+94 71 888 2424",
    openHours: "Open 24 Hours / 365 Days",
    is24x7: true,
    lat: 6.841,
    lng: 79.967,
    images: ["https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=500&fit=crop&auto=format"],
    specializations: ["Southern Expressway (E01)", "Central Expressway (E04)", "Katunayake Expressway (E03)", "Heavy Duty Towing"],
    servicesOffered: [
      { name: "Expressway Breakdown Flatbed Recovery", priceEstimate: "Rs. 9,500 base + Rs. 400/km", duration: "15-25 mins" },
      { name: "Emergency Fuel Delivery (5L Petrol/Diesel)", priceEstimate: "Rs. 4,500 + fuel cost", duration: "20 mins" },
      { name: "Heavy Duty SUV / 4WD Winching & Recovery", priceEstimate: "Rs. 15,000 base", duration: "30 mins" }
    ],
    description: "Dedicated expressway emergency assistance units stationed permanently at Kottawa, Kadawatha, Mirigama, and Dodangoda interchanges. Full clearance for highway police and RDA protocols.",
    features: ["Highway Police Approved", "Heavy Duty Winch Trucks", "24/7 Expressway Coverage", "Card & QR Payment"],
    towingDetails: {
      flatbed: true,
      wheelLift: true,
      heavyDuty: true,
      baseFare: 9500,
      perKmFare: 400,
      avgResponseMins: 18,
      expresswayPermit: true,
      hotline: "+94 71 888 2424",
      serviceAreas: ["E01 Southern Expressway", "E02 Outer Circular", "E03 Airport Expressway", "E04 Central Expressway"]
    },
    badge: "Expressway Approved"
  },
  {
    id: "s3",
    name: "Islandwide QuickRecovery Towing Service",
    slug: "islandwide-quickrecovery-towing",
    type: "towing",
    typeLabel: "24/7 Outstation Towing",
    verified: true,
    rating: 4.7,
    reviewCount: 96,
    address: "15 William Gopallawa Mawatha, Kandy",
    city: "Kandy",
    district: "Kandy",
    province: "Central",
    phone: "+94 81 222 9900",
    emergencyPhone: "+94 76 555 8899",
    whatsapp: "+94 76 555 8899",
    openHours: "Open 24 Hours",
    is24x7: true,
    lat: 7.285,
    lng: 80.628,
    images: ["https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800&h=500&fit=crop&auto=format"],
    specializations: ["Hill Country Recovery", "Inter-Province Long Distance Towing", "Accident Haulage"],
    servicesOffered: [
      { name: "Long-Distance Vehicle Transport (Inter-city)", priceEstimate: "Rs. 300/km fixed", duration: "Scheduled / Emergency" },
      { name: "Kandy / Nuwara Eliya Mountain Recovery", priceEstimate: "Rs. 12,500 base", duration: "25 mins" }
    ],
    description: "Central Province and islandwide long-distance transport specialists. Equipped for steep inclines, hairpins, and outstation breakdown recovery back to Colombo.",
    features: ["Outstation Fleet", "Full Transit Cargo Insurance", "Flatbed Trucks"],
    towingDetails: {
      flatbed: true,
      wheelLift: false,
      heavyDuty: true,
      baseFare: 8e3,
      perKmFare: 300,
      avgResponseMins: 25,
      expresswayPermit: true,
      hotline: "+94 76 555 8899",
      serviceAreas: ["Kandy", "Matale", "Kurunegala", "Nuwara Eliya", "Kegalle"]
    },
    badge: "Hill Country Specialist"
  },
  {
    id: "s4",
    name: "Hybrid Hub Sri Lanka (High Voltage Battery & Inverter Lab)",
    slug: "hybrid-hub-sri-lanka-colombo",
    type: "garage",
    typeLabel: "Specialized Hybrid/EV Workshop",
    verified: true,
    rating: 4.9,
    reviewCount: 312,
    address: "425 Nawala Road, Rajagiriya",
    city: "Rajagiriya",
    district: "Colombo",
    province: "Western",
    phone: "+94 11 288 7766",
    whatsapp: "+94 77 444 3322",
    openHours: "Mon - Sat: 8:00 AM - 6:00 PM",
    is24x7: false,
    lat: 6.898,
    lng: 79.897,
    images: ["https://images.unsplash.com/photo-1600790142055-619df03207e6?w=800&h=500&fit=crop&auto=format"],
    specializations: ["Hybrid Battery Rebuild & Balancing", "Inverter Diagnostics", "ABS Actuator Repair", "Toyota / Honda / Nissan Hybrid", "EV Diagnostics"],
    servicesOffered: [
      { name: "Comprehensive 40-Point Hybrid System & Battery Health Test", priceEstimate: "Rs. 4,500", duration: "45 mins" },
      { name: "Hybrid Battery Cell Rebalancing & Deep Conditioning", priceEstimate: "Rs. 35,000", duration: "1 day" },
      { name: "Inverter Coolant Flush & Pump Replacement", priceEstimate: "Rs. 12,000 + parts", duration: "2 hours" },
      { name: "ABS Brake Actuator Overhaul & Programming", priceEstimate: "Rs. 45,000", duration: "1 day" }
    ],
    description: "Sri Lanka\u2019s pioneer specialized hybrid center equipped with factory diagnostic tools (Toyota Techstream, Honda HDS). Certified by hybrid powertrain engineers with over 10,000 successful battery restorations.",
    features: ["Free Diagnostic Scan with Any Service", "Genuine Panasonic / OEM Cells Only", "6-Month to 2-Year Warranty on Repairs", "Air-Conditioned Customer Lounge with Wi-Fi"],
    badge: "Top Rated Hybrid Lab"
  },
  {
    id: "s5",
    name: "German Tech Masters (BMW, Mercedes-Benz, Audi Specialists)",
    slug: "german-tech-masters-colombo",
    type: "garage",
    typeLabel: "European Luxury Workshop",
    verified: true,
    rating: 4.8,
    reviewCount: 184,
    address: "312 High Level Road, Nugegoda",
    city: "Nugegoda",
    district: "Colombo",
    province: "Western",
    phone: "+94 11 555 4321",
    whatsapp: "+94 77 888 1212",
    openHours: "Mon - Sat: 8:30 AM - 6:30 PM",
    is24x7: false,
    lat: 6.872,
    lng: 79.895,
    images: ["https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=500&fit=crop&auto=format"],
    specializations: ["BMW M Series", "Mercedes-Benz AMG", "Audi S-Line", "ZF Transmission Overhaul", "Air Suspension Calibrations", "ECU Tuning"],
    servicesOffered: [
      { name: "Complete European Computer Diagnostics & Fault Coding", priceEstimate: "Rs. 6,500", duration: "1 hour" },
      { name: "ZF 8-Speed Automatic Transmission Service & Adaptation", priceEstimate: "Rs. 65,000 + fluid", duration: "4 hours" },
      { name: "Air Suspension Air Strut & Compressor Overhaul", priceEstimate: "Rs. 75,000+", duration: "1 day" }
    ],
    description: "Specialized facility exclusively dedicated to German vehicles. Equipped with original BMW ISTA+, Mercedes Xentry, and VAG-COM diagnostics. Certified master technicians with dealership background.",
    features: ["Original Factory Software", "OEM European Parts in Stock", "Warranty on All Mechanical Work"],
    badge: "German Auto Certified"
  },
  {
    id: "s6",
    name: "Colombo Auto Works & Engine Rebuild Lab",
    slug: "colombo-auto-works",
    type: "garage",
    typeLabel: "Complete Auto Repair Workshop",
    verified: true,
    rating: 4.7,
    reviewCount: 165,
    address: "74 Havelock Road, Colombo 05",
    city: "Colombo",
    district: "Colombo",
    province: "Western",
    phone: "+94 11 258 9012",
    whatsapp: "+94 77 333 4455",
    openHours: "Mon - Sat: 8:00 AM - 6:00 PM",
    is24x7: false,
    lat: 6.883,
    lng: 79.865,
    images: ["https://images.unsplash.com/photo-1600790142055-619df03207e6?w=800&h=500&fit=crop&auto=format"],
    specializations: ["Engine Overhaul", "Gearbox Repair", "Brake Lathe Disc Resurfacing", "AC & Climate Control", "Suspension Bushings"],
    servicesOffered: [
      { name: "Full Mechanical Inspection & Compression Test", priceEstimate: "Rs. 5,000", duration: "2 hours" },
      { name: "On-Car Brake Disc Rotor Skimming / Lathe", priceEstimate: "Rs. 4,500 per pair", duration: "1.5 hours" },
      { name: "Complete Automotive AC Gas Evacuation & Leak Test", priceEstimate: "Rs. 8,500", duration: "2 hours" }
    ],
    description: "Trusted multi-brand automotive repair facility with over 25 years of family engineering legacy in Colombo. Hydraulic lifts, disc skimming, cylinder head resurfacing, and complete mechanical overhauls.",
    features: ["In-house Machine Shop", "All Vehicle Brands", "Detailed Video Progress Updates on WhatsApp"],
    badge: "25 Years Experience"
  },
  {
    id: "s7",
    name: "Laugfs Car Care Super Service Station",
    slug: "laugfs-car-care-super-center-havelock",
    type: "service-station",
    typeLabel: "Service Station & Lube Bay",
    verified: true,
    rating: 4.8,
    reviewCount: 290,
    address: "180 Havelock Road, Colombo 05",
    city: "Colombo",
    district: "Colombo",
    province: "Western",
    phone: "+94 11 441 5566",
    whatsapp: "+94 77 666 7788",
    openHours: "Mon - Sun: 7:00 AM - 8:00 PM",
    is24x7: false,
    lat: 6.879,
    lng: 79.868,
    images: ["https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&h=500&fit=crop&auto=format"],
    specializations: ["Express Lube Maintenance", "Under-Chassis Wash & Rust Treatment", "Touchless Automatic Wash", "Engine Bay Detailing"],
    servicesOffered: [
      { name: "Express Full Periodic Lube Service (Labor + 25-point check)", priceEstimate: "Rs. 4,500 + oil/filter", duration: "45 mins" },
      { name: "Underbody Wash, Degreasing & Anti-Rust Graphite Spray", priceEstimate: "Rs. 5,500", duration: "1 hour" },
      { name: "Deluxe Body Wash, Vacuum & Interior Dashboard Conditioning", priceEstimate: "Rs. 3,500", duration: "40 mins" }
    ],
    description: "State-of-the-art service station equipped with automated underbody spray bays, quick lube pits, and premium motor oils (Mobil 1, Castrol, Valvoline). Quick turnaround with comfortable air-conditioned waiting caf\xE9.",
    features: ["Coffee Lounge & Free High-Speed Wi-Fi", "Express 45-Min Lube Service", "Genuine Oil Guarantee"],
    badge: "Express Service Bay"
  },
  {
    id: "s8",
    name: "Auto Miraj Grand Express & Ceramic Detailing Center",
    slug: "auto-miraj-grand-express-rajagiriya",
    type: "service-station",
    typeLabel: "Service Station & Detailing Studio",
    verified: true,
    rating: 4.9,
    reviewCount: 420,
    address: "55 Kotte Road, Rajagiriya",
    city: "Rajagiriya",
    district: "Colombo",
    province: "Western",
    phone: "+94 11 777 2200",
    whatsapp: "+94 77 222 1100",
    openHours: "Mon - Sun: 7:30 AM - 7:30 PM",
    is24x7: false,
    lat: 6.902,
    lng: 79.892,
    images: ["https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=500&fit=crop&auto=format"],
    specializations: ["9H Ceramic Coating", "Interior Steam Sterilization", "Cut & Polish", "Windshield Water Repellent", "Leather Rejuvenation"],
    servicesOffered: [
      { name: "3-Stage Paint Correction & High-Gloss Machine Polish", priceEstimate: "Rs. 18,500", duration: "1 day" },
      { name: "Permanent 9H Nano Ceramic Coating (3-Year Warranty)", priceEstimate: "Rs. 65,000", duration: "2 days" },
      { name: "Deep Interior Steam Clean, Carpet Extraction & AC Odor Neutralizer", priceEstimate: "Rs. 14,000", duration: "5 hours" }
    ],
    description: "Sri Lanka\u2019s leading auto care and detailing chain. Dust-free temperature controlled ceramic coating booth, computerized paint thickness meters, and certified Rupes detailing master technicians.",
    features: ["Dust-Free Detailing Studio", "3-Year Warranty Card on Coatings", "Card / Koko 3-Month Installments"],
    badge: "9H Ceramic Certified"
  }
];

const _dqKO90 = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_LPYa6_ = () => Promise.resolve().then(function () { return _slug__get$1; });
const _lazy_QfeXB6 = () => Promise.resolve().then(function () { return index_get$b; });
const _lazy_RervSR = () => Promise.resolve().then(function () { return _id__get$3; });
const _lazy_ZYzd5T = () => Promise.resolve().then(function () { return index_get$9; });
const _lazy_Gc0o5O = () => Promise.resolve().then(function () { return index_get$7; });
const _lazy_j37wng = () => Promise.resolve().then(function () { return _id__get$1; });
const _lazy_yfthFw = () => Promise.resolve().then(function () { return index_get$5; });
const _lazy_vaMH1U = () => Promise.resolve().then(function () { return index_get$3; });
const _lazy_m0VsoR = () => Promise.resolve().then(function () { return index_get$1; });
const _lazy_4V0bbX = () => Promise.resolve().then(function () { return renderer; });

const handlers = [
  { route: '', handler: _rXqLSG, lazy: false, middleware: true, method: undefined },
  { route: '/api/cars/:slug', handler: _lazy_LPYa6_, lazy: true, middleware: false, method: "get" },
  { route: '/api/cars', handler: _lazy_QfeXB6, lazy: true, middleware: false, method: "get" },
  { route: '/api/dealers/:id', handler: _lazy_RervSR, lazy: true, middleware: false, method: "get" },
  { route: '/api/dealers', handler: _lazy_ZYzd5T, lazy: true, middleware: false, method: "get" },
  { route: '/api/news', handler: _lazy_Gc0o5O, lazy: true, middleware: false, method: "get" },
  { route: '/api/parts/:id', handler: _lazy_j37wng, lazy: true, middleware: false, method: "get" },
  { route: '/api/parts', handler: _lazy_yfthFw, lazy: true, middleware: false, method: "get" },
  { route: '/api/reviews', handler: _lazy_vaMH1U, lazy: true, middleware: false, method: "get" },
  { route: '/api/services', handler: _lazy_m0VsoR, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_4V0bbX, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: handler$1, lazy: false, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _dqKO90, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_4V0bbX, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto.webcrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = {
	"appName": "Nuxt",
	"version": "",
	"status": 500,
	"statusText": "Server error",
	"description": "This page is temporarily unavailable."
};
const template$1 = (messages) => {
	messages = {
		..._messages,
		...messages
	};
	return "<!DOCTYPE html><html lang=\"en\"><head><title>" + escapeHtml(messages.status) + " - " + escapeHtml(messages.statusText) + " | " + escapeHtml(messages.appName) + "</title><meta charset=\"utf-8\"><meta content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0\" name=\"viewport\"><style>.spotlight{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:\"\"}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.-bottom-1\\/2{bottom:-50%}.left-0{left:0}.right-0{right:0}.grid{display:grid}.mb-16{margin-bottom:4rem}.mb-8{margin-bottom:2rem}.h-1\\/2{height:50%}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-8{padding-left:2rem;padding-right:2rem}.text-center{text-align:center}.text-8xl{font-size:6rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:px-0{padding-left:0;padding-right:0}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}}</style><script>!function(){const e=document.createElement(\"link\").relList;if(!(e&&e.supports&&e.supports(\"modulepreload\"))){for(const e of document.querySelectorAll('link[rel=\"modulepreload\"]'))r(e);new MutationObserver(e=>{for(const o of e)if(\"childList\"===o.type)for(const e of o.addedNodes)\"LINK\"===e.tagName&&\"modulepreload\"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),\"use-credentials\"===e.crossOrigin?r.credentials=\"include\":\"anonymous\"===e.crossOrigin?r.credentials=\"omit\":r.credentials=\"same-origin\",r}(e);fetch(e.href,r)}}();<\/script></head><body class=\"antialiased bg-white dark:bg-black dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-black\"><div class=\"-bottom-1/2 fixed h-1/2 left-0 right-0 spotlight\"></div><div class=\"max-w-520px text-center\"><h1 class=\"font-medium mb-8 sm:text-10xl text-8xl\">" + escapeHtml(messages.status) + "</h1><p class=\"font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl\">" + escapeHtml(messages.description) + "</p></div></body></html>";
};

const error500 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template$1
}, Symbol.toStringTag, { value: 'Module' }));

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles
}, Symbol.toStringTag, { value: 'Module' }));

const _slug__get = defineEventHandler((event) => {
  const slug = getRouterParam(event, "slug");
  const car = mockCars.find((c) => c.slug === slug);
  if (!car) {
    throw createError({ statusCode: 404, message: "Car not found" });
  }
  const carWithImages = {
    ...car,
    images: [
      car.images[0],
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=450&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&h=450&fit=crop&auto=format"
    ]
  };
  return carWithImages;
});

const _slug__get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _slug__get
}, Symbol.toStringTag, { value: 'Module' }));

const index_get$a = defineEventHandler((event) => {
  const query = getQuery$1(event);
  let filtered = [...mockCars];
  if (query.condition && query.condition !== "all") {
    filtered = filtered.filter((c) => c.condition === query.condition);
  }
  if (query.make) {
    filtered = filtered.filter((c) => c.make.toLowerCase() === String(query.make).toLowerCase());
  }
  if (query.bodyType) {
    const types = Array.isArray(query.bodyType) ? query.bodyType : [query.bodyType];
    filtered = filtered.filter((c) => types.includes(c.bodyType));
  }
  if (query.fuelType) {
    const types = Array.isArray(query.fuelType) ? query.fuelType : [query.fuelType];
    filtered = filtered.filter((c) => types.includes(c.fuelType));
  }
  if (query.priceMin) filtered = filtered.filter((c) => c.price >= Number(query.priceMin));
  if (query.priceMax) filtered = filtered.filter((c) => c.price <= Number(query.priceMax));
  if (query.dealerId) {
    filtered = filtered.filter((c) => c.dealerId === String(query.dealerId));
  }
  if (query.featured === "true") {
    filtered = filtered.filter((c) => c.featured);
  }
  if (query.q) {
    const q = String(query.q).toLowerCase();
    filtered = filtered.filter(
      (c) => c.make.toLowerCase().includes(q) || c.model.toLowerCase().includes(q) || c.title.toLowerCase().includes(q)
    );
  }
  const sortBy = query.sortBy;
  if (sortBy === "price_asc") filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === "price_desc") filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === "newest") filtered.sort((a, b) => new Date(b.posted).getTime() - new Date(a.posted).getTime());
  else if (sortBy === "mileage") filtered.sort((a, b) => a.mileage - b.mileage);
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 12;
  const total = filtered.length;
  const totalPages = Math.ceil(total / limit);
  const start = (page - 1) * limit;
  const cars = filtered.slice(start, start + limit);
  return { cars, total, page, totalPages };
});

const index_get$b = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_get$a
}, Symbol.toStringTag, { value: 'Module' }));

const _id__get$2 = defineEventHandler((event) => {
  const { id } = event.context.params || {};
  const dealer = mockDealers.find((d) => d.id === id);
  if (!dealer) {
    setResponseStatus(event, 404);
    return { error: "Dealer not found" };
  }
  const dealerCars = mockCars.filter((c) => c.dealerId === id);
  return {
    dealer: {
      ...dealer,
      listingCount: dealerCars.length > 0 ? dealerCars.length : dealer.listingCount
    },
    cars: dealerCars
  };
});

const _id__get$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _id__get$2
}, Symbol.toStringTag, { value: 'Module' }));

const index_get$8 = defineEventHandler((event) => {
  const query = getQuery$1(event);
  let filtered = [...mockDealers];
  if (query.province) {
    filtered = filtered.filter((d) => d.province.toLowerCase() === String(query.province).toLowerCase());
  }
  if (query.specialization) {
    filtered = filtered.filter(
      (d) => d.specialization.some((s) => s.toLowerCase().includes(String(query.specialization).toLowerCase()))
    );
  }
  return { dealers: filtered, total: filtered.length };
});

const index_get$9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_get$8
}, Symbol.toStringTag, { value: 'Module' }));

const mockArticles = [
  {
    id: "n1",
    slug: "ev-charging-stations-sri-lanka-2025",
    title: "Sri Lanka's EV Charging Network to Expand by 300% in 2025",
    excerpt: "The government and private sector announce a major investment to install 500 new EV charging stations across all provinces.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=450&fit=crop&auto=format",
    category: "ev",
    author: "Dilini Perera",
    published: "2024-12-20T09:00:00Z",
    readTime: 5,
    tags: ["EV", "Infrastructure", "Green Transport"],
    featured: true
  },
  {
    id: "n2",
    slug: "toyota-aqua-2024-price-drop",
    title: "Toyota Aqua 2024: Price Drop Makes It Sri Lanka's Best Value Hybrid",
    excerpt: "New import regulations and currency stabilization have led to a significant price reduction in the 2024 Toyota Aqua hybrid.",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=450&fit=crop&auto=format",
    category: "news",
    author: "Kasun Rathnayake",
    published: "2024-12-18T10:00:00Z",
    readTime: 4,
    tags: ["Toyota", "Hybrid", "Price"],
    featured: false
  },
  {
    id: "n3",
    slug: "best-cars-under-5m-lkr-2024",
    title: "Best Cars Under Rs. 5 Million in Sri Lanka \u2014 2024 Edition",
    excerpt: "Our experts test and rank the top 10 cars available under Rs. 5 million in Sri Lanka this year.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=450&fit=crop&auto=format",
    category: "guide",
    author: "Ruwan Fernando",
    published: "2024-12-15T08:00:00Z",
    readTime: 8,
    tags: ["Buying Guide", "Budget Cars"],
    featured: true
  },
  {
    id: "n4",
    slug: "honda-vezel-vs-nissan-x-trail-2024",
    title: "Honda Vezel vs Nissan X-Trail: Which Hybrid SUV Wins in 2024?",
    excerpt: "We pit Sri Lanka's two most popular hybrid SUVs against each other in a comprehensive comparison test.",
    image: "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800&h=450&fit=crop&auto=format",
    category: "review",
    author: "Dilini Perera",
    published: "2024-12-10T09:00:00Z",
    readTime: 10,
    tags: ["Honda", "Nissan", "Hybrid SUV", "Comparison"],
    featured: false
  },
  {
    id: "n5",
    slug: "import-duty-changes-2025",
    title: "New Vehicle Import Duty Changes: What It Means for Car Buyers",
    excerpt: "The 2025 budget introduces revised import duties on electric and hybrid vehicles. Here's what you need to know.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=450&fit=crop&auto=format",
    category: "news",
    author: "Kasun Rathnayake",
    published: "2024-12-05T11:00:00Z",
    readTime: 6,
    tags: ["Import Duty", "Policy", "EV Incentives"],
    featured: false
  },
  {
    id: "n6",
    slug: "suv-buying-guide-sri-lanka",
    title: "The Complete SUV Buying Guide for Sri Lanka 2024",
    excerpt: "Everything you need to know about buying an SUV in Sri Lanka \u2014 from fuel efficiency to ground clearance on local roads.",
    image: "https://images.unsplash.com/photo-1583267746897-2cf415887172?w=800&h=450&fit=crop&auto=format",
    category: "guide",
    author: "Ruwan Fernando",
    published: "2024-11-28T08:00:00Z",
    readTime: 12,
    tags: ["SUV", "Buying Guide"],
    featured: false
  }
];
const index_get$6 = defineEventHandler((event) => {
  const query = getQuery$1(event);
  let filtered = [...mockArticles];
  if (query.category) {
    filtered = filtered.filter((a) => a.category === query.category);
  }
  if (query.featured === "true") {
    filtered = filtered.filter((a) => a.featured);
  }
  const limit = Number(query.limit) || 10;
  return { articles: filtered.slice(0, limit), total: filtered.length };
});

const index_get$7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_get$6
}, Symbol.toStringTag, { value: 'Module' }));

const _id__get = defineEventHandler((event) => {
  const { id } = event.context.params || {};
  const part = mockParts.find((p) => p.id === id || p.slug === id);
  if (!part) {
    setResponseStatus(event, 404);
    return { error: "Automobile product not found" };
  }
  return { part };
});

const _id__get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _id__get
}, Symbol.toStringTag, { value: 'Module' }));

const index_get$4 = defineEventHandler((event) => {
  const query = getQuery$1(event);
  let filtered = [...mockParts];
  if (query.vehicleType && query.vehicleType !== "all") {
    const vType = String(query.vehicleType).toLowerCase();
    filtered = filtered.filter(
      (p) => p.vehicleType.toLowerCase() === vType || p.vehicleType.toLowerCase() === "universal" || p.compatibleVehicles.some((cv) => cv.type.toLowerCase() === vType || cv.type.toLowerCase() === "universal")
    );
  }
  if (query.make) {
    const makeQuery = String(query.make).toLowerCase();
    filtered = filtered.filter(
      (p) => p.vehicleType.toLowerCase() === "universal" || p.compatibleVehicles.some((cv) => cv.make.toLowerCase().includes(makeQuery) || cv.make.toLowerCase() === "all makes")
    );
  }
  if (query.model) {
    const modelQuery = String(query.model).toLowerCase();
    filtered = filtered.filter(
      (p) => p.vehicleType.toLowerCase() === "universal" || p.compatibleVehicles.some((cv) => cv.model.toLowerCase().includes(modelQuery) || cv.model.toLowerCase().includes("universal"))
    );
  }
  if (query.chassis) {
    const chassisQuery = String(query.chassis).trim().toUpperCase();
    filtered = filtered.filter(
      (p) => p.chassisCodes.includes("ALL") || p.chassisCodes.some((c) => c.toUpperCase().includes(chassisQuery) || chassisQuery.includes(c.toUpperCase()))
    );
  }
  if (query.category && query.category !== "all") {
    filtered = filtered.filter((p) => p.category === query.category);
  }
  if (query.condition && query.condition !== "all") {
    filtered = filtered.filter((p) => p.condition === query.condition);
  }
  if (query.brand) {
    const brandQuery = String(query.brand).toLowerCase();
    filtered = filtered.filter((p) => p.brand.toLowerCase().includes(brandQuery));
  }
  if (query.priceMin) filtered = filtered.filter((p) => p.price >= Number(query.priceMin));
  if (query.priceMax) filtered = filtered.filter((p) => p.price <= Number(query.priceMax));
  if (query.q) {
    const q = String(query.q).toLowerCase();
    filtered = filtered.filter(
      (p) => p.title.toLowerCase().includes(q) || p.partNumber.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.oemNumber && p.oemNumber.toLowerCase().includes(q) || p.chassisCodes.some((c) => c.toLowerCase().includes(q))
    );
  }
  const sortBy = query.sortBy;
  if (sortBy === "price_asc") filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === "price_desc") filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);
  const total = filtered.length;
  return { parts: filtered, total };
});

const index_get$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_get$4
}, Symbol.toStringTag, { value: 'Module' }));

const mockReviews = [
  {
    id: "r1",
    slug: "toyota-prius-2022-review",
    carMake: "Toyota",
    carModel: "Prius",
    carYear: 2022,
    carImage: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=450&fit=crop&auto=format",
    expertName: "Kasun Rathnayake",
    expertPhoto: "",
    expertTitle: "Senior Automotive Editor",
    overallScore: 88,
    ratings: { performance: 80, comfort: 90, safety: 95, fuelEconomy: 96, value: 85, reliability: 92 },
    pros: ["Outstanding fuel economy", "Smooth hybrid drivetrain", "Spacious interior", "Excellent safety ratings"],
    cons: ["Firm ride over rough roads", "Polarizing exterior design", "No physical volume knob"],
    summary: "The 2022 Prius continues to set the benchmark for fuel efficiency in its segment. A practical, eco-friendly choice for Sri Lankan commuters.",
    published: "2024-11-10T09:00:00Z",
    readTime: 8
  },
  {
    id: "r2",
    slug: "honda-vezel-2023-review",
    carMake: "Honda",
    carModel: "Vezel",
    carYear: 2023,
    carImage: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=450&fit=crop&auto=format",
    expertName: "Dilini Perera",
    expertPhoto: "",
    expertTitle: "Road Test Editor",
    overallScore: 91,
    ratings: { performance: 88, comfort: 92, safety: 95, fuelEconomy: 90, value: 88, reliability: 94 },
    pros: ["Powerful e:HEV system", "Premium interior quality", "Excellent safety tech", "Efficient fuel use"],
    cons: ["Premium price tag", "Limited cargo space in Z variant", "Touch screen can be laggy"],
    summary: "The 2023 Vezel raises the bar for compact SUVs in Sri Lanka. Honda's e:HEV hybrid system delivers a winning combination of performance and efficiency.",
    published: "2024-12-01T09:00:00Z",
    readTime: 10
  },
  {
    id: "r3",
    slug: "kia-ev6-2023-review",
    carMake: "Kia",
    carModel: "EV6",
    carYear: 2023,
    carImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=450&fit=crop&auto=format",
    expertName: "Ruwan Fernando",
    expertPhoto: "",
    expertTitle: "EV Specialist",
    overallScore: 95,
    ratings: { performance: 97, comfort: 93, safety: 96, fuelEconomy: 100, value: 87, reliability: 90 },
    pros: ["Blistering performance", "800V ultra-fast charging", "Best-in-class range (515km)", "Stunning design"],
    cons: ["High price tag", "Limited charging infrastructure in Sri Lanka", "Firm suspension"],
    summary: "The Kia EV6 is a game-changer for Sri Lanka's EV market. Despite infrastructure challenges, it offers the most compelling electric experience available.",
    published: "2024-12-15T09:00:00Z",
    readTime: 12
  },
  {
    id: "r4",
    slug: "bmw-3-series-2021-review",
    carMake: "BMW",
    carModel: "3 Series",
    carYear: 2021,
    carImage: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=450&fit=crop&auto=format",
    expertName: "Kasun Rathnayake",
    expertPhoto: "",
    expertTitle: "Senior Automotive Editor",
    overallScore: 90,
    ratings: { performance: 93, comfort: 88, safety: 92, fuelEconomy: 75, value: 82, reliability: 88 },
    pros: ["Thrilling driving dynamics", "Premium interior", "Powerful engine lineup", "Advanced technology"],
    cons: ["High running costs in Sri Lanka", "Expensive spare parts", "Firm ride"],
    summary: "The BMW 3 Series remains the driver's benchmark in its class. If you can handle the running costs, it offers an unmatched driving experience.",
    published: "2024-10-20T09:00:00Z",
    readTime: 9
  }
];
const index_get$2 = defineEventHandler((event) => {
  const query = getQuery$1(event);
  let filtered = [...mockReviews];
  const limit = Number(query.limit) || 10;
  return { reviews: filtered.slice(0, limit), total: filtered.length };
});

const index_get$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_get$2
}, Symbol.toStringTag, { value: 'Module' }));

const index_get = defineEventHandler((event) => {
  const query = getQuery$1(event);
  let filtered = [...mockServices];
  if (query.type && query.type !== "all") {
    filtered = filtered.filter((s) => s.type === query.type);
  }
  if (query.is24x7 === "true") {
    filtered = filtered.filter((s) => s.is24x7);
  }
  if (query.district) {
    const distQuery = String(query.district).toLowerCase();
    filtered = filtered.filter((s) => s.district.toLowerCase() === distQuery);
  }
  if (query.specialty) {
    const specQuery = String(query.specialty).toLowerCase();
    filtered = filtered.filter(
      (s) => s.specializations.some((sp) => sp.toLowerCase().includes(specQuery))
    );
  }
  if (query.q) {
    const q = String(query.q).toLowerCase();
    filtered = filtered.filter(
      (s) => s.name.toLowerCase().includes(q) || s.city.toLowerCase().includes(q) || s.district.toLowerCase().includes(q) || s.specializations.some((sp) => sp.toLowerCase().includes(q)) || s.servicesOffered.some((so) => so.name.toLowerCase().includes(q))
    );
  }
  return { services: filtered, total: filtered.length };
});

const index_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_get
}, Symbol.toStringTag, { value: 'Module' }));

function renderPayloadResponse(ssrContext) {
	return {
		body: encodeForwardSlashes(stringify(splitPayload(ssrContext).payload, ssrContext["~payloadReducers"])) ,
		statusCode: getResponseStatus(ssrContext.event),
		statusMessage: getResponseStatusText(ssrContext.event),
		headers: {
			"content-type": "application/json;charset=utf-8" ,
			"x-powered-by": "Nuxt"
		}
	};
}
function renderPayloadJsonScript(opts) {
	const contents = opts.data ? encodeForwardSlashes(stringify(opts.data, opts.ssrContext["~payloadReducers"])) : "";
	const payload = {
		"type": "application/json",
		"innerHTML": contents,
		"data-nuxt-data": appId,
		"data-ssr": !(opts.ssrContext.noSSR)
	};
	{
		payload.id = "__NUXT_DATA__";
	}
	if (opts.src) {
		payload["data-src"] = opts.src;
	}
	const config = uneval(opts.ssrContext.config);
	return [payload, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}` }];
}
/**
* Encode forward slashes as unicode escape sequences to prevent
* Google from treating them as internal links and trying to crawl them.
* @see https://github.com/nuxt/nuxt/issues/24175
*/
function encodeForwardSlashes(str) {
	return str.replaceAll("/", "\\u002F");
}
function splitPayload(ssrContext) {
	const { data, prerenderedAt, ...initial } = ssrContext.payload;
	return {
		initial: {
			...initial,
			prerenderedAt
		},
		payload: {
			data,
			prerenderedAt
		}
	};
}

const renderSSRHeadOptions = {"omitLineBreaks":false};

// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__buildAssetsURL = buildAssetsURL;
// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const PAYLOAD_FILENAME = "_payload.json" ;
const handler = defineRenderHandler(async (event) => {
	const nitroApp = useNitroApp();
	// Whether we're rendering an error page
	const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
	if (ssrError && !("__unenv__" in event.node.req)) {
		throw createError({
			status: 404,
			statusText: "Page Not Found: /__nuxt_error",
			message: "Page Not Found: /__nuxt_error"
		});
	}
	// Initialize ssr context
	const ssrContext = createSSRContext(event);
	// needed for hash hydration plugin to work
	const headEntryOptions = { mode: "server" };
	ssrContext.head.push(appHead, headEntryOptions);
	if (ssrError) {
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		const status = ssrError.status || ssrError.statusCode;
		if (status) {
			// eslint-disable-next-line @typescript-eslint/no-deprecated
			ssrError.status = ssrError.statusCode = Number.parseInt(status);
		}
		setSSRError(ssrContext, ssrError);
	}
	// Get route options (for `ssr: false`, `isr`, `cache` and `noScripts`)
	const routeOptions = getRouteRules(event);
	// Whether we are prerendering route or using ISR/SWR caching
	const _PAYLOAD_EXTRACTION = !ssrContext.noSSR && (NUXT_RUNTIME_PAYLOAD_EXTRACTION);
	const isRenderingPayload = (_PAYLOAD_EXTRACTION || routeOptions.prerender) && PAYLOAD_URL_RE.test(ssrContext.url);
	if (isRenderingPayload) {
		const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
		ssrContext.url = url;
		event._path = event.node.req.url = url;
	}
	if (routeOptions.ssr === false) {
		ssrContext.noSSR = true;
	}
	const payloadURL = _PAYLOAD_EXTRACTION ? joinURL(ssrContext.runtimeConfig.app.cdnURL || ssrContext.runtimeConfig.app.baseURL, ssrContext.url.replace(/\?.*$/, ""), PAYLOAD_FILENAME) + "?" + ssrContext.runtimeConfig.app.buildId : undefined;
	// Render app
	const renderer = await getRenderer(ssrContext);
	const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
		// We use error to bypass full render if we have an early response we can make
		// TODO: remove _renderResponse in nuxt v5
		if ((ssrContext["~renderResponse"] || ssrContext._renderResponse) && error.message === "skipping render") {
			return {};
		}
		// Use explicitly thrown error in preference to subsequent rendering errors
		const _err = !ssrError && ssrContext.payload?.error || error;
		await ssrContext.nuxt?.hooks.callHook("app:error", _err);
		throw _err;
	});
	// Render inline styles
	// TODO: remove _renderResponse in nuxt v5
	const inlinedStyles = [];
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult: _rendered
	});
	if (ssrContext["~renderResponse"] || ssrContext._renderResponse) {
		// TODO: remove _renderResponse in nuxt v5
		return ssrContext["~renderResponse"] || ssrContext._renderResponse;
	}
	// Handle errors
	if (ssrContext.payload?.error && !ssrError) {
		throw ssrContext.payload.error;
	}
	// Directly render payload routes
	if (isRenderingPayload) {
		const response = renderPayloadResponse(ssrContext);
		return response;
	}
	const NO_SCRIPTS = routeOptions.noScripts;
	// Setup head
	const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
	// 1. Preload payloads and app manifest
	if (_PAYLOAD_EXTRACTION && !NO_SCRIPTS) {
		ssrContext.head.push({ link: [{
			rel: "preload",
			as: "fetch",
			crossorigin: "anonymous",
			href: payloadURL
		} ] }, headEntryOptions);
	}
	if (ssrContext["~preloadManifest"] && !NO_SCRIPTS) {
		ssrContext.head.push({ link: [{
			rel: "preload",
			as: "fetch",
			fetchpriority: "low",
			crossorigin: "anonymous",
			href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`)
		}] }, {
			...headEntryOptions,
			tagPriority: "low"
		});
	}
	// 2. Styles
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	const link = [];
	for (const resource of Object.values(styles)) {
		// Do not add links to resources that are inlined (vite v5+)
		if ("inline" in getQuery(resource.file)) {
			continue;
		}
		// Add CSS links in <head> for CSS files
		// - in production
		// - in dev mode when not rendering an island
		link.push({
			rel: "stylesheet",
			href: renderer.rendererContext.buildAssetsURL(resource.file),
			crossorigin: ""
		});
	}
	if (link.length) {
		ssrContext.head.push({ link }, headEntryOptions);
	}
	if (!NO_SCRIPTS) {
		// 4. Resource Hints
		// Remove lazy hydrated modules from ssrContext.modules so they don't get preloaded
		// (CSS links are already added above, this only affects JS preloads)
		if (ssrContext["~lazyHydratedModules"]) {
			for (const id of ssrContext["~lazyHydratedModules"]) {
				ssrContext.modules?.delete(id);
			}
		}
		// TODO: add priorities based on Capo
		ssrContext.head.push({ link: getPreloadLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		ssrContext.head.push({ link: getPrefetchLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		// 5. Payloads
		ssrContext.head.push({ script: _PAYLOAD_EXTRACTION ? renderPayloadJsonScript({
			ssrContext,
			data: splitPayload(ssrContext).initial,
			src: payloadURL
		})  : renderPayloadJsonScript({
			ssrContext,
			data: ssrContext.payload
		})  }, {
			...headEntryOptions,
			tagPosition: "bodyClose",
			tagPriority: "high"
		});
	}
	// 6. Scripts
	if (!routeOptions.noScripts) {
		const tagPosition = "head";
		ssrContext.head.push({ script: Object.values(scripts).map((resource) => ({
			type: resource.module ? "module" : null,
			src: renderer.rendererContext.buildAssetsURL(resource.file),
			defer: resource.module ? null : true,
			tagPosition,
			crossorigin: ""
		})) }, headEntryOptions);
	}
	const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
	// Create render context
	const htmlContext = {
		htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
		head: normalizeChunks([headTags]),
		bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
		bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
		body: [replaceIslandTeleports(ssrContext, _rendered.html) , APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG],
		bodyAppend: [bodyTags]
	};
	// Allow hooking into the rendered result
	await nitroApp.hooks.callHook("render:html", htmlContext, { event });
	// Construct HTML response
	return {
		body: renderHTMLDocument(htmlContext),
		statusCode: getResponseStatus(event),
		statusMessage: getResponseStatusText(event),
		headers: {
			"content-type": "text/html;charset=utf-8",
			"x-powered-by": "Nuxt"
		}
	};
});
function normalizeChunks(chunks) {
	const result = [];
	for (const _chunk of chunks) {
		const chunk = _chunk?.trim();
		if (chunk) {
			result.push(chunk);
		}
	}
	return result;
}
function joinTags(tags) {
	return tags.join("");
}
function joinAttrs(chunks) {
	if (chunks.length === 0) {
		return "";
	}
	return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
	return "<!DOCTYPE html>" + `<html${joinAttrs(html.htmlAttrs)}>` + `<head>${joinTags(html.head)}</head>` + `<body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>` + "</html>";
}

const renderer = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handler
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map
