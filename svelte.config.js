import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeMermaid from 'rehype-mermaid';

const rehypePlugins = [
	[rehypeMermaid, { strategy: 'pre-mermaid' }]
];

/** @type {import('mdsvex').MdsvexConfig} */
const mdsvexConfig = {
	extensions: ['.svx', '.md'],
	highlight: {
		highlighter: (code, lang) => {
			switch (lang) {
				case 'mermaid':
					return `{@html \`<pre class="mermaid">${code}</pre>\` }`
				default:
					{ const html = `<pre><code class="language-${lang}">${code}</code></pre>`
					return `{@html \`${html}\` }` }
			}
		}
	},
	rehypePlugins
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
	kit: {
		adapter: adapter(),
		alias: {
			'@/*': './path/to/lib/*'
		}
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
