import typescript from '@rollup/plugin-typescript';
import preserveDirectives from 'rollup-plugin-preserve-directives';

/**
 * @type {import('rollup').RollupOptions}
 */
export default [
  {
    external: [/node_modules/],
    input: 'src/index.tsx',
    output: {
      dir: 'dist/cjs',
      entryFileNames: '[name].cjs',
      format: 'cjs',
      preserveModules: true,
      sourcemap: true,
    },
    plugins: [
      preserveDirectives(),
      typescript({
        outDir: 'dist/cjs',
        include: 'src/**/*.@(ts|tsx)',
      }),
    ],
    treeshake: true,
  },
  {
    external: [/node_modules/],
    input: 'src/index.tsx',
    output: {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
      sourcemap: true,
    },
    plugins: [
      preserveDirectives(),
      typescript({
        outDir: 'dist/esm',
        include: 'src/**/*.@(ts|tsx)',
      }),
    ],
    treeshake: true,
  },
];
