'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCodemirror = require('react-codemirror2');

var _codemirror = require('codemirror/lib/codemirror.css');

var _codemirror2 = _interopRequireDefault(_codemirror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sampleCodeInternal = 'pragma solidity ^0.4.15;\n\n// Proof of Existence contract, version 1\ncontract ProofOfExistence1 {\n\n  // state\n  bytes32 public proof;\n\n  // calculate and store the proof for a document\n  // *transactional function*\n  function notarize(string document) {\n    proof = proofFor(document);\n  }\n\n  // helper function to get a document\'s sha256\n  // *read-only function*\n  function proofFor(string document) constant returns (bytes32) {\n    return sha256(document);\n  }\n}';

var CodeInputArea = function (_Component) {
  _inherits(CodeInputArea, _Component);

  function CodeInputArea(props) {
    _classCallCheck(this, CodeInputArea);

    var _this = _possibleConstructorReturn(this, (CodeInputArea.__proto__ || Object.getPrototypeOf(CodeInputArea)).call(this));

    _this.handleChange = function (editor, data, value) {
      _this.props.handleChange ? _this.props.handleChange(value, data, editor) : console.log('controlled', { value: value });
    };

    _this.state = {
      value: props.code || sampleCodeInternal
    };
    return _this;
  }

  _createClass(CodeInputArea, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_reactCodemirror.Controlled, {
          value: this.state.value,
          options: {
            mode: 'xml',
            lineNumbers: true
          },
          onBeforeChange: function onBeforeChange(editor, data, value) {
            _this2.setState({ value: value });
          },
          onChange: function onChange(editor, data, value) {
            _this2.handleChange(editor, data, value);
          }
        }),
        _react2.default.createElement(_style2.default, {
          styleId: _codemirror2.default.__hash,
          css: _codemirror2.default
        }),
        _react2.default.createElement(_style2.default, {
          styleId: '4255904238',
          css: '.CodeMirror *{font-family:monospace !important;font-size:12px !important;}.CodeMirror-gutter{background:#f2f4f9;}.CodeMirror-linenumber{color:#052892;font-weight:bold;}pre.CodeMirror-line{padding-left:20px;}'
        })
      );
    }
  }]);

  return CodeInputArea;
}(_react.Component);

// CodeInputArea.defaultProps = {}

CodeInputArea.propTypes = {
  code: _propTypes2.default.string.isRequired
};
exports.default = CodeInputArea;