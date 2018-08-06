'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcSlider = require('rc-slider');

var _rcSlider2 = _interopRequireDefault(_rcSlider);

var _rcTooltip = require('rc-tooltip');

var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

var _index = require('rc-slider/assets/index.css');

var _index2 = _interopRequireDefault(_index);

var _vars = require('../vars');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createSliderWithTooltip = _rcSlider2.default.createSliderWithTooltip;
var Range = createSliderWithTooltip(_rcSlider2.default.Range);
var Handle = _rcSlider2.default.Handle;

var SlideBar = function (_Component) {
  _inherits(SlideBar, _Component);

  function SlideBar(props) {
    _classCallCheck(this, SlideBar);

    // this.state = {
    //   value: props.SOMEPROP 
    // };
    var _this = _possibleConstructorReturn(this, (SlideBar.__proto__ || Object.getPrototypeOf(SlideBar)).call(this));

    _this.handleDrag = function (sliderData) {
      if (_this.props.handleDrag) {
        _this.props.handleDrag(sliderData);
      }

      var value = sliderData.value,
          dragging = sliderData.dragging,
          index = sliderData.index,
          restProps = _objectWithoutProperties(sliderData, ['value', 'dragging', 'index']);

      return _react2.default.createElement(
        _rcTooltip2.default,
        {
          prefixCls: 'rc-slider-tooltip',
          overlay: value,
          visible: dragging,
          placement: 'top',
          key: index },
        _react2.default.createElement(Handle, _extends({ value: value }, restProps))
      );
    };

    return _this;
  }

  _createClass(SlideBar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_rcSlider2.default, { min: 0, max: this.props.max, defaultValue: this.props.defaultValue, handle: this.handleDrag }),
        _react2.default.createElement(_style2.default, {
          styleId: _index2.default.__hash,
          css: _index2.default
        }),
        _react2.default.createElement(_style2.default, {
          styleId: '935575407',
          css: '.rc-slider-handle{border-color:' + _vars.Colors.White + ';border-width:5px;box-shadow:0 1px 5px 0 rgba(0,0,0,0.15);background-color:' + _vars.Colors.Royal + ';margin-top:-10px;width:24px;height:24px;}.rc-slider-handle:hover{border-color:' + _vars.Colors.PoloBlue + ';}.rc-slider-handle:active{border-color:white;box-shadow:0 1px 5px 0 rgba(0,0,0,0.15);}.rc-slider-track{background-color:' + _vars.Colors.Royal + ';}',
          dynamic: [_vars.Colors.White, _vars.Colors.Royal, _vars.Colors.PoloBlue, _vars.Colors.Royal]
        })
      );
    }
  }]);

  return SlideBar;
}(_react.Component);

SlideBar.propTypes = {
  max: _propTypes2.default.number.isRequired,
  defaultValue: _propTypes2.default.number,
  handleDrag: _propTypes2.default.func
};
exports.default = SlideBar;