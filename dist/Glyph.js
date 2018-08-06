'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Glyph = function Glyph(_ref) {
  var type = _ref.type,
      size = _ref.size;
  return _react2.default.createElement('img', {
    alt: 'Glyph ' + type,
    src: require('../assets/glyphs/' + type + '.svg'),
    style: {
      'width': Glyph.sizes[size] || '40px',
      'height': Glyph.sizes[size] || '40px'
    }
  });
};

Glyph.propTypes = {
  /*
  * Glyph type
  */
  type: _propTypes2.default.string.isRequired,
  /*
  * Glyph size
  */
  size: _propTypes2.default.oneOf(['small', 'large']).isRequired
};

Glyph.defaultProps = {
  size: 'small'
};

Glyph.sizes = {
  small: '24px',
  large: '40px'
};

exports.default = Glyph;