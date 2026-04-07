import type { NewsArticle } from '~/types'

const mockArticles: NewsArticle[] = [
  {
    id: 'n1', slug: 'ev-charging-stations-sri-lanka-2025', title: 'Sri Lanka\'s EV Charging Network to Expand by 300% in 2025',
    excerpt: 'The government and private sector announce a major investment to install 500 new EV charging stations across all provinces.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=450&fit=crop&auto=format',
    category: 'ev', author: 'Dilini Perera', published: '2024-12-20T09:00:00Z', readTime: 5,
    tags: ['EV', 'Infrastructure', 'Green Transport'],
    featured: true,
  },
  {
    id: 'n2', slug: 'toyota-aqua-2024-price-drop', title: 'Toyota Aqua 2024: Price Drop Makes It Sri Lanka\'s Best Value Hybrid',
    excerpt: 'New import regulations and currency stabilization have led to a significant price reduction in the 2024 Toyota Aqua hybrid.',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=450&fit=crop&auto=format',
    category: 'news', author: 'Kasun Rathnayake', published: '2024-12-18T10:00:00Z', readTime: 4,
    tags: ['Toyota', 'Hybrid', 'Price'],
    featured: false,
  },
  {
    id: 'n3', slug: 'best-cars-under-5m-lkr-2024', title: 'Best Cars Under Rs. 5 Million in Sri Lanka — 2024 Edition',
    excerpt: 'Our experts test and rank the top 10 cars available under Rs. 5 million in Sri Lanka this year.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=450&fit=crop&auto=format',
    category: 'guide', author: 'Ruwan Fernando', published: '2024-12-15T08:00:00Z', readTime: 8,
    tags: ['Buying Guide', 'Budget Cars'],
    featured: true,
  },
  {
    id: 'n4', slug: 'honda-vezel-vs-nissan-x-trail-2024', title: 'Honda Vezel vs Nissan X-Trail: Which Hybrid SUV Wins in 2024?',
    excerpt: 'We pit Sri Lanka\'s two most popular hybrid SUVs against each other in a comprehensive comparison test.',
    image: 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800&h=450&fit=crop&auto=format',
    category: 'review', author: 'Dilini Perera', published: '2024-12-10T09:00:00Z', readTime: 10,
    tags: ['Honda', 'Nissan', 'Hybrid SUV', 'Comparison'],
    featured: false,
  },
  {
    id: 'n5', slug: 'import-duty-changes-2025', title: 'New Vehicle Import Duty Changes: What It Means for Car Buyers',
    excerpt: 'The 2025 budget introduces revised import duties on electric and hybrid vehicles. Here\'s what you need to know.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=450&fit=crop&auto=format',
    category: 'news', author: 'Kasun Rathnayake', published: '2024-12-05T11:00:00Z', readTime: 6,
    tags: ['Import Duty', 'Policy', 'EV Incentives'],
    featured: false,
  },
  {
    id: 'n6', slug: 'suv-buying-guide-sri-lanka', title: 'The Complete SUV Buying Guide for Sri Lanka 2024',
    excerpt: 'Everything you need to know about buying an SUV in Sri Lanka — from fuel efficiency to ground clearance on local roads.',
    image: 'https://images.unsplash.com/photo-1583267746897-2cf415887172?w=800&h=450&fit=crop&auto=format',
    category: 'guide', author: 'Ruwan Fernando', published: '2024-11-28T08:00:00Z', readTime: 12,
    tags: ['SUV', 'Buying Guide'],
    featured: false,
  },
]

export default defineEventHandler((event) => {
  const query = getQuery(event)
  let filtered = [...mockArticles]

  if (query.category) {
    filtered = filtered.filter(a => a.category === query.category)
  }

  if (query.featured === 'true') {
    filtered = filtered.filter(a => a.featured)
  }

  const limit = Number(query.limit) || 10
  return { articles: filtered.slice(0, limit), total: filtered.length }
})
