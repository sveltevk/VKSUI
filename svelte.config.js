import path from 'path';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

import a11yEmoji from '@fec/remark-a11y-emoji';
import slug from 'rehype-slug';
import github from 'remark-github';
import remarkExample from './remark-example.js';

import sveld from 'vite-plugin-sveld';

import { mdsvex } from 'mdsvex';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		mdsvex({
			extensions: ['.svx', '.md'],
			remarkPlugins: [remarkExample, github, a11yEmoji],
			rehypePlugins: [slug]
		}),
		preprocess()
	],

	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/VKSUI'
		},
		vite: {
			define: {
				__version__: JSON.stringify(process.env.npm_package_version)
			},
			optimizeDeps: {
				include: [
					'svg-baker-runtime/browser-sprite.js',
					'svg-baker-runtime/browser-symbol.js',
					'@fontsource/jetbrains-mono'
				]
			},
			plugins: [sveld()],
			resolve: {
				extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', 'svg'],
				alias: {
					$site: path.resolve('src/site'),
					'@sveltevk/vksui': path.resolve('src/lib')
				}
			}
		}
	}
};

export default config;
