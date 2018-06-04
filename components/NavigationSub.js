import React from 'react';
import PropTypes from 'prop-types';
import LayoutGrid from './LayoutGrid';
import GlobalTypography from './GlobalTypography';
import Logo from './Logo';
import GlobalReset from './GlobalReset';

import { MarginPaddingSize, Colors } from '../vars.mjs';

const NavigationSub = ({ children }) => (
  <React.Fragment>
    <header className="NavigationSub">
      <LayoutGrid columns="1">
        <nav>
          <ul className="nav-items">
            { children }
          </ul>
        </nav>
      </LayoutGrid>
      <style jsx>{`
        .NavigationSub {
          display: flex;
          height: 50px;
          border-bottom: 1px solid #e4e4e4;
          background: ${Colors.Gallery};

          .nav-items {
            display: flex;
            justify-content: center;

            > :global(*) { 
              padding: 0 ${MarginPaddingSize[2]};
            }
          }
        }
      `}</style>
    </header>
  </React.Fragment>
)

NavigationSub.propTypes = {
  /**
   * Nav Elements
   */
  children: PropTypes.array.isRequired,
}

NavigationSub.defaultProps = {}

export default NavigationSub
