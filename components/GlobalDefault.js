import React from 'react';
import PropTypes from 'prop-types';
import GlobalDefaultBase from '../globals/default-base.mjs';


/**
 * This is a global style baseline that is meant to be imported
 * at the top layer of your app
 */
const GlobalDefault = () => (
  <style jsx global>{`
    ${ GlobalDefaultBase }
  `}</style>
)

GlobalDefault.propTypes = {}
GlobalDefault.defaultProps = {}

export default GlobalDefault
