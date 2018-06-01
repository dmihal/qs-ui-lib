import React from 'react';
import PropTypes from 'prop-types';
import LayoutGrid from './LayoutGrid';
import GlobalTypography from './GlobalTypography';
import Logo from './Logo';
import GlobalReset from './GlobalReset';

import { MarginPaddingSize, Colors } from '../vars.mjs';


const SliderCard = ({ children, imgSrc, title, subText }) => (
  <figure className="SliderCard">
    <div className="SliderCard-header">
      <img src={imgSrc}/>
      <div className="SliderCard-header-text">
        <h3>{title}</h3>
        <h4>{subText}</h4>
      </div>
    </div>
    <div className="SliderCard-content">
      {children}
    </div>
    <style jsx>{`
      .SliderCard {
        width: 470px;
        height: 450px;
        padding: ${MarginPaddingSize[3]};
        background: ${Colors.White};
        box-shadow: 0 5px 20px 0 rgba(63, 63, 68, 0.1);
        border-radius: 2px;
        border-color: #c4cdd5;

        :global(p) {
          line-height: 1.56;
        }

        .SliderCard-header {
          display: flex;
          width: 100%;
          padding: 0 ${MarginPaddingSize[4]} ${MarginPaddingSize[4]} 0;
          
          img {
            display: block;
            margin-right: ${MarginPaddingSize[4]};
            max-width: 120px;
            height: 120px;
          }

          .SliderCard-header-text { 
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        
            h3 {
              margin-bottom: ${MarginPaddingSize[5]};
            }

            * {
              display: block;
             
              &:last-child {
                margin-bottom: 0;
                color: #708090;
              }
            }
          }
        }
        .SliderCard-header-content { 

        }
      }
    `}</style>
  </figure>
)

SliderCard.propTypes = {
  /**
   * Nav Elements
   */
  children: PropTypes.array.isRequired,
}

SliderCard.defaultProps = {}

export default SliderCard
