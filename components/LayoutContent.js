import React from 'react';
import PropTypes from 'prop-types';
import { LayoutSizes, MarginPaddingSize } from '../vars.js';

/**
 * This is a top-level wrapper layout block
 */
const LayoutContent = ({ children }) => (
  <main className="LayoutContent">
    {children}
    <style jsx>{`
      .LayoutContent {
        margin: auto;
        max-width: ${LayoutSizes[1]};
        
        > :global(*) {
          min-height: ${MarginPaddingSize[2]};
        }
      }  
    `}</style>
  </main>
)

LayoutContent.propTypes = {
  /**
   * Content layout block
   */
  children: PropTypes.string.isRequired
}

LayoutContent.defaultProps = {}

export default LayoutContent
