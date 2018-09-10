import React from 'react'
import PropTypes from 'prop-types'

const VerifiedSeal = ({ type, size }) => (
    <img
      alt={'seal ' + type}
      src={require('../../../asset-inliner/inlined/seals/seal-'+type+'.svg.js')}
      style={{
        'width': VerifiedSeal.sizes[size] || '160px',
        'height': VerifiedSeal.sizes[size] || '160px'
      }}
    />
)

VerifiedSeal.propTypes = {
  /*
  * VerifiedSeal type
  */
  type: PropTypes.string.isRequired,
  /*
  * VerifiedSeal size
  */
  size: PropTypes.oneOf(['small', 'large']).isRequired
}

VerifiedSeal.defaultProps = {
  size: 'large'
}

VerifiedSeal.sizes = {
  large: '160px'
}

export default VerifiedSeal
