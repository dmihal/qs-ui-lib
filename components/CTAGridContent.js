import React from 'react';
import PropTypes from 'prop-types';
import LinkText from './LinkText'
import { LayoutSizes, MarginPaddingSize, Colors, Typography } from '../vars.mjs';

/**
 * This is a column layout block
 */
const CTAGridContent = ({ itemTitle, subtext, linkText, linkURL, align }) => (
  <div className="CTAGridContent">
    <h2>{itemTitle}</h2>
    <p>{subtext}</p>
    {
      linkText && linkURL 
        ? (<LinkText arrow>{linkText}</LinkText>) : null
    }
    <style jsx>{`
      .CTAGridContent {
        margin: auto;
        
        display: ${ align === 'left' ? "block" : "flex" };
        flex-direction: ${ align === 'left' ? "none" : "column" };
        justify-content: ${ align === 'left' ? "none" : "center" };
        align-items: ${ align === 'left' ? "none" : "center" };

        width: 100%;
        height: 100%;

        text-align: ${ align === 'left' ? "left" : "center" };

        h2 {
          font-size: ${Typography.fontSize[1]};
          margin-bottom: ${MarginPaddingSize[5]};
          color: ${Colors.Royal};
        }
        
        p {
          margin-bottom: ${MarginPaddingSize[5]};
        }
      }
    `}</style>
  </div>
)

CTAGridContent.propTypes = {}

CTAGridContent.defaultProps = {}

export default CTAGridContent
