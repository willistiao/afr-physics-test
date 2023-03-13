import { defineConfig } from 'vite'

export default defineConfig({
	root: './',
	base: '/afr-physics-test/',
	build: {
		outDir: './dist',
		emptyOutDir: true,
	},
	assetsInclude: ['/js/addDateTime.js'],
})
