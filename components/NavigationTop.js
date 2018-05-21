import React from 'react';
import PropTypes from 'prop-types';
import LayoutWrapper from './LayoutWrapper';
import GlobalTypography from './GlobalTypography';
import Logo from './Logo';
import GlobalReset from './GlobalReset';

import { LayoutSizes, MarginPaddingSize, Colors } from '../vars.js';

/**
 * This is a top-level wrapper layout block
 */
const NavigationTop = ({ children }) => (
  <React.Fragment>
    <GlobalReset />
    <GlobalTypography />
    <header className="NavigationTop">
      <LayoutWrapper>
        <nav>
          <div className="nav-left">
            <Logo type="row" />
          </div>
          <div className="nav-right">
            <ul className="nav-items">
              { children }
            </ul>
          </div>
        </nav>
      </LayoutWrapper>
      <style jsx>{`
        .NavigationTop {
          display: flex;
          height: 100px;
          border-bottom: 1px solid ${Colors.colorPrimaryGallery};

          nav {
            display: flex;
            justify-content: space-between;
          }
        
          .nav-right {
            text-align: right;
          }

          .nav-items {
            display: flex;

            > :global(*) { 
              padding: 0 ${MarginPaddingSize[4]};

              &:last-child {
                padding-right: 0;
              }
            }
          }
        }
      `}</style>
    </header>
  </React.Fragment>
)

NavigationTop.propTypes = {
  /**
   * Nav Elements
   */
  children: PropTypes.string.isRequired,
}

NavigationTop.defaultProps = {}

export default NavigationTop
