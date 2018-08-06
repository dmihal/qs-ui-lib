'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = function Table(_ref) {
  var data = _ref.data,
      tableTitle = _ref.tableTitle,
      direction = _ref.direction;
  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-3714472287' + ' ' + 'Table'
    },
    _react2.default.createElement(
      'div',
      {
        className: 'jsx-3714472287' + ' ' + 'table-wrapper'
      },
      _react2.default.createElement(
        'div',
        {
          className: 'jsx-3714472287' + ' ' + 'table-title'
        },
        tableTitle
      ),
      direction === 'horizontal' ? _react2.default.createElement(
        'table',
        {
          className: 'jsx-3714472287'
        },
        _react2.default.createElement(
          'tbody',
          {
            className: 'jsx-3714472287'
          },
          Object.keys(data).map(function (key) {
            return _react2.default.createElement(
              'tr',
              { key: data[key], className: 'jsx-3714472287' + ' ' + 'horizontal-row'
              },
              _react2.default.createElement(
                'th',
                {
                  className: 'jsx-3714472287'
                },
                key
              ),
              _react2.default.createElement(
                'td',
                {
                  className: 'jsx-3714472287'
                },
                data[key]
              )
            );
          })
        )
      ) : _react2.default.createElement(
        'table',
        {
          className: 'jsx-3714472287'
        },
        _react2.default.createElement(
          'thead',
          {
            className: 'jsx-3714472287'
          },
          _react2.default.createElement(
            'tr',
            {
              className: 'jsx-3714472287'
            },
            Object.keys(data).map(function (key) {
              return _react2.default.createElement(
                'th',
                { key: key, className: 'jsx-3714472287'
                },
                key
              );
            })
          )
        ),
        _react2.default.createElement(
          'tbody',
          {
            className: 'jsx-3714472287'
          },
          _react2.default.createElement(
            'tr',
            {
              className: 'jsx-3714472287'
            },
            Object.keys(data).map(function (key) {
              return _react2.default.createElement(
                'td',
                { key: data[key], className: 'jsx-3714472287'
                },
                _typeof(data[key]) === 'object' ? data[key].map(function (deepKey) {
                  return _react2.default.createElement(
                    'span',
                    { key: deepKey + 'nested', className: 'jsx-3714472287'
                    },
                    deepKey
                  );
                }) : data[key]
              );
            })
          )
        )
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '3714472287',
      css: '.Table.jsx-3714472287 *.jsx-3714472287{text-align:left;}.table-title.jsx-3714472287{background:#e6e9f4;font-size:18px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:1;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;color:#052892;padding:10px 20px;}.table-wrapper.jsx-3714472287{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.table-wrapper.jsx-3714472287 table.jsx-3714472287{border-collapse:collapse;}.table-wrapper.jsx-3714472287 th.jsx-3714472287,.table-wrapper.jsx-3714472287 td.jsx-3714472287{border:solid 1px #eeeeee;padding:20px;}.table-wrapper.jsx-3714472287 th.jsx-3714472287{width:194px;background-color:#f9f9f9;font-size:18px;font-weight:300;font-style:normal;font-stretch:normal;line-height:1;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;color:#1e2837;}.table-wrapper.jsx-3714472287 td.jsx-3714472287{font-size:16px;font-weight:300;font-style:normal;font-stretch:normal;line-height:1.38;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;color:#1e2837;vertical-align:top;}'
    })
  );
};

Table.propTypes = {
  /**
   * Data Obj
   */
  data: _propTypes2.default.object.isRequired,
  /**
   * Table Title
   */
  tableTitle: _propTypes2.default.string.isRequired,
  /**
   * Direction
   */
  direction: _propTypes2.default.string
};

Table.defaultProps = {};

exports.default = Table;