const globalTypeBase = require('./globals-jss-compiled/type-base-css2json.json');

module.exports = {
	title: 'Style Guide',
	components: 'components/**/*.js',
	theme: {
		maxWidth: '1600px'
	},
	styles: {
    StyleGuide: globalTypeBase
	},
	template: {
		head: {
      links: [
				{
					rel: 'stylesheet',
					href: 'node_modules/sanitize.css/sanitize.css'
				},
				{
					rel: 'stylesheet',
					href: '/assets/fonts/gtwalsheim/stylesheet.css'
				}
			]
    }
  }
};
