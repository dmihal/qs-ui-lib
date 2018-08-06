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

/**
 * This is a top-level wrapper layout block
 */
var LayoutWrapper = function LayoutWrapper(_ref) {
  var children = _ref.children,
      documentationStylesOnly = _ref.documentationStylesOnly;
  return _react2.default.createElement(
    'div',
    {
      className: _style2.default.dynamic([['3298197182', [_vars.LayoutSizes[0], _vars.MarginPaddingSize[2], documentationStylesOnly]]]) + ' ' + 'LayoutWrapper'
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '3298197182',
      css: '.__jsx-style-dynamic-selector{' + documentationStylesOnly + ';}.LayoutWrapper.__jsx-style-dynamic-selector{margin:auto;max-width:' + _vars.LayoutSizes[0] + ';padding:0 ' + _vars.MarginPaddingSize[2] + ';width:100%;}',
      dynamic: [_vars.LayoutSizes[0], _vars.MarginPaddingSize[2], documentationStylesOnly]
    })
  );
};

LayoutWrapper.propTypes = {
  /**
   * Wrapper layout block
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string, _propTypes2.default.array]).isRequired
};

LayoutWrapper.defaultProps = {};

exports.default = LayoutWrapper;