import React from 'react';
import PropTypes from 'prop-types';
import { LayoutSizes, MarginPaddingSize } from '../vars.js';

const CTAGrid = ({ children }) => (
  <div className="CTAGrid">
    {children}
    <style jsx>{`
      .CTAGrid {
        margin: auto;
        display: flex;
        justify-content: space-between;
        width: 100%;
        min-height: 200px;
        
        > :global(*) {
          border: 1px solid #eee;
          min-height: ${MarginPaddingSize[2]};
          border-right: none;
        }

        > :global(*:last-child) {
          border-right: 1px solid #eee;
        }

      }
    `}</style>
  </div>
)

CTAGrid.propTypes = {
  /**
   * CTAGrid block
   */
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
}

CTAGrid.defaultProps = {}

export default CTAGrid
