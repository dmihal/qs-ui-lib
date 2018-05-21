import React from 'react';
import PropTypes from 'prop-types';
import LayoutGrid from './LayoutGrid';
import GlobalTypography from './GlobalTypography';
import GlobalReset from './GlobalReset';

import { LayoutSizes, MarginPaddingSize, Colors } from '../vars.js';

/**
 * This is a top-level wrapper layout block
 */
const PageBanner = ({ title, altStyle, secondayTitle, ctaBtnText, ctaBtnAction }) => (
  <React.Fragment>
    <GlobalReset />
    <GlobalTypography />
    <div className="PageBanner">
      <LayoutGrid columns="1">
        <div className="banner-left">
          <h1>{title}</h1>
          { secondayTitle ? <h2>{secondayTitle}</h2> : null }
        </div>
        <div className="banner-right">
          { 
            ctaBtnText && ctaBtnAction 
              ? <button onClick={ctaBtnAction}>{ctaBtnText}</button> 
              : null 
          }
        </div>
      </LayoutGrid>
      <style jsx>{`
        .PageBanner {
          display: flex;
          flex-direction: vertical;
          align-items: center;
          height: 200px;
          padding: 0 ${MarginPaddingSize[2]};
          
          background-color: ${ altStyle ? 'none' : Colors.colorPrimaryMirage };
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
            color: ${ altStyle ? Colors.colorPrimaryMirage : Colors.colorWhite };
          }
          h2 {
            color: ${ altStyle ? Colors.colorPrimarySlate : Colors.colorWhite };
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

PageBanner.propTypes = {
  /**
   * PageBanner header text
   */
  title: PropTypes.string.isRequired,
  /**
   * PageBanner header text
   */
  altStyle: PropTypes.string,
  /**
   * PageBanner header text
   */
  secondayTitle: PropTypes.string,
  /**
   * PageBanner header text
   */
  ctaBtnText: PropTypes.string,
  /**
   * PageBanner header text
   */
  ctaBtnAction: PropTypes.func
}

PageBanner.defaultProps = {
  title: 'FILL IN PAGE BANNER TITLE'
}

export default PageBanner
