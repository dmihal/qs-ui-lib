import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ type, size }) => (
  <img
    alt={'icon ' + type}
    src={require('../../../asset-inliner/inlined/icons/'+type+'.svg.js')}
    style={{
      'width': Icon.sizes[size] || Icon.sizes['small'],
      'height': Icon.sizes[size] || Icon.sizes['small']
    }}
  />
)

Icon.propTypes = {
  /*
  * Icon type
  */
  type: PropTypes.string.isRequired,
  /*
  * Icon size
  */
  size: PropTypes.oneOf(['small', 'large']).isRequired
}

Icon.sizes = {
  small: '40px',
  large: '70px'
}

export default Icon
