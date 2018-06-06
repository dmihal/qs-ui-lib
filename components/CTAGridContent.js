import React from 'react';
import PropTypes from 'prop-types';
import LinkText from './LinkText'
import { LayoutSizes, MarginPaddingSize, Colors, Typography } from '../vars.js';

const CTAGridContent = ({ children, align }) => (
  <div className="CTAGridContent">
    <div className="inner-wrap">
      {children}
    </div>
    <style jsx>{`
      .CTAGridContent {
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        .inner-wrap {
          text-align: ${ align === 'left' ? "left" : "center" };

          > :global(h2) {
            text-align: ${ align === 'left' ? "left" : "center" };
            font-size: ${Typography.fontSize[1]};
            margin-bottom: ${MarginPaddingSize[5]};
            color: ${Colors.Royal};
          }
          
          > :global(p) {
            text-align: ${ align === 'left' ? "left" : "center" };
            margin-bottom: ${MarginPaddingSize[5]};
          }
        }
      }
    `}</style>
  </div>
)

CTAGridContent.propTypes = {}

CTAGridContent.defaultProps = {}

export default CTAGridContent
