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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PatternBorder = function PatternBorder(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-2553260426' + ' ' + 'PatternBorder'
    },
    _react2.default.createElement(_style2.default, {
      styleId: '2553260426',
      css: '.PatternBorder.jsx-2553260426{width:100%;height:20px;opacity:0.7;background:' + ('url(' + require('../assets/misc/pattern.svg') + ')') + ' repeat;}'
    })
  );
};

PatternBorder.propTypes = {};
PatternBorder.defaultProps = {};

exports.default = PatternBorder;