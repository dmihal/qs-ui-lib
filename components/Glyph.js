import React from 'react';
import PropTypes from 'prop-types';

const Glyph = ({ glyphType, size }) => (
    <img
      alt={'Glyph ' + glyphType}
      src={require('../assets/glyphs/'+glyphType+'.svg')}
      style={{
        'width': Glyph.sizes[size] || '40px',
        'height': Glyph.sizes[size] || '40px'
      }}
    />
)

Glyph.propTypes = {
  /*
  * Glyph type
  */
  glyphType: PropTypes.string.isRequired,
  /*
  * Glyph size
  */
  size: PropTypes.oneOf(['small', 'large']).isRequired
}

Glyph.defaultProps = {
  size: 'small'
}

Glyph.sizes = {
  small: '24px',
  large: '40px'
}

export default Glyph
