import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ iconType, size }) => (
    <img
      alt={'icon ' + iconType}
      src={require('../assets/icons/'+iconType+'.svg')}
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
  iconType: PropTypes.string.isRequired,
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
