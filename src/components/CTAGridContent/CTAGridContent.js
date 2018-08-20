import React from 'react';
import PropTypes from 'prop-types';
import LinkText from '../LinkText'
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
          padding: ${MarginPaddingSize[2]} 0;

          > :global(h2) {
            text-align: ${ align === 'left' ? "left" : "center" };
            margin-bottom: ${MarginPaddingSize[5]};
            color: ${Colors.Royal};
            font-weight: ${Typography.typePrimaryWeight.normal};
          }
          
          > :global(p) {
            text-align: ${ align === 'left' ? "left" : "center" };
            margin-bottom: ${MarginPaddingSize[5]};
          }

          > :global(a) {
            text-decoration: none;
          }
        }
      }
    `}</style>
  </div>
)

CTAGridContent.propTypes = {}

CTAGridContent.defaultProps = {}

export default CTAGridContent