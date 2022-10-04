// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/app.js',
    format: 'cjs',
    name: 'demo',
  },
  plugins: [
    resolve(),
    copy({
      targets: [ { src: 'src/index.html', dest: 'dist/' }, { src: 'src/inject.template.js', dest: 'dist/' } ],
    }),
  ],
};
