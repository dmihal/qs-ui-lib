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
      className: 'jsx-2210278470' + ' ' + 'PatternBorder'
    },
    _react2.default.createElement(_style2.default, {
      styleId: '2210278470',
      css: '.PatternBorder.jsx-2210278470{width:100%;height:20px;opacity:0.7;background:' + ('url(' + require('qs-ui-library-asset-inliner/inlined/misc/pattern.svg.js') + ')') + ' repeat;}'
    })
  );
};

PatternBorder.propTypes = {};
PatternBorder.defaultProps = {};

exports.default = PatternBorder;