import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Colors , MarginPaddingSize } from '../vars.js';

const LinkText = ({ children, arrow, inverse, activeState }) => (
  <span className="LinkText">
    { arrow ? (<div className="arrow-right"></div>) : null }
    {children}
    <style jsx>{`
      
      .LinkText { 
        color: ${Colors.Royal};
        font-size: ${Typography.fontSize[4]};
        cursor: pointer;

        &:hover {
          text-decoration: underline;
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
  </span>
)

LinkText.propTypes = {
  /**
   * LinkText text
   */
  children: PropTypes.string,
  /**
   * LinkText arrow
   */
  arrow: PropTypes.bool,
  /**
   * LinkText inverse colors
   */
  inverse: PropTypes.bool,
  /**
   * LinkText activeState
   */
  activeState: PropTypes.bool
}

LinkText.defaultProps = {}

export default LinkText
