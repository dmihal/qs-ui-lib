import React from 'react';
import PropTypes from 'prop-types';
import { LayoutSizes, MarginPaddingSize } from '../vars.js';

/**
 * This is a top-level wrapper layout block
 */
const LayoutWrapper = ({ children, documentationStylesOnly }) => (
  <div className="LayoutWrapper">
    {children}
    <style jsx>{`
      .LayoutWrapper {
        margin: auto;
        max-width: ${LayoutSizes[0]};
        padding: 0 ${MarginPaddingSize[2]};
        width: 100%;
      } 
      ${documentationStylesOnly}
    `}</style>
  </div>
)

LayoutWrapper.propTypes = {
  /**
   * Wrapper layout block
   */
  children: PropTypes.string.isRequired
}

LayoutWrapper.defaultProps = {}

export default LayoutWrapper
