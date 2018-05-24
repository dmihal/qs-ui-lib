module.exports = {
	title: 'Style Guide',
	components: 'components/**/*.js',
	theme: {
		maxWidth: '1600px'
	},
	styles: {
    StyleGuide: {
      '@global *': {
        boxSizing: 'border-box'
      }
    }
  }
};
