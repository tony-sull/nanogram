const nesting = require('postcss-nesting')
const imports = require('postcss-import')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

module.exports = {
    plugins: [
      imports(),
      nesting(),
      autoprefixer,
      cssnano({
        preset: 'default',
      }),
    ],
  };