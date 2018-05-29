import React from 'react';
import PropTypes from 'prop-types';
import GlobalTypeDefault from '../globals-for-styleguidist-render/type-base.mjs';

/**
 * This is a global style baseline that is meant to be imported
 * at the top layer of your app
 */
const GlobalTypography = () => (
  <style jsx global>
    { GlobalTypeDefault }
  </style>
)

GlobalTypography.propTypes = {}
GlobalTypography.defaultProps = {}

export default GlobalTypography
