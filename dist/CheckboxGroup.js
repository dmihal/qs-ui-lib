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

var CheckboxGroup = function CheckboxGroup(_ref) {
  var nameID = _ref.nameID,
      options = _ref.options,
      error = _ref.error;
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      'form',
      {
        className: _style2.default.dynamic([['1754106217', [_vars.MarginPaddingSize[4], _vars.Colors.Cinnabar, 'url(/' + require('qs-ui-library-asset-inliner/inlined/glyphs/glyph-check.svg.js') + ')', error ? 'none' : 'url(/' + require('qs-ui-library-asset-inliner/inlined/glyphs/glyph-check.svg.js') + ')']]])
      },
      options.map(function (option, index) {
        return _react2.default.createElement(
          'div',
          {
            key: option.label + index,
            className: _style2.default.dynamic([['1754106217', [_vars.MarginPaddingSize[4], _vars.Colors.Cinnabar, 'url(/' + require('qs-ui-library-asset-inliner/inlined/glyphs/glyph-check.svg.js') + ')', error ? 'none' : 'url(/' + require('qs-ui-library-asset-inliner/inlined/glyphs/glyph-check.svg.js') + ')']]]) + ' ' + ("checkbox-choice-wrap" + (option.disabled ? ' disabled' : '') + (option.deactive ? ' deactive' : '') + (option.error ? ' error' : '') || '')
          },
          _react2.default.createElement('input', { type: 'checkbox', id: option.label + index + nameID, name: nameID, disabled: option.disabled || option.error, className: _style2.default.dynamic([['1754106217', [_vars.MarginPaddingSize[4], _vars.Colors.Cinnabar, 'url(/' + require('qs-ui-library-asset-inliner/inlined/glyphs/glyph-check.svg.js') + ')', error ? 'none' : 'url(/' + require('qs-ui-library-asset-inliner/inlined/glyphs/glyph-check.svg.js') + ')']]])
          }),
          _react2.default.createElement(
            'label',
            { htmlFor: option.label + index + nameID, className: _style2.default.dynamic([['1754106217', [_vars.MarginPaddingSize[4], _vars.Colors.Cinnabar, 'url(/' + require('qs-ui-library-asset-inliner/inlined/glyphs/glyph-check.svg.js') + ')', error ? 'none' : 'url(/' + require('qs-ui-library-asset-inliner/inlined/glyphs/glyph-check.svg.js') + ')']]])
            },
            option.label
          )
        );
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '1754106217',
      css: '.checkbox-choice-wrap.__jsx-style-dynamic-selector{margin-bottom:' + _vars.MarginPaddingSize[4] + ';}.checkbox-choice-wrap.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked+label.__jsx-style-dynamic-selector:before,.checkbox-choice-wrap.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:not(:checked)+label.__jsx-style-dynamic-selector:before{cursor:not-allowed;}.checkbox-choice-wrap.deactive.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector::after{-webkit-filter:saturate(0%) opacity(20%);filter:saturate(0%) opacity(20%);}.checkbox-choice-wrap.error.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked+label.__jsx-style-dynamic-selector:before,.checkbox-choice-wrap.error.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:not(:checked)+label.__jsx-style-dynamic-selector:before{border:1px solid ' + _vars.Colors.Cinnabar + ';background:rgba(227,66,52,0.1);cursor:not-allowed;}.checkbox-choice-wrap.error.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked+label.__jsx-style-dynamic-selector:after,.checkbox-choice-wrap.error.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:not(:checked)+label.__jsx-style-dynamic-selector:after{background-image:' + ('url(/' + require('qs-ui-library-asset-inliner/inlined/glyphs/glyph-check.svg.js') + ')') + ';}[type="checkbox"]:checked.__jsx-style-dynamic-selector,[type="checkbox"]:not(:checked).__jsx-style-dynamic-selector{position:absolute;left:-9999px;}[type="checkbox"]:checked.__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector,[type="checkbox"]:not(:checked).__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector{position:relative;padding-left:28px;cursor:pointer;line-height:20px;display:inline-block;color:#666;}[type="checkbox"]:checked.__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector:before,[type="checkbox"]:not(:checked).__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector:before{content:\'\';position:absolute;left:0;top:0;width:16px;height:16px;border:1px solid #ddd;border-radius:2px;background:#fff;}[type="checkbox"]:checked.__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector:after,[type="checkbox"]:not(:checked).__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector:after{content:\'\';width:15px;height:16px;position:absolute;top:2px;left:1px;border-radius:100%;-webkit-transition:all 0.2s ease;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;background-image:' + (error ? 'none' : 'url(/' + require('qs-ui-library-asset-inliner/inlined/glyphs/glyph-check.svg.js') + ')') + ';background-size:contain;}[type="checkbox"]:not(:checked).__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector:after{opacity:0;-webkit-transform:scale(0);-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}[type="checkbox"]:checked.__jsx-style-dynamic-selector+label.__jsx-style-dynamic-selector:after{opacity:1;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}',
      dynamic: [_vars.MarginPaddingSize[4], _vars.Colors.Cinnabar, 'url(/' + require('qs-ui-library-asset-inliner/inlined/glyphs/glyph-check.svg.js') + ')', error ? 'none' : 'url(/' + require('qs-ui-library-asset-inliner/inlined/glyphs/glyph-check.svg.js') + ')']
    })
  );
};

CheckboxGroup.propTypes = {
  /**
   * Field label
   */
  nameID: _propTypes2.default.string.isRequired,
  /**
   * checkbox ID
   */
  options: _propTypes2.default.array.isRequired,
  /**
   * Error
   */
  error: _propTypes2.default.bool,
  /**
   * Disabled 
   */
  disabled: _propTypes2.default.bool
};

CheckboxGroup.defaultProps = {};

exports.default = CheckboxGroup;