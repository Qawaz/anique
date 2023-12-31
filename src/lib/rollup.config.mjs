import path from 'path';

import { fileURLToPath } from 'url';

import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import externals from 'rollup-plugin-node-externals';
import typescript from '@rollup/plugin-typescript';
import summary from 'rollup-plugin-summary';
import pkg from "./package.json" assert { type: "json" }
import terser from "@rollup/plugin-terser";

const input = 'src/index.ts';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  {
    input,
    output: [
      {
        format: 'cjs',
        dir: path.dirname(pkg.main),
        preserveModules: true,
        preserveModulesRoot: path.resolve(__dirname, 'src'),
        // entryFileNames: '[name][assetExtname].js',
        exports: 'named'
      },
      {
        format: 'esm',
        dir: path.dirname(pkg.module),
        preserveModules: true,
        preserveModulesRoot: path.resolve(__dirname, 'src'),
        // entryFileNames: '[name][assetExtname].js'
      }
    ],
    external: [
      /@babel\/runtime/,
      'react',
      /@emotion\/styled/,
      /@emotion\/react/
    ],
    plugins: [
      terser(),
      externals(),
      typescript(),
      nodeResolve({ extensions }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        extensions,
        envName: 'production',
        babelHelpers: 'runtime',
        plugins: ['@babel/plugin-transform-runtime']
      }),
      summary({ showMinifiedSize: true, showGzippedSize: true })
    ]
  }
];
