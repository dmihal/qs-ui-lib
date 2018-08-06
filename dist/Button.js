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

// TODO:
// ICONS Left & Right
// Buttons Tabs

var Button = function Button(_ref) {
  var children = _ref.children,
      type = _ref.type,
      size = _ref.size,
      disabled = _ref.disabled,
      bgColor = _ref.bgColor,
      styleOverrides = _ref.styleOverrides,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'button',
    { disabled: disabled, onClick: onClick, className: _style2.default.dynamic([['558464166', [_vars.Colors.Royal, bgColor || _vars.Colors.White, _vars.MarginPaddingSize[3], _vars.MarginPaddingSize[3], _vars.Typography.fontSize[3], _vars.MarginPaddingSize[3], _vars.Colors.PoloBlue]], ['1831688054', [type === 'primary' ? '\n              background: ' + _vars.Colors.Royal + ';\n              border-color: ' + _vars.Colors.Royal + ';\n              color: ' + _vars.Colors.White + ';\n            ' : '', type === 'warning' ? '\n              background: ' + _vars.Colors.Cinnabar + ';\n              border-color: ' + _vars.Colors.Cinnabar + ';\n              color: ' + _vars.Colors.White + ';\n              cursor: default;\n            ' : '', type === 'disabled' ? '\n              background: ' + _vars.Colors.Gallery + ';\n              border-color: #c4cdd5;\n              color: ' + _vars.Colors.Slate + ';\n              cursor: not-allowed;\n            ' : '', type === 'left' || type === 'right' ? '\n              min-width: 0px;\n              max-height: none;\n              width: ' + (size !== "small" ? size || _vars.MarginPaddingSize[3] : _vars.MarginPaddingSize[3]) + ';\n              height: ' + (size !== "small" ? size || _vars.MarginPaddingSize[3] : _vars.MarginPaddingSize[3]) + ';\n              line-height: ' + (size !== "small" ? size || _vars.MarginPaddingSize[3] : _vars.MarginPaddingSize[3]) + ';\n              padding: 0;\n              background: ' + ('url( ' + require('../assets/glyphs/glyph-carousel-arrow.svg') + ')') + '  no-repeat center center;\n            ' : '', type === 'left' ? 'transform:rotateY(180deg);' : '', size === 'small' ? '\n              padding: 2px calc(' + _vars.MarginPaddingSize[3] + '/4);\n              font-size: ' + _vars.Typography.fontSize[4] + ';\n              max-height: 22px;\n              min-width: auto;\n              line-height: 1;\n            ' : '', type === 'primary' ? '\n                background: #5068b2;\n                border-color: ' + _vars.Colors.PoloBlue + ';\n                color: ' + _vars.Colors.White + ';\n              ' : '', type === 'primary' && size === 'small' ? 'border-color: #5068b2;' : '', type === 'warning' ? '\n                background: ' + _vars.Colors.Cinnabar + ';\n                border-color: ' + _vars.Colors.Cinnabar + ';\n                color: ' + _vars.Colors.White + ';\n              ' : '', type === 'disabled' ? '\n                background: ' + _vars.Colors.Gallery + ';\n                border-color: #eee;\n                color: ' + _vars.Colors.Slate + ';\n                cursor: not-allowed;\n              ' : '', _vars.Colors.ResolutionBlue, type === 'primary' ? '\n                background: ' + _vars.Colors.ResolutionBlue + ';\n                border-color: ' + _vars.Colors.ResolutionBlue + ';\n                color: ' + _vars.Colors.White + ';\n              ' : '', type === 'warning' ? '\n                background: ' + _vars.Colors.Cinnabar + ';\n                border-color: ' + _vars.Colors.Cinnabar + ';\n                color: ' + _vars.Colors.White + ';\n              ' : '', type === 'disabled' ? '\n                background: ' + _vars.Colors.Gallery + ';\n                border-color: #eee;\n                color: ' + _vars.Colors.Slate + ';\n                cursor: not-allowed;\n              ' : '']], ['1260196456', [styleOverrides]]]) + ' ' + 'Button'
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '558464166',
      css: '.Button.__jsx-style-dynamic-selector{cursor:pointer;text-align:center;border-width:1px;border-style:solid;border-color:#c4cdd5;color:' + _vars.Colors.Royal + ';background-color:' + (bgColor || _vars.Colors.White) + ';padding:0 calc(' + _vars.MarginPaddingSize[3] + '/2);line-height:' + _vars.MarginPaddingSize[3] + ';font-size:' + _vars.Typography.fontSize[3] + ';max-height:' + _vars.MarginPaddingSize[3] + ';min-width:140px;border-radius:2px;}.Button.__jsx-style-dynamic-selector:hover{color:' + _vars.Colors.PoloBlue + ';}.Button.__jsx-style-dynamic-selector:focus{outline:none;}',
      dynamic: [_vars.Colors.Royal, bgColor || _vars.Colors.White, _vars.MarginPaddingSize[3], _vars.MarginPaddingSize[3], _vars.Typography.fontSize[3], _vars.MarginPaddingSize[3], _vars.Colors.PoloBlue]
    }),
    _react2.default.createElement(_style2.default, {
      styleId: '1831688054',
      css: '.Button.__jsx-style-dynamic-selector{' + (type === 'primary' ? '\n              background: ' + _vars.Colors.Royal + ';\n              border-color: ' + _vars.Colors.Royal + ';\n              color: ' + _vars.Colors.White + ';\n            ' : '') + ' ' + (type === 'warning' ? '\n              background: ' + _vars.Colors.Cinnabar + ';\n              border-color: ' + _vars.Colors.Cinnabar + ';\n              color: ' + _vars.Colors.White + ';\n              cursor: default;\n            ' : '') + ' ' + (type === 'disabled' ? '\n              background: ' + _vars.Colors.Gallery + ';\n              border-color: #c4cdd5;\n              color: ' + _vars.Colors.Slate + ';\n              cursor: not-allowed;\n            ' : '') + ' ' + (type === 'left' || type === 'right' ? '\n              min-width: 0px;\n              max-height: none;\n              width: ' + (size !== "small" ? size || _vars.MarginPaddingSize[3] : _vars.MarginPaddingSize[3]) + ';\n              height: ' + (size !== "small" ? size || _vars.MarginPaddingSize[3] : _vars.MarginPaddingSize[3]) + ';\n              line-height: ' + (size !== "small" ? size || _vars.MarginPaddingSize[3] : _vars.MarginPaddingSize[3]) + ';\n              padding: 0;\n              background: ' + ('url( ' + require('../assets/glyphs/glyph-carousel-arrow.svg') + ')') + '  no-repeat center center;\n            ' : '') + ' ' + (type === 'left' ? 'transform:rotateY(180deg);' : '') + '   ' + (size === 'small' ? '\n              padding: 2px calc(' + _vars.MarginPaddingSize[3] + '/4);\n              font-size: ' + _vars.Typography.fontSize[4] + ';\n              max-height: 22px;\n              min-width: auto;\n              line-height: 1;\n            ' : '') + ';}.Button.__jsx-style-dynamic-selector:hover{' + (type === 'primary' ? '\n                background: #5068b2;\n                border-color: ' + _vars.Colors.PoloBlue + ';\n                color: ' + _vars.Colors.White + ';\n              ' : '') + ' ' + (type === 'primary' && size === 'small' ? 'border-color: #5068b2;' : '') + ' ' + (type === 'warning' ? '\n                background: ' + _vars.Colors.Cinnabar + ';\n                border-color: ' + _vars.Colors.Cinnabar + ';\n                color: ' + _vars.Colors.White + ';\n              ' : '') + ' ' + (type === 'disabled' ? '\n                background: ' + _vars.Colors.Gallery + ';\n                border-color: #eee;\n                color: ' + _vars.Colors.Slate + ';\n                cursor: not-allowed;\n              ' : '') + ';}.Button.__jsx-style-dynamic-selector:active{color:' + _vars.Colors.ResolutionBlue + ';' + (type === 'primary' ? '\n                background: ' + _vars.Colors.ResolutionBlue + ';\n                border-color: ' + _vars.Colors.ResolutionBlue + ';\n                color: ' + _vars.Colors.White + ';\n              ' : '') + ' ' + (type === 'warning' ? '\n                background: ' + _vars.Colors.Cinnabar + ';\n                border-color: ' + _vars.Colors.Cinnabar + ';\n                color: ' + _vars.Colors.White + ';\n              ' : '') + ' ' + (type === 'disabled' ? '\n                background: ' + _vars.Colors.Gallery + ';\n                border-color: #eee;\n                color: ' + _vars.Colors.Slate + ';\n                cursor: not-allowed;\n              ' : '') + ';}',
      dynamic: [type === 'primary' ? '\n              background: ' + _vars.Colors.Royal + ';\n              border-color: ' + _vars.Colors.Royal + ';\n              color: ' + _vars.Colors.White + ';\n            ' : '', type === 'warning' ? '\n              background: ' + _vars.Colors.Cinnabar + ';\n              border-color: ' + _vars.Colors.Cinnabar + ';\n              color: ' + _vars.Colors.White + ';\n              cursor: default;\n            ' : '', type === 'disabled' ? '\n              background: ' + _vars.Colors.Gallery + ';\n              border-color: #c4cdd5;\n              color: ' + _vars.Colors.Slate + ';\n              cursor: not-allowed;\n            ' : '', type === 'left' || type === 'right' ? '\n              min-width: 0px;\n              max-height: none;\n              width: ' + (size !== "small" ? size || _vars.MarginPaddingSize[3] : _vars.MarginPaddingSize[3]) + ';\n              height: ' + (size !== "small" ? size || _vars.MarginPaddingSize[3] : _vars.MarginPaddingSize[3]) + ';\n              line-height: ' + (size !== "small" ? size || _vars.MarginPaddingSize[3] : _vars.MarginPaddingSize[3]) + ';\n              padding: 0;\n              background: ' + ('url( ' + require('../assets/glyphs/glyph-carousel-arrow.svg') + ')') + '  no-repeat center center;\n            ' : '', type === 'left' ? 'transform:rotateY(180deg);' : '', size === 'small' ? '\n              padding: 2px calc(' + _vars.MarginPaddingSize[3] + '/4);\n              font-size: ' + _vars.Typography.fontSize[4] + ';\n              max-height: 22px;\n              min-width: auto;\n              line-height: 1;\n            ' : '', type === 'primary' ? '\n                background: #5068b2;\n                border-color: ' + _vars.Colors.PoloBlue + ';\n                color: ' + _vars.Colors.White + ';\n              ' : '', type === 'primary' && size === 'small' ? 'border-color: #5068b2;' : '', type === 'warning' ? '\n                background: ' + _vars.Colors.Cinnabar + ';\n                border-color: ' + _vars.Colors.Cinnabar + ';\n                color: ' + _vars.Colors.White + ';\n              ' : '', type === 'disabled' ? '\n                background: ' + _vars.Colors.Gallery + ';\n                border-color: #eee;\n                color: ' + _vars.Colors.Slate + ';\n                cursor: not-allowed;\n              ' : '', _vars.Colors.ResolutionBlue, type === 'primary' ? '\n                background: ' + _vars.Colors.ResolutionBlue + ';\n                border-color: ' + _vars.Colors.ResolutionBlue + ';\n                color: ' + _vars.Colors.White + ';\n              ' : '', type === 'warning' ? '\n                background: ' + _vars.Colors.Cinnabar + ';\n                border-color: ' + _vars.Colors.Cinnabar + ';\n                color: ' + _vars.Colors.White + ';\n              ' : '', type === 'disabled' ? '\n                background: ' + _vars.Colors.Gallery + ';\n                border-color: #eee;\n                color: ' + _vars.Colors.Slate + ';\n                cursor: not-allowed;\n              ' : '']
    }),
    _react2.default.createElement(_style2.default, {
      styleId: '1260196456',
      css: '.Button.__jsx-style-dynamic-selector{' + styleOverrides + ';}',
      dynamic: [styleOverrides]
    })
  );
};

Button.propTypes = {
  /**
   * Button style
   */
  type: _propTypes2.default.oneOf(['default', 'primary', 'warning', 'disabled', 'left', 'right']),
  /**
   * Button style
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string, _propTypes2.default.array]),
  /**
   * Button size
   */
  size: _propTypes2.default.string,
  /**
   * Icon image
   */
  icon: _propTypes2.default.string,
  /**
   * BGColor
   */
  bgColor: _propTypes2.default.string
};

Button.defaultProps = {
  type: 'default'
};

exports.default = Button;