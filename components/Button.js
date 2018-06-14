import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Colors , MarginPaddingSize } from '../vars.js';

const Button = ({ children, type, size, disabled, bgColor, styleOverrides, onClick }) => (
  <button className="Button" disabled={disabled}  onClick={onClick}>
    { type === 'left' || 
      type === 'right'
        ? `➜` 
        : null
    }
    {children}
    <style jsx>{`
      .Button {
        /* DEFAULT - Unchanging Styles */
        cursor: pointer;
        text-align: center;
        border-width: 1px;
        border-style: solid;
        border-color: #c4cdd5;
        color: ${Colors.Royal};
        background-color: ${ bgColor || Colors.White };
        padding: 0 calc(${MarginPaddingSize[3]}/2);
        line-height: ${MarginPaddingSize[3]};
        font-size: ${Typography.fontSize[3]};
        max-height: ${MarginPaddingSize[3]};
        &:hover {
          color: ${Colors.PoloBlue};
        }
        &:focus{
          outline: none;
        }
      }
    `}</style>
    <style jsx>{`      
      .Button {        
        /* DEFAULT - Type Overides*/
        ${
          type === 'primary'
            ? (`
              background: ${Colors.Royal};
              border-color: ${Colors.Royal};
              color: ${Colors.White};
            `) : ''
        }
        ${
          type === 'warning'
            ? (`
              background: ${Colors.Cinnabar};
              border-color: ${Colors.Cinnabar};
              color: ${Colors.White};
              cursor: default;
            `) : ''
        }
        ${
          type === 'disabled'
            ? (`
              background: ${Colors.Gallery};
              border-color: #eee;
              color: ${Colors.Slate};
              cursor: not-allowed;
            `) : ''
        }
        ${
          type === 'left' || type === 'right'
            ? (`
              min-width: 0px;
              max-height: none;
              width: ${ size !== "small" ? size || MarginPaddingSize[3] : MarginPaddingSize[3] };
              height: ${ size !== "small" ? size || MarginPaddingSize[3] : MarginPaddingSize[3] };
              line-height: ${ size !== "small" ? size || MarginPaddingSize[3] : MarginPaddingSize[3] };
              padding: 0;
            `) : ''
        }
        ${
          type === 'left'
            ? (`transform:rotateY(180deg)`) : ''
        }
        
        /* DEFAULT - Size Overide */
        ${
          size === 'small'
            ? (`
              padding: 2px calc(${MarginPaddingSize[3]}/4);
              font-size: ${Typography.fontSize[4]};
              max-height: 22px;
              min-width: auto;
              line-height: 1;
            `) : ''
        }
        
        /* HOVER - Type Overides*/
        &:hover {
          ${
            type === 'primary'
              ? (`
                background: ${Colors.PoloBlue};
                border-color: ${Colors.PoloBlue};
                color: ${Colors.White};
              `) : ''
          }
          ${
            type === 'warning'
              ? (`
                background: ${Colors.Cinnabar};
                border-color: ${Colors.Cinnabar};
                color: ${Colors.White};
              `) : ''
          }
          ${
            type === 'disabled'
              ? (`
                background: ${Colors.Gallery};
                border-color: #eee;
                color: ${Colors.Slate};
                cursor: not-allowed;
              `) : ''
          }          
        }

        /* ACTIVE - Type Overides*/
        &:active {
          ${
            type === 'primary'
              ? (`
                background: ${Colors.ResolutionBlue};
                border-color: ${Colors.ResolutionBlue};
                color: ${Colors.White};
              `) : ''
          }
          ${
            type === 'warning'
              ? (`
                background: ${Colors.Cinnabar};
                border-color: ${Colors.Cinnabar};
                color: ${Colors.White};
              `) : ''
          }
          ${
            type === 'disabled'
              ? (`
                background: ${Colors.Gallery};
                border-color: #eee;
                color: ${Colors.Slate};
                cursor: not-allowed;
              `) : ''
          }          
        }
      }
    `}</style>
    <style jsx>{`
      ${styleOverrides}
    `}</style>
  </button>
)

Button.propTypes = {
  /**
   * Button style
   */
  type: PropTypes.oneOf(['default', 'primary', 'warning', 'disabled', 'left', 'right']),
  /**
   * Button style
   */
  children: PropTypes.string,
  /**
   * Button size
   */
  size: PropTypes.string,
  /**
   * Icon image
   */
  icon: PropTypes.string,
  /**
   * BGColor
   */
  bgColor: PropTypes.string
}

Button.defaultProps = {
  type: 'default'
}

export default Button
