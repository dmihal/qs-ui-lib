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

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _reactSelect3 = require('react-select/dist/react-select.css');

var _reactSelect4 = _interopRequireDefault(_reactSelect3);

var _vars = require('../vars.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectDropDown = function (_React$Component) {
  _inherits(SelectDropDown, _React$Component);

  function SelectDropDown() {
    _classCallCheck(this, SelectDropDown);

    var _this = _possibleConstructorReturn(this, (SelectDropDown.__proto__ || Object.getPrototypeOf(SelectDropDown)).call(this));

    _this.handleChange = function (selectedOption) {
      _this.setState({ selectedOption: selectedOption });

      if (_this.props.handleChange) {
        _this.props.handleChange(selectedOption);
      }

      // selectedOption can be null when the `x` (close) button is clicked
      // if (selectedOption) {
      // 	console.log(`Selected: ${selectedOption.label}`);
      // }
    };

    _this.state = {
      selectedOption: ''
    };
    return _this;
  }

  _createClass(SelectDropDown, [{
    key: 'render',
    value: function render() {
      var selectedOption = this.state.selectedOption;


      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_reactSelect2.default, {
          name: name,
          value: selectedOption,
          onChange: this.handleChange,
          options: [{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }]
        }),
        _react2.default.createElement(_style2.default, {
          styleId: _reactSelect4.default.__hash,
          css: _reactSelect4.default
        }),
        _react2.default.createElement(_style2.default, {
          styleId: '3765064889',
          css: '.Select-control{height:' + _vars.MarginPaddingSize[5] + ';border-radius:2px;background-image:linear-gradient(to bottom,#ffffff,#f9fafb);border:solid 1px #c4cdd5;}.Select-menu-outer > *{background-image:linear-gradient(to bottom,#ffffff,#f9fafb);}.Select-menu-outer > * > *{background-color:transparent;}.Select-placeholder{color:' + _vars.Colors.Mirage + ';}.Select-menu-outer *{color:' + _vars.Colors.Mirage + ';}.Select--multi .Select-value-icon:hover{background-color:inherit;color:' + _vars.Colors.Royal + ';}.Select--multi .Select-value-icon:focus{background-color:inherit;color:' + _vars.Colors.Royal + ';}',
          dynamic: [_vars.MarginPaddingSize[5], _vars.Colors.Mirage, _vars.Colors.Mirage, _vars.Colors.Royal, _vars.Colors.Royal]
        })
      );
    }
  }]);

  return SelectDropDown;
}(_react2.default.Component);

SelectDropDown.propTypes = {
  name: _propTypes2.default.string,
  handleChange: _propTypes2.default.func,
  options: _propTypes2.default.array
};

SelectDropDown.defaultProps = {};

exports.default = SelectDropDown;