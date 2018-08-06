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

var _LinkText = require('./LinkText');

var _LinkText2 = _interopRequireDefault(_LinkText);

var _vars = require('../vars.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalloutCard = function CalloutCard(_ref) {
  var img = _ref.img,
      title = _ref.title,
      linkText = _ref.linkText,
      link = _ref.link;
  return _react2.default.createElement(
    'div',
    {
      className: _style2.default.dynamic([['2354617056', [_vars.MarginPaddingSize[4], _vars.MarginPaddingSize[5], _vars.MarginPaddingSize[4], _vars.Colors.Royal, _vars.MarginPaddingSize[5]]]]) + ' ' + 'CalloutCard'
    },
    _react2.default.createElement('img', { src: img, alt: 'call out card', className: _style2.default.dynamic([['2354617056', [_vars.MarginPaddingSize[4], _vars.MarginPaddingSize[5], _vars.MarginPaddingSize[4], _vars.Colors.Royal, _vars.MarginPaddingSize[5]]]])
    }),
    _react2.default.createElement(
      'h2',
      {
        className: _style2.default.dynamic([['2354617056', [_vars.MarginPaddingSize[4], _vars.MarginPaddingSize[5], _vars.MarginPaddingSize[4], _vars.Colors.Royal, _vars.MarginPaddingSize[5]]]])
      },
      title
    ),
    _react2.default.createElement(
      'div',
      {
        className: _style2.default.dynamic([['2354617056', [_vars.MarginPaddingSize[4], _vars.MarginPaddingSize[5], _vars.MarginPaddingSize[4], _vars.Colors.Royal, _vars.MarginPaddingSize[5]]]]) + ' ' + 'callout-bottom'
      },
      _react2.default.createElement(
        _LinkText2.default,
        { arrow: true },
        linkText
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '2354617056',
      css: '.CalloutCard.__jsx-style-dynamic-selector{margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:150px;max-width:300px;width:100%;height:100%;text-align:center;border:1px solid #eee;padding:' + _vars.MarginPaddingSize[4] + ' 0 0 0;border-radius:2px;box-shadow:0 1px 3px 0 rgba(63,63,68,0.15);}.CalloutCard.__jsx-style-dynamic-selector .callout-bottom.__jsx-style-dynamic-selector{background:#f9f9f9;padding:12px 0 calc(' + _vars.MarginPaddingSize[5] + ') 0;text-align:center;width:100%;}.CalloutCard.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{margin-top:10px !important;margin-bottom:' + _vars.MarginPaddingSize[4] + ';color:' + _vars.Colors.Royal + ';font-weight:normal;}.CalloutCard.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{border-radius:50%;width:70px;height:70px;border:1px solid #e4e4e4;margin-bottom:' + _vars.MarginPaddingSize[5] + ';}',
      dynamic: [_vars.MarginPaddingSize[4], _vars.MarginPaddingSize[5], _vars.MarginPaddingSize[4], _vars.Colors.Royal, _vars.MarginPaddingSize[5]]
    })
  );
};

CalloutCard.propTypes = {};

CalloutCard.defaultProps = {};

exports.default = CalloutCard;