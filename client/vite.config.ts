import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: [
          [
            '@emotion/babel-plugin',
            {
              autoLabel: 'dev-only',
              labelFormat: '[dirname]--[filename]--[local]___',
            },
          ],
        ],
      },
    }),
  ],
  resolve: {
    alias: [
      { find: '@api', replacement: '/src/api' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@components', replacement: '/src/components' },
      { find: '@context', replacement: '/src/context' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@', replacement: '/src' },
    ],
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.API_URL,
      },
    },
  },
});
