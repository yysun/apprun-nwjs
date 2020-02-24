import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.tsx',
  output: {
    file: 'public/index.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    resolve(),
    typescript({ tsconfig: "src/tsconfig.json" }),
    terser({
      warnings: true, output: { comments: false }
    }),
    sourcemaps(),
  ]
};
