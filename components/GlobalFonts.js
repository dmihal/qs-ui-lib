import React from 'react';
import PropTypes from 'prop-types';
// import GlobalResetBase from '../globals/default-base.mjs';
// NOTE::::: Using Generated FontFace INSTEAD

/**
 * This is a global style baseline that is meant to be imported
 * at the top layer of your app
 */
const GlobalFonts = () => (
  <style jsx global>{`
    ${ require('../assets/fonts/gtwalsheim/stylesheet.css') }
  `}</style>
)

GlobalFonts.propTypes = {}
GlobalFonts.defaultProps = {}

export default GlobalFonts
