import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { Typography, Colors , MarginPaddingSize } from '../vars.js';

const LinkCTA = ({ children, label, onDark }) => (
  <div className="LinkCTA">
      <Button
        type="primary"
        size="small"
        styleOverrides={`
        border-radius: 2px;
        background-color: ${ !!onDark === true ? 'black' : '' };
        border-color: ${ !!onDark === true ? 'black' : '' };
        `}>
        {label}
      </Button>
    <div className="description-box">{children}</div>
    <style jsx>{`
      
      .LinkCTA {
        display: inline-block;
        height: 100%;
        background: ${ !!onDark === true ? '#1e2837' : Colors.Gallery};
        max-width: 400px;
        color: ${ !!onDark === true ? Colors.Malibu : Colors.Royal};
        font-size: ${Typography.fontSize[4]};
        cursor: pointer;
        border-radius: 2px;

        :global(*) {
          display: inline-block;
        }

        label {
          background: ${ onDark === true ? Colors.Black : Colors.Royal };
        }

        .description-box {
          padding: 0 ${MarginPaddingSize[5]};
          font-size: ${Typography.fontSize[4]};
          
          &::after {
            content: '';
            display: inline-block;
            width: calc(${MarginPaddingSize[5]}*2);
            height: ${MarginPaddingSize[5]};
            margin-left: ${MarginPaddingSize[5]};
            // background: url( ${ !!onDark ? require('../assets/icons/icon-double-arrow.svg' : ) } ) no-repeat;
            //background: url( ${ require('../assets/icons/icon-double-arrow-color-malibu.svg') } ) no-repeat;
            background-position-x: right;
          }
        }
        
        &:hover {
          .description-box {
            cursor: pointer;
          }
        }

        .arrow-right {
          display: inline-block;
          margin-right: 5px;
          width: 0px;
          height: 0px;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 5px solid ${Colors.Royal};
        }
      }
    `}</style>
  </div>
)

LinkCTA.propTypes = {
  /**
   * LinkCTA text
   */
  children: PropTypes.string,
  /**
   * LinkCTA arrow
   */
  label: PropTypes.string,
}

LinkCTA.defaultProps = {}

export default LinkCTA
