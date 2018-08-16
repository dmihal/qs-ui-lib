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

var _LayoutGrid = require('./LayoutGrid');

var _LayoutGrid2 = _interopRequireDefault(_LayoutGrid);

var _GlobalTypography = require('./GlobalTypography');

var _GlobalTypography2 = _interopRequireDefault(_GlobalTypography);

var _GlobalReset = require('./GlobalReset');

var _GlobalReset2 = _interopRequireDefault(_GlobalReset);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _vars = require('../vars.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Banner = function Banner(_ref) {
  var title = _ref.title,
      altStyle = _ref.altStyle,
      secondayTitle = _ref.secondayTitle,
      ctaBtnText = _ref.ctaBtnText,
      ctaBtnAction = _ref.ctaBtnAction;
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      'div',
      {
        className: _style2.default.dynamic([['205829244', [_vars.MarginPaddingSize[2], altStyle ? 'none' : _vars.Colors.Mirage, altStyle ? 'none' : 'url(' + require('qs-ui-library-asset-inliner/inlined/backgrounds/waves-bg.svg.js') + ')', altStyle ? _vars.Colors.Mirage : _vars.Colors.White, altStyle ? _vars.Colors.Slate : _vars.Colors.White, altStyle ? 'background-color: none; background-image: none;' : null]]]) + ' ' + 'Banner'
      },
      _react2.default.createElement(
        _LayoutGrid2.default,
        { columns: 1 },
        _react2.default.createElement(
          'div',
          {
            className: _style2.default.dynamic([['205829244', [_vars.MarginPaddingSize[2], altStyle ? 'none' : _vars.Colors.Mirage, altStyle ? 'none' : 'url(' + require('qs-ui-library-asset-inliner/inlined/backgrounds/waves-bg.svg.js') + ')', altStyle ? _vars.Colors.Mirage : _vars.Colors.White, altStyle ? _vars.Colors.Slate : _vars.Colors.White, altStyle ? 'background-color: none; background-image: none;' : null]]]) + ' ' + 'banner-left'
          },
          _react2.default.createElement(
            'h1',
            {
              className: _style2.default.dynamic([['205829244', [_vars.MarginPaddingSize[2], altStyle ? 'none' : _vars.Colors.Mirage, altStyle ? 'none' : 'url(' + require('qs-ui-library-asset-inliner/inlined/backgrounds/waves-bg.svg.js') + ')', altStyle ? _vars.Colors.Mirage : _vars.Colors.White, altStyle ? _vars.Colors.Slate : _vars.Colors.White, altStyle ? 'background-color: none; background-image: none;' : null]]])
            },
            title
          ),
          secondayTitle ? _react2.default.createElement(
            'h1',
            {
              className: _style2.default.dynamic([['205829244', [_vars.MarginPaddingSize[2], altStyle ? 'none' : _vars.Colors.Mirage, altStyle ? 'none' : 'url(' + require('qs-ui-library-asset-inliner/inlined/backgrounds/waves-bg.svg.js') + ')', altStyle ? _vars.Colors.Mirage : _vars.Colors.White, altStyle ? _vars.Colors.Slate : _vars.Colors.White, altStyle ? 'background-color: none; background-image: none;' : null]]])
            },
            secondayTitle
          ) : null
        ),
        _react2.default.createElement(
          'div',
          {
            className: _style2.default.dynamic([['205829244', [_vars.MarginPaddingSize[2], altStyle ? 'none' : _vars.Colors.Mirage, altStyle ? 'none' : 'url(' + require('qs-ui-library-asset-inliner/inlined/backgrounds/waves-bg.svg.js') + ')', altStyle ? _vars.Colors.Mirage : _vars.Colors.White, altStyle ? _vars.Colors.Slate : _vars.Colors.White, altStyle ? 'background-color: none; background-image: none;' : null]]]) + ' ' + 'banner-right'
          },
          ctaBtnText && ctaBtnAction ? _react2.default.createElement(
            _Button2.default,
            { onClick: ctaBtnAction },
            ctaBtnText
          ) : null
        )
      ),
      _react2.default.createElement(_style2.default, {
        styleId: '205829244',
        css: '.Banner.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:vertical;-ms-flex-direction:vertical;flex-direction:vertical;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:240px;padding:0 ' + _vars.MarginPaddingSize[2] + ';background-color:' + (altStyle ? 'none' : _vars.Colors.Mirage) + ';background-image:' + (altStyle ? 'none' : 'url(' + require('qs-ui-library-asset-inliner/inlined/backgrounds/waves-bg.svg.js') + ')') + ';background-position:bottom;background-size:100% auto;background-size:cover;background-repeat:no-repeat;' + (altStyle ? 'background-color: none; background-image: none;' : null) + ';}.Banner.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector,.Banner.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{margin:0;}.Banner.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{color:' + (altStyle ? _vars.Colors.Mirage : _vars.Colors.White) + ';}.Banner.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector+h1.__jsx-style-dynamic-selector{color:' + (altStyle ? _vars.Colors.Slate : _vars.Colors.White) + ';}.Banner.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-weight:normal;}.Banner.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector+h1.__jsx-style-dynamic-selector{font-weight:100;}.Banner.__jsx-style-dynamic-selector .banner-right.__jsx-style-dynamic-selector{text-align:right;}',
        dynamic: [_vars.MarginPaddingSize[2], altStyle ? 'none' : _vars.Colors.Mirage, altStyle ? 'none' : 'url(' + require('qs-ui-library-asset-inliner/inlined/backgrounds/waves-bg.svg.js') + ')', altStyle ? _vars.Colors.Mirage : _vars.Colors.White, altStyle ? _vars.Colors.Slate : _vars.Colors.White, altStyle ? 'background-color: none; background-image: none;' : null]
      })
    )
  );
};

Banner.propTypes = {
  /**
   * Banner header text
   */
  title: _propTypes2.default.string.isRequired,
  /**
   * Banner header text
   */
  altStyle: _propTypes2.default.string,
  /**
   * Banner header text
   */
  secondayTitle: _propTypes2.default.string,
  /**
   * Banner header text
   */
  ctaBtnText: _propTypes2.default.string,
  /**
   * Banner header text
   */
  ctaBtnAction: _propTypes2.default.func
};

Banner.defaultProps = {
  title: 'FILL IN PAGE BANNER TITLE'
};

exports.default = Banner;