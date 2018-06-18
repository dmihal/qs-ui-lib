import React from 'react';
import PropTypes from 'prop-types';
import LayoutGrid from './LayoutGrid';
import GlobalTypography from './GlobalTypography';
import GlobalReset from './GlobalReset';
import Button from './Button';

import { LayoutSizes, MarginPaddingSize, Colors } from '../vars.js';

const Banner = ({ title, altStyle, secondayTitle, ctaBtnText, ctaBtnAction }) => (
  <React.Fragment>
    <div className="Banner">
      <LayoutGrid columns="1">
        <div className="banner-left">
          <h1>{title}</h1>
          { secondayTitle ? <h2>{secondayTitle}</h2> : null }
        </div>
        <div className="banner-right">
          { 
            ctaBtnText && ctaBtnAction 
              ? <Button onClick={ctaBtnAction}>{ctaBtnText}</Button> 
              : null 
          }
        </div>
      </LayoutGrid>
      <style jsx>{`
        .Banner {
          display: flex;
          flex-direction: vertical;
          align-items: center;
          height: 200px;
          padding: 0 ${MarginPaddingSize[2]};
          
          background-color: ${ altStyle ? 'none' : Colors.Mirage };
          background-image: ${ altStyle ? 'none' : 'url(/' + require('../assets/waves-bg.svg') + ')' };
          background-position: center;
          background-size: 100% auto;
          background-size: cover;
          background-repeat: no-repeat;

          h1,
          h2 { 
            margin: 0;
          }

          h1 {
            color: ${ altStyle ? Colors.Mirage : Colors.White };
          }
          h2 {
            color: ${ altStyle ? Colors.Slate : Colors.White };
          }

          .banner-right {
            text-align: right;
          }

          ${
            altStyle
              ? (`background-color: none; background-image: none;`)
              : null
          }
        }  
      `}</style>
    </div>
  </React.Fragment>
)

Banner.propTypes = {
  /**
   * Banner header text
   */
  title: PropTypes.string.isRequired,
  /**
   * Banner header text
   */
  altStyle: PropTypes.string,
  /**
   * Banner header text
   */
  secondayTitle: PropTypes.string,
  /**
   * Banner header text
   */
  ctaBtnText: PropTypes.string,
  /**
   * Banner header text
   */
  ctaBtnAction: PropTypes.func
}

Banner.defaultProps = {
  title: 'FILL IN PAGE BANNER TITLE'
}

export default Banner