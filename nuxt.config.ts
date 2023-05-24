import { defineNuxtConfig } from '@nuxt/bridge';
import { connectToDatabase } from './mongodb.config';

export default defineNuxtConfig({
  css: [
    '@/assets/css/global.css',
  ],
  serverMiddleware: [
    { path: '/api', handler: '~/api/index.ts' },
  ],
  hooks: {
    listen(server, { host, port }) {
      // MongoDB connection code here
      connectToDatabase()
    },
  },
});