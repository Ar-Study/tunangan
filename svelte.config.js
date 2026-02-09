import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: '404.html', // Penting untuk SPA di GitHub Pages
			precompress: false,
			strict: true
		}),
		paths: {
			// Ganti 'nama-repo' dengan nama repository GitHub kamu
			base: process.env.NODE_ENV === 'production' ? '/tunangan' : '',
		}
	}
};

export default config;