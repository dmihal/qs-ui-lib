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

var _reactDatepicker = require('react-datepicker');

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _vars = require('../vars.js');

var _reactDatepicker3 = require('react-datepicker/dist/react-datepicker.css');

var _reactDatepicker4 = _interopRequireDefault(_reactDatepicker3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePick = function (_React$Component) {
  _inherits(DatePick, _React$Component);

  function DatePick(props) {
    _classCallCheck(this, DatePick);

    var _this = _possibleConstructorReturn(this, (DatePick.__proto__ || Object.getPrototypeOf(DatePick)).call(this, props));

    _this.handleChange = function (date) {
      _this.props.handleChange ? _this.props.handleChange(date) : _this.setState({ startDate: date });
    };

    _this.state = { startDate: (0, _moment2.default)() };
    return _this;
  }

  _createClass(DatePick, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_reactDatepicker2.default, {
          selected: this.state.startDate,
          onChange: this.handleChange }),
        _react2.default.createElement(_style2.default, {
          styleId: _reactDatepicker4.default.__hash,
          css: _reactDatepicker4.default
        }),
        _react2.default.createElement(_style2.default, {
          styleId: '3774468777',
          css: '.react-datepicker-wrapper{width:' + (this.props.width || '282px') + ';}.react-datepicker{border-radius:0;border:1px solid #c4cdd5;}.react-datepicker__input-container{width:100%;}.react-datepicker__input-container::after{content:\'\';display:block;position:absolute;width:17px;height:16px;vertical-align:middle;content:\'\';background:' + ('url(/' + require('qs-ui-library-asset-inliner/inlined/glyphs/glyph-calendar.svg.js') + ')') + ';left:calc(100% - 20px);bottom:14px;}.react-datepicker__input-container > *{display:block;width:100%;font-size:' + _vars.Typography.fontSize[3] + ';color:' + _vars.Colors.Mirage + ';border:solid 1px ' + _vars.Colors.Gallery + ';border-color:' + _vars.Colors.Gallery + ';padding:calc(' + _vars.MarginPaddingSize[5] + ') calc(' + _vars.MarginPaddingSize[5] + ');outline:none;position:relative;}.react-datepicker__header{background:' + _vars.Colors.White + ';border-width:1px;border-bottom-color:#c4cdd5;}.react-datepicker__triangle{display:none;}.react-datepicker-popper[data-placement^="bottom"]{margin-top:0;}.react-datepicker__month{margin:0;}.react-datepicker__navigation--previous{border-right-color:rgba(90,106,122,1.0);}.react-datepicker__navigation--next{border-left-color:rgba(90,106,122,1.0);}.react-datepicker__day-name,.react-datepicker__day,.react-datepicker__time-name{margin:0;width:' + _vars.MarginPaddingSize[3] + ';height:' + _vars.MarginPaddingSize[3] + ';line-height:' + _vars.MarginPaddingSize[3] + ';font-size:' + _vars.Typography.fontSize[3] + ';}.react-datepicker__day-name{line-height:' + _vars.Typography.fontSize[4] + ';font-size:' + _vars.Typography.fontSize[4] + ';height:' + _vars.Typography.fontSize[3] + ';}.react-datepicker__current-month{text-align:center;font-weight:normal;font-size:' + _vars.Typography.fontSize[3] + ';padding-bottom:8px;}.react-datepicker__day--keyboard-selected,.react-datepicker__day--keyboard-selected:hover{border-radius:0;background-color:' + _vars.Colors.Royal + ';font-weight:normal;}.react-datepicker__day{border-bottom:1px solid #c4cdd5;border-right:1px solid #c4cdd5;}.react-datepicker__day:last-child{border-right:0;}.react-datepicker__week:last-child .react-datepicker__day{border-bottom:0;}.react-datepicker__day:hover{border-radius:0;font-weight:normal;}.react-datepicker__navigation{border-width:0.35rem;}.react-datepicker__day--outside-month{color:transparent !important;}',
          dynamic: [this.props.width || '282px', 'url(/' + require('qs-ui-library-asset-inliner/inlined/glyphs/glyph-calendar.svg.js') + ')', _vars.Typography.fontSize[3], _vars.Colors.Mirage, _vars.Colors.Gallery, _vars.Colors.Gallery, _vars.MarginPaddingSize[5], _vars.MarginPaddingSize[5], _vars.Colors.White, _vars.MarginPaddingSize[3], _vars.MarginPaddingSize[3], _vars.MarginPaddingSize[3], _vars.Typography.fontSize[3], _vars.Typography.fontSize[4], _vars.Typography.fontSize[4], _vars.Typography.fontSize[3], _vars.Typography.fontSize[3], _vars.Colors.Royal]
        })
      );
    }
  }]);

  return DatePick;
}(_react2.default.Component);

DatePick.propTypes = {
  // selected: PropTypes.func,
  // handleChange: PropTypes.func,
};

DatePick.defaultProps = {};

exports.default = DatePick;