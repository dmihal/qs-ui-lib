import React from 'react';
import PropTypes from 'prop-types';
import { Typography as Type, Colors, MarginPaddingSize } from '../vars.js';

/**
 * This is a global style baseline that is meant to be imported
 * at the top layer of your app
 */
const GlobalReset = () => (
  <React.Fragment>
    <style jsx global>{`
      ${require('../node_modules/sanitize.css/sanitize.css')}
    `}</style>
    <style jsx global>{`
      
      * { box-sizing: border-box; }
      
      ul, li {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      html,body {
        height: 100%;
      }
      
      body,
      *[data-preview] > * > * > * {
        background: ${Colors.colorPrimaryAlabaster};
      }
      
    `}</style>
  </React.Fragment>
)

GlobalReset.propTypes = {}
GlobalReset.defaultProps = {}

export default GlobalReset
