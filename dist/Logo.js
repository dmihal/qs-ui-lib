'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _vars = require('../vars.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var quantstampLogo = require('qs-ui-library-asset-inliner/inlined/logos/quantstamp-logo.svg.js');
var quantstampLogoDark = require('qs-ui-library-asset-inliner/inlined/logos/quantstamp-logo-dark.svg.js');
var quantstampLogoVertical = require('qs-ui-library-asset-inliner/inlined/logos/quantstamp-logo-vertical.svg.js');
var quantstampLogoVerticalDark = require('qs-ui-library-asset-inliner/inlined/logos/quantstamp-logo-vertical-dark.svg.js');
var quantstampLogoProduct = require('qs-ui-library-asset-inliner/inlined/logos/quantstamp-logo-product.svg.js');
var quantstampLogoProductDark = require('qs-ui-library-asset-inliner/inlined/logos/quantstamp-logo-product-dark.svg.js');

var Logo = function Logo(_ref) {
  var type = _ref.type,
      theme = _ref.theme,
      productName = _ref.productName,
      width = _ref.width,
      height = _ref.height;
  return _react2.default.createElement(
    'div',
    {
      className: _style2.default.dynamic([['618839533', [width ? width : 'auto', height ? height : 'auto', _vars.Typography.fontSize[3], _vars.MarginPaddingSize[5], theme === 'onLight' ? 'color: ' + _vars.Colors.Royal + ';' : 'color: ' + _vars.Colors.colorWhite + ';']]]) + ' ' + 'Logo'
    },
    type === 'default' ? theme === 'onLight' ? _react2.default.createElement('img', { src: quantstampLogo, alt: 'Quantstamp Logo', className: _style2.default.dynamic([['618839533', [width ? width : 'auto', height ? height : 'auto', _vars.Typography.fontSize[3], _vars.MarginPaddingSize[5], theme === 'onLight' ? 'color: ' + _vars.Colors.Royal + ';' : 'color: ' + _vars.Colors.colorWhite + ';']]])
    }) : _react2.default.createElement('img', { src: quantstampLogoDark, alt: 'Quantstamp Logo', className: _style2.default.dynamic([['618839533', [width ? width : 'auto', height ? height : 'auto', _vars.Typography.fontSize[3], _vars.MarginPaddingSize[5], theme === 'onLight' ? 'color: ' + _vars.Colors.Royal + ';' : 'color: ' + _vars.Colors.colorWhite + ';']]])
    }) : null,
    type === 'vertical' ? theme === 'onLight' ? _react2.default.createElement('img', { src: quantstampLogoVertical, alt: 'Quantstamp Logo', className: _style2.default.dynamic([['618839533', [width ? width : 'auto', height ? height : 'auto', _vars.Typography.fontSize[3], _vars.MarginPaddingSize[5], theme === 'onLight' ? 'color: ' + _vars.Colors.Royal + ';' : 'color: ' + _vars.Colors.colorWhite + ';']]])
    }) : _react2.default.createElement('img', { src: quantstampLogoVerticalDark, alt: 'Quantstamp Logo', className: _style2.default.dynamic([['618839533', [width ? width : 'auto', height ? height : 'auto', _vars.Typography.fontSize[3], _vars.MarginPaddingSize[5], theme === 'onLight' ? 'color: ' + _vars.Colors.Royal + ';' : 'color: ' + _vars.Colors.colorWhite + ';']]])
    }) : null,
    type === 'product' ? theme === 'onLight' ? _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement('img', { src: quantstampLogoProduct, alt: 'Quantstamp Logo', className: _style2.default.dynamic([['618839533', [width ? width : 'auto', height ? height : 'auto', _vars.Typography.fontSize[3], _vars.MarginPaddingSize[5], theme === 'onLight' ? 'color: ' + _vars.Colors.Royal + ';' : 'color: ' + _vars.Colors.colorWhite + ';']]])
      }),
      _react2.default.createElement(
        'span',
        {
          className: _style2.default.dynamic([['618839533', [width ? width : 'auto', height ? height : 'auto', _vars.Typography.fontSize[3], _vars.MarginPaddingSize[5], theme === 'onLight' ? 'color: ' + _vars.Colors.Royal + ';' : 'color: ' + _vars.Colors.colorWhite + ';']]]) + ' ' + 'product-name'
        },
        productName
      )
    ) : _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement('img', { src: quantstampLogoProductDark, alt: 'Quantstamp Logo', className: _style2.default.dynamic([['618839533', [width ? width : 'auto', height ? height : 'auto', _vars.Typography.fontSize[3], _vars.MarginPaddingSize[5], theme === 'onLight' ? 'color: ' + _vars.Colors.Royal + ';' : 'color: ' + _vars.Colors.colorWhite + ';']]])
      }),
      _react2.default.createElement(
        'span',
        {
          className: _style2.default.dynamic([['618839533', [width ? width : 'auto', height ? height : 'auto', _vars.Typography.fontSize[3], _vars.MarginPaddingSize[5], theme === 'onLight' ? 'color: ' + _vars.Colors.Royal + ';' : 'color: ' + _vars.Colors.colorWhite + ';']]]) + ' ' + 'product-name'
        },
        productName
      )
    ) : null,
    _react2.default.createElement(_style2.default, {
      styleId: '618839533',
      css: '.Logo.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector,.Logo.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{display:inline-block;vertical-align:bottom;}.Logo.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{max-width:100%;max-height:100%;width:' + (width ? width : 'auto') + ';height:' + (height ? height : 'auto') + ';}.Logo.__jsx-style-dynamic-selector .product-name.__jsx-style-dynamic-selector{padding:0;margin:0;line-height:1;font-size:' + _vars.Typography.fontSize[3] + ';top:-1px;position:relative;margin-left:calc(' + _vars.MarginPaddingSize[5] + ' / 2);' + (theme === 'onLight' ? 'color: ' + _vars.Colors.Royal + ';' : 'color: ' + _vars.Colors.colorWhite + ';') + ';}',
      dynamic: [width ? width : 'auto', height ? height : 'auto', _vars.Typography.fontSize[3], _vars.MarginPaddingSize[5], theme === 'onLight' ? 'color: ' + _vars.Colors.Royal + ';' : 'color: ' + _vars.Colors.colorWhite + ';']
    })
  );
};

Logo.propTypes = {
  /**
   * Logo style
   */
  type: _propTypes2.default.oneOf(['default', 'vertical', 'product']).isRequired,
  /**
   * Logo theme
   */
  theme: _propTypes2.default.oneOf(['onLight', 'onDark']).isRequired,
  /**
   * Product name
   */
  productName: _propTypes2.default.string,
  /**
   * Width
   */
  width: _propTypes2.default.string,
  /**
   * Height
   */
  height: _propTypes2.default.string
};

Logo.defaultProps = {
  type: 'default',
  theme: 'onLight'
};

exports.default = Logo;