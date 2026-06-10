import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const trips = await getCollection('trips', ({ data }) => !data.draft);
  const sorted = trips.sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );

  return rss({
    title: 'Navio Road Trip Guides',
    description: 'Curated US road trip guides with optimized routes, stop suggestions, and one-tap navigation via Navio.',
    site: 'https://mynavio.com/blog',
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `https://mynavio.com/blog/${post.slug}`,
    })),
    customData: '<language>en-us</language>',
  });
}
