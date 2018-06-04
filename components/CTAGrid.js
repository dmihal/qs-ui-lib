import React from 'react';
import PropTypes from 'prop-types';
import { LayoutSizes, MarginPaddingSize } from '../vars.mjs';

const CTAGrid = ({ children, columns }) => (
  <div className="CTAGrid">
    {children}
    <style jsx>{`
      .CTAGrid {
        margin: auto;
        max-width: ${LayoutSizes[2]};
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 200px;
        
        > :global(*) {
          border: 1px solid #eee;
          min-height: ${MarginPaddingSize[2]};
          
          ${
            columns > 1
              ? 'width: calc( ('+LayoutSizes[2]+'/'+columns+') );'
              : 'width: 100%;'
          }
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
  children: PropTypes.array.isRequired,
  /**
   * Columns total
   */
  columns: PropTypes.oneOf([2, 4]),
}

CTAGrid.defaultProps = {
  columns: 1
}

export default CTAGrid
