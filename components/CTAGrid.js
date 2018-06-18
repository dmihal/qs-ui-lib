import React from 'react';
import PropTypes from 'prop-types';
import { LayoutSizes, MarginPaddingSize } from '../vars.js';

const CTAGrid = ({ children, columns }) => (
  <div className="CTAGrid">
    {children}
    <style jsx>{`
      .CTAGrid {
        margin: auto;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 200px;
        
        > :global(*) {
          border: 1px solid #eee;
          min-height: ${MarginPaddingSize[2]};
        }

        > :global(*:first-child) {
          border-left: none;
        }
        > :global(*:last-child) {
          border-right: none;
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
  ]).isRequired,
  /**
   * Columns total
   */
  columns: PropTypes.oneOf([1, 2, 4]),
}

CTAGrid.defaultProps = {
  columns: 1
}

export default CTAGrid
