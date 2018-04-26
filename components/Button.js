import React from 'react';
import PropTypes from 'prop-types';

/**
 * This is an simple button
 * It is a "stateless" component that has no methods.
 */
const Button = ({ children, color, size }) => (
  <button className="button modifier">
    {children}
    <style jsx>{`
      .button {
        padding: .5em 1.5em;
        color: ${color};
        background-color: #fff;
        border: 1px solid currentColor;
        border-radius: .3em;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        font-size: ${Button.sizes[size]};

        @media (width >= 320px) {
          /*background: blue;*/
        }	

        &.modifier {
          @media (width >= 320px) {
            /*width: 800px;*/
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
  children: PropTypes.string.isRequired,
  /**
   * Button color
   */
  color: PropTypes.string,
  /**
   * Button text size
   */
  size: PropTypes.oneOf(['small', 'normal', 'large'])
}

Button.defaultProps = {
  color: '#333',
  size: 'normal'
}

Button.sizes = {
  small: '10px',
  normal: '20px',
  large: '30px'
}

export default Button
