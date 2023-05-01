import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({ plugins: [react(), svgr()], server: { host: '0.0.0.0' } });
};