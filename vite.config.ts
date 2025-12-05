import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Handle process.env.API_KEY safely for the browser
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      // Prevent crashes from libraries accessing process.env directly
      'process.env': {}
    }
  };
});