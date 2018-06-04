import React from 'react';
import PropTypes from 'prop-types';
import LinkText from './LinkText'
import { LayoutSizes, MarginPaddingSize, Colors, Typography } from '../vars.mjs';

const CalloutCard = ({ img, title, linkText, link }) => (
  <div className="CalloutCard">
    <img src={img} alt="call out card"/>
    <h2>{title}</h2>
    <div className="callout-bottom">
      <LinkText arrow>{linkText}</LinkText>
    </div>
    <style jsx>{`
      .CalloutCard {
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-width: 150px;
        max-width: 300px;
        width: 100%;
        height: 100%;
        text-align: center;
        border: 1px solid #eee;
        padding: ${MarginPaddingSize[4]} 0 0 0;
        border-radius: 2px;
        box-shadow: 0 1px 3px 0 rgba(63, 63, 68, 0.15);

        .callout-bottom {
          background: ${Colors.Gallery};
          padding: calc(${MarginPaddingSize[5]});
          text-align: center;
          width: 100%;
        }

        h2 {
          font-size: ${Typography.fontSize[1]};
          margin-bottom: ${MarginPaddingSize[4]};
          color: ${Colors.Royal};
        }
        img {
          border-radius: 50%;
          width: 70px;
          height: 70px;
          border: 1px solid #eee;
          margin-bottom: ${MarginPaddingSize[5]};
        }

      }
    `}</style>
  </div>
)

CalloutCard.propTypes = {}

CalloutCard.defaultProps = {}

export default CalloutCard
