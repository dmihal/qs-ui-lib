'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
  var type = _ref.type,
      size = _ref.size;
  return _react2.default.createElement('img', {
    alt: 'icon ' + type,
    src: require('qs-ui-library-asset-inliner/inlined/icons/' + type + '.svg.js'),
    style: {
      'width': Icon.sizes[size] || '40px',
      'height': Icon.sizes[size] || '40px'
    }
  });
};

Icon.propTypes = {
  /*
  * Icon type
  */
  type: _propTypes2.default.string.isRequired,
  /*
  * Icon size
  */
  size: _propTypes2.default.oneOf(['small', 'large']).isRequired
};

Icon.defaultProps = {
  size: 'small'
};

Icon.sizes = {
  small: '40px',
  large: '70px'
};

exports.default = Icon;