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

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _vars = require('../vars.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalTrigger = function ModalTrigger(_ref) {
  var children = _ref.children,
      modalID = _ref.modalID;
  return _react2.default.createElement(
    'label',
    { htmlFor: 'modal-trigger-' + modalID, className: _style2.default.dynamic([['1437870570', [_vars.Colors.Royal, _vars.MarginPaddingSize[3], _vars.Typography.fontSize[3], _vars.Colors.Royal, _vars.Colors.Royal, _vars.Colors.White, _vars.Colors.PoloBlue, _vars.Colors.PoloBlue, _vars.Colors.White]]]) + ' ' + 'toggleModal'
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '1437870570',
      css: '.toggleModal.__jsx-style-dynamic-selector{cursor:pointer;text-align:center;border-width:1px;border-style:solid;color:' + _vars.Colors.Royal + ';padding:6px calc(' + _vars.MarginPaddingSize[3] + '/2);font-size:' + _vars.Typography.fontSize[3] + ';background:' + _vars.Colors.Royal + ';border-color:' + _vars.Colors.Royal + ';color:' + _vars.Colors.White + ';}.toggleModal.__jsx-style-dynamic-selector:hover{background:' + _vars.Colors.PoloBlue + ';border-color:' + _vars.Colors.PoloBlue + ';color:' + _vars.Colors.White + ';}.toggleModal.__jsx-style-dynamic-selector:focus{outline:none;}',
      dynamic: [_vars.Colors.Royal, _vars.MarginPaddingSize[3], _vars.Typography.fontSize[3], _vars.Colors.Royal, _vars.Colors.Royal, _vars.Colors.White, _vars.Colors.PoloBlue, _vars.Colors.PoloBlue, _vars.Colors.White]
    })
  );
};

ModalTrigger.propTypes = {
  /**
   * Wrapper layout block
   */
  children: _propTypes2.default.string.isRequired,
  /**
   * Wrapper layout block
   */
  modalID: _propTypes2.default.string.isRequired
};

ModalTrigger.defaultProps = {};

exports.default = ModalTrigger;