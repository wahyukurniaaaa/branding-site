import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import CV from '@cv';

export async function GET(context) {
    const posts = await getCollection('blog');
    return rss({
        title: `Blog - ${CV.basics.name}`,
        description: CV.basics.summary,
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            // Compute RSS link from post `slug`
            // This example assumes all posts are rendered as `/blog/[slug]` routes
            link: `/blog/${post.slug}/`,
        })),
    });
}
