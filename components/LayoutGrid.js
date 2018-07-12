import React from 'react';
import PropTypes from 'prop-types';
import { LayoutSizes, MarginPaddingSize } from '../vars.js';

/**
 * This is a column layout block
 */
const LayoutGrid = ({ children, offset }) => (
  <div className="LayoutGrid">
    {children}
    <style jsx>{`
      .LayoutGrid {
        margin: auto;
        max-width: ${LayoutSizes[2]};
        display: flex;
        justify-content: space-between;
        width: 100%;
        
        > :global(*) {
          ${
            children.length > 1
              ? 'width: calc( ('+LayoutSizes[2]+'/'+children.length+') - ('+MarginPaddingSize[3]+'/'+children.length+') );'
              : 'width: 100%;'
          }

          ${
            offset
              ? 
              offset === 'left'
                ? '&:first-child { width: ' + LayoutSizes[3] + '};'+
                  '&:nth-child(2) { width: ' + LayoutSizes[5] + '};'
                : offset === 'right'
                  ? '&:first-child { width: ' + LayoutSizes[5] + '};'+
                    '&:nth-child(2) { width: ' + LayoutSizes[3] + '};'
                  : ''
                : ''
          }
        }

        > :global(*:first-child) {
          ${ offset && children.length === 2
              ? offset === 'left' ? 'width: '+LayoutSizes[3]+';' : ''
              : ''
          }
          ${ offset && children.length === 2
            ? offset === 'right' ? 'width: '+LayoutSizes[5]+';' : ''
            : ''
          }
        }

        > :global(*:nth-child(2)) {
          ${ offset && children.length === 2
              ? offset === 'left' ? 'width: '+LayoutSizes[5]+';' : ''
              : ''
          }
          ${ offset && children.length === 2
            ? offset === 'right' ? 'width: '+LayoutSizes[3]+';' : ''
            : ''
          }
        }        
      }
    `}</style>
  </div>
)

LayoutGrid.propTypes = {
  /**
   * LayoutGrid block
   */
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  /**
   * Columns total
   */
  columns: PropTypes.oneOf([1, 2, 3, 4]),
  /**
   * LayoutGrid offset
   */
  offset: PropTypes.oneOf(['left', 'right'])
}

LayoutGrid.defaultProps = {
  columns: 1
}

export default LayoutGrid
