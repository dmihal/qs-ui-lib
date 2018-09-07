import React from 'react';
import PropTypes from 'prop-types';
import { Colors, MarginPaddingSize } from '../vars.js';
import { Typography } from '../vars.js';

const quantstampLogo             = require('qs-ui-library-asset-inliner/inlined/logos/quantstamp-logo.svg.js');
const quantstampLogoDark         = require('qs-ui-library-asset-inliner/inlined/logos/quantstamp-logo-dark.svg.js');
const quantstampLogoVertical     = require('qs-ui-library-asset-inliner/inlined/logos/quantstamp-logo-vertical.svg.js');
const quantstampLogoVerticalDark = require('qs-ui-library-asset-inliner/inlined/logos/quantstamp-logo-vertical-dark.svg.js');
const quantstampLogoProduct      = require('qs-ui-library-asset-inliner/inlined/logos/quantstamp-logo-product.svg.js');
const quantstampLogoProductDark  = require('qs-ui-library-asset-inliner/inlined/logos/quantstamp-logo-product-dark.svg.js');

const Logo = ({ type, theme, productName, width, height }) => (
  <div className="Logo">
    {
      type === 'default'
        ? theme === 'onLight'
          ? <img src={quantstampLogo} alt="Quantstamp Logo" />
          : <img src={quantstampLogoDark} alt="Quantstamp Logo" />
        : null
    }
    { 
      type === 'vertical'
        ? theme === 'onLight'
          ? <img src={quantstampLogoVertical} alt="Quantstamp Logo" />
          : <img src={quantstampLogoVerticalDark} alt="Quantstamp Logo" />
        : null
    }
    { 
      type === 'product'
        ? theme === 'onLight'
          ?(<React.Fragment>
              <img src={quantstampLogoProduct} alt="Quantstamp Logo" />
              <span className="product-name">{productName}</span>
            </React.Fragment>
          )
          :(<React.Fragment>
              <img src={quantstampLogoProductDark} alt="Quantstamp Logo" />
              <span className="product-name">{productName}</span>
            </React.Fragment>
          )
        : null
    }
    <style jsx>{`
      .Logo {
        img, span {
          display: inline-block;
          vertical-align: bottom;
        }

        img {
          max-width: 100%;
          max-height: 100%;
          width: ${ width ? width : 'auto' };
          height: ${ height ? height : 'auto' };
        }

        .product-name {
          padding: 0;
          margin: 0;
          line-height: 1;
          font-size: ${Typography.fontSize[3]};
          top: -1px;
          position: relative;
          margin-left: calc(${MarginPaddingSize[0]} / 2);
          
          ${
            theme === 'onLight'
              ? `color: ${Colors.Royal};`
              : `color: ${Colors.colorWhite};`
          }
        }
      }
    `}</style>
  </div>
)

Logo.propTypes = {
  /**
   * Logo style
   */
  type: PropTypes.oneOf(['default', 'vertical', 'product']).isRequired,
  /**
   * Logo theme
   */
  theme: PropTypes.oneOf(['onLight', 'onDark']).isRequired,
  /**
   * Product name
   */
  productName: PropTypes.string,
  /**
   * Width
   */
  width: PropTypes.string,
  /**
   * Height
   */
  height: PropTypes.string
}

Logo.defaultProps = {
  type: 'default',
  theme: 'onLight',
}

export default Logo
