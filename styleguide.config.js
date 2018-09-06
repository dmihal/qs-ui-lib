const { createConfig, babel, postcss } = require('webpack-blocks')

module.exports = {
  title: 'Quantstamp Style Guide',
  components: 'src/components/**/[A-Z]*.js',
  theme: { 
    maxWidth: '1600px',
    fontSize: {
      base: 16,
      text: 16,
      small: 12,
      h1: 34,
      h2: 24,
      h3: 18,
      h4: 16,
      h5: 16,
      h6: 16,
    }
  },
  webpackConfig: createConfig([babel(), postcss()])
}
