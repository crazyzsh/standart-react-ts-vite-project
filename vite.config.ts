import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'), //与tsconfig.json中保持一致
		},
	},
	plugins: [
		react(),
		checker({
			typescript: true,
			eslint: {
				lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
			},
		}),
	],
	server: {
		open: true,
		port: 3000,
	},
});
