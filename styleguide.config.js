const globalTypeBase = require('./globals-for-styleguidist-render/type-base-css2json.json');

module.exports = {
	title: 'Style Guide',
	components: 'components/**/*.js',
	theme: {
		maxWidth: '1600px'
	},
	styles: {
    StyleGuide: globalTypeBase
  }
};
