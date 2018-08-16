import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ type, size }) => (
    <img
      alt={'icon ' + type}
      src={require('qs-ui-library-asset-inliner/inlined/icons/'+type+'.svg.js')}
      style={{
        'width': Icon.sizes[size] || '40px',
        'height': Icon.sizes[size] || '40px'
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

Icon.defaultProps = {
  size: 'small'
}

Icon.sizes = {
  small: '40px',
  large: '70px'
}

export default Icon
