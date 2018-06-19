import React from 'react';
import PropTypes from 'prop-types';
// import GlobalFontsBase from '../globals/fonts-base.js';
// NOTE::::: Using Generated FontFace INSTEAD


const fontFaceFile = require('../assets/fonts/gtwalsheim/stylesheet.css')

/**
 * This is a global style baseline that is meant to be imported
 * at the top layer of your app
 */
const GlobalFonts = () => (
  <style jsx global>{fontFaceFile}</style>
)

GlobalFonts.propTypes = {}
GlobalFonts.defaultProps = {}

export default GlobalFonts
