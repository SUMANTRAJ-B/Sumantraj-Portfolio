import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const resumeHeadersPlugin = () => ({
  name: 'resume-headers',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url && req.url.startsWith('/assets/resume.pdf')) {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline; filename="Sumantraj_B_Resume.pdf"');
      }
      next();
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url && req.url.startsWith('/assets/resume.pdf')) {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline; filename="Sumantraj_B_Resume.pdf"');
      }
      next();
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), resumeHeadersPlugin()],
  server: {
    port: 3000,
    open: false,
  },
});
