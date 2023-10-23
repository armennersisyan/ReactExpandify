import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/components/'],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve('src', 'components/index.ts'),
      name: 'reactExpandify',
      formats: ['es', 'umd'],
      fileName: (format) => `react-expandify.${format}.js`,
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
});
