import React from 'react';
const gtwalsheim = require('../assets/fonts/gtwalsheim/stylesheet.css')
/**
 * This is a global style baseline that is meant to be imported
 * at the top layer of your app
 */
const GlobalFonts = () => (
  <style dangerouslySetInnerHTML={{ __html: gtwalsheim }}></style>
)

export default GlobalFonts
