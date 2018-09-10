import React from 'react'
import PropTypes from 'prop-types'

const Glyph = ({ type, size }) => (
    <img
      alt={'Glyph ' + type}
      src={require('../../../asset-inliner/inlined/glyphs/'+type+'.svg.js')}
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
  type: PropTypes.string.isRequired,
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
