import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env variables
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // Only define the specific key we need. 
      // We rely on index.html polyfill for the global 'process' object.
      'process.env.API_KEY': JSON.stringify(env.API_KEY || ''),
    }
  };
});