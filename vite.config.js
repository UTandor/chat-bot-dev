import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv'; // Import dotenv

dotenv.config(); // Load environment variables from .env

export default defineConfig({
  plugins: [react()],
});
