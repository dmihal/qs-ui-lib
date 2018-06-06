import React from 'react';
import PropTypes from 'prop-types';
// import GlobalResetBase from '../globals/reset-base.js';
// NOTE::::: Using Sanitize.css INSTEAD

/**
 * This is a global style baseline that is meant to be imported
 * at the top layer of your app
 */
const GlobalReset = () => (
  <style jsx global>{`
    ${ require('../node_modules/sanitize.css/sanitize.css') }
  `}</style>
)

GlobalReset.propTypes = {}
GlobalReset.defaultProps = {}

export default GlobalReset
