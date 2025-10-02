import { error } from '@sveltejs/kit';

export async function load() {
    try {
        const post = (await import('$lib/content/whitepaper.svx'));
        return {
            content: post.default,
            meta: post.metadata
        }
    } catch (e) {
        throw error(404, JSON.stringify(e));
    }
}