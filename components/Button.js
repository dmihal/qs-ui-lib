import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Colors , MarginPaddingSize } from '../vars.js';

const Button = ({ text, type, size, icon, iconPosition, disabled }) => (
  <button className="Button" disabled={disabled}>
    {text}
    <style jsx>{`
      .Button {
        /* DEFAULT - Unchanging Styles */
        min-width: 120px;
        cursor: pointer;
        border-width: 1px;
        border--style: solid;
        color: ${Colors.colorPrimaryRoyal};
        background: ${Colors.colorWhite};
        border-color: ${Colors.colorPrimaryGallery};
        padding: 6px calc(${MarginPaddingSize[3]}/ 2 );
        font-size: ${Typography.fontSize[3]};
        &:hover {
          color: ${Colors.colorPrimaryPoloBlue};
        }
      }
    `}</style>
    <style jsx>{`
      .Button {        
        /* DEFAULT - Type Overides*/
        ${
          type === 'primary'
            ? (`
              background: ${Colors.colorPrimaryRoyal};
              border-color: ${Colors.colorPrimaryRoyal};
              color: ${Colors.colorWhite};
            `) : ''
        }
        ${
          type === 'warning'
            ? (`
              background: ${Colors.colorPrimaryCinnabar};
              border-color: ${Colors.colorPrimaryCinnabar};
              color: ${Colors.colorWhite};
              cursor: not-allowed;
            `) : ''
        }
        ${
          type === 'disabled'
            ? (`
              background: ${Colors.colorPrimaryGallery};
              border-color: #eee;
              color: ${Colors.colorPrimarySlate};
              cursor: not-allowed;
            `) : ''
        }
        ${
          type === 'left' || type === 'right'
            ? (`
              min-width: 0px;
              width: ${MarginPaddingSize[3]}
              height: ${MarginPaddingSize[3]};
            `) : ''
        }
        
        /* DEFAULT - Size Overide */
        ${
          type === 'small'
            ? (`
              font-size: ${fontSize[4]};
              padding: 2px calc(' + ${MarginPaddingSize[3]} + '/ 4 );
            `) : ''
        }
        
        /* HOVER - Type Overides*/
        &:hover {
          ${
            type === 'primary'
              ? (`
                background: ${Colors.colorPrimaryPoloBlue};
                border-color: ${Colors.colorPrimaryPoloBlue};
                color: ${Colors.colorWhite};
              `) : ''
          }
          ${
            type === 'warning'
              ? (`
                background: ${Colors.colorPrimaryCinnabar};
                border-color: ${Colors.colorPrimaryCinnabar};
                color: ${Colors.colorWhite};
              `) : ''
          }
          ${
            type === 'disabled'
              ? (`
                background: ${Colors.colorPrimaryGallery};
                border-color: #eee;
                color: ${Colors.colorPrimarySlate};
                cursor: not-allowed;
              `) : ''
          }          
        }

        &:active {
          ${
            type === 'primary'
              ? (`
                background: ${Colors.colorPrimaryResolutionBlue};
                border-color: ${Colors.colorPrimaryResolutionBlue};
                color: ${Colors.colorWhite};
              `) : ''
          }
          ${
            type === 'warning'
              ? (`
                background: ${Colors.colorPrimaryCinnabar};
                border-color: ${Colors.colorPrimaryCinnabar};
                color: ${Colors.colorWhite};
              `) : ''
          }
          ${
            type === 'disabled'
              ? (`
                background: ${Colors.colorPrimaryGallery};
                border-color: #eee;
                color: ${Colors.colorPrimarySlate};
                cursor: not-allowed;
              `) : ''
          }          
        }
      }
    `}</style>
  </button>
)

Button.propTypes = {
  /**
   * Button text
   */
  text: PropTypes.string.isRequired,
  /**
   * Button style
   */
  type: PropTypes.oneOf(['default', 'primary', 'warning', 'disabled', 'left', 'right']).isRequired,
  /**
   * Button size
   */
  size: PropTypes.string,
  /**
   * Icon image
   */
  icon: PropTypes.string,
  /**
   * Icon position
   */
  iconPosition: PropTypes.oneOf(['left', 'right']),
}

Button.defaultProps = {
  text: 'Button Text',
  type: 'default'
}

export default Button
