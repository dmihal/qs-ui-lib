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
      }
    `}</style>
    <style jsx>{`
      .Button {        
        /* DEFAULT - Type Overides*/

        /* TODO - CONVERT TO WRAPPING CHECKING */

        /* OLD_NOTE: - We have to write the CSS this way 
        * ( css property -> specific case) 
        * due to depth of interpolation limitations inside string templates
        * for styled-jsx-plugin-postcss -> post-css-nested
        * ... yea I know. But do it once and you will thank ourself later.
        */

        background: ${ 
          type === 'primary'
            ? Colors.colorPrimaryRoyal
            : type === 'warning'
              ? Colors.colorPrimaryCinnabar
              : type === 'disabled'
                ? Colors.colorPrimaryGallery
                : Colors.colorWhite
        };



        border-color: ${ 
          type === 'primary'
            ? Colors.colorPrimaryRoyal
            : type === 'warning'
              ? Colors.colorPrimaryCinnabar
              : Colors.colorPrimaryGallery
        };

        color: ${ 
          type === 'primary'
            ? Colors.colorWhite
            : type === 'warning'
              ? Colors.colorWhite
              : type === 'disabled'
                ? Colors.colorPrimarySlate
                : Colors.colorPrimaryRoyal
        };

        min-width: ${
          type === 'left' || type === 'right'
            ? '0px'
            : 'auto'
        };

        width: ${
          type === 'left' || type === 'right'
            ? MarginPaddingSize[3]
            : 'auto'
        };

        height: ${
          type === 'left' || type === 'right'
            ? MarginPaddingSize[3]
            : 'auto'
        };

        /* DEFAULT - Size Overides */
        font-size: ${ 
          size === 'small'
            ? Typography.fontSize[4]
            : Typography.fontSize[3]
        };

        padding: ${ 
          size === 'small'
            ? '2px calc(' + MarginPaddingSize[3] + '/ 4 )'
            : '6px calc(' + MarginPaddingSize[3] + '/ 2 )'
        };

        /* HOVER - Type Overides*/
        &:hover {
          background: ${ 
            type === 'primary'
              ? Colors.colorPrimaryPoloBlue
              : type === 'warning'
                ? Colors.colorPrimaryCinnabar
                : type === 'disabled'
                  ? Colors.colorPrimaryGallery
                  : Colors.colorWhite
          };

          border-color: ${ 
            type === 'primary'
              ? Colors.colorPrimaryPoloBlue
              : type === 'warning'
                ? Colors.colorPrimaryCinnabar
                : Colors.colorPrimaryGallery
          };

          color: ${ 
            type === 'primary'
              ? Colors.colorWhite
              : type === 'warning'
                ? Colors.colorWhite
                : type === 'disabled'
                  ? Colors.colorPrimarySlate
                  : Colors.colorPrimaryPoloBlue
          };
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
