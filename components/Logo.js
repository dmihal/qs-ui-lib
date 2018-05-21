import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Colors as ColorVars , MarginPaddingSize } from '../vars.js';

/**
 * This is the logo component - it takes different types
 */
const Logo = ({ type, inverted, product }) => (
  <div className="Logo">
    { 
      type === 'row'
        ? (<img src={require('../assets/logo-row.svg')} />) 
        :null
    }
    <style jsx>{`
      .Logo {}
    `}</style>
  </div>
)

Logo.propTypes = {
  /**
   * Horizontal logo style
   */
  type: PropTypes.string.isRequired,
  /**
   * Inverted Color Scheme
   */
  inverted: PropTypes.string,
  /**
   * Product 
   */
  product: PropTypes.bool,
}

Logo.defaultProps = {
  type: 'row'
}

export default Logo
