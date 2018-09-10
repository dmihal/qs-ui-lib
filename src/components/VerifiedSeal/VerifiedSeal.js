import React from 'react'
import PropTypes from 'prop-types'

const VerifiedSeal = ({ type }) => (
    <img
      alt={'seal ' + type}
      src={require('../../../asset-inliner/inlined/seals/seal-'+type+'.svg.js')}
      style={{
        'width': VerifiedSeal.sizes['large'],
        'height': VerifiedSeal.sizes['large']
      }}
    />
)

VerifiedSeal.propTypes = {
  /*
  * VerifiedSeal type
  */
  type: PropTypes.string.isRequired,
}

VerifiedSeal.sizes = {
  large: '160px'
}

export default VerifiedSeal
