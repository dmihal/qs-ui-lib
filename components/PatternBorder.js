import React from 'react';
import PropTypes from 'prop-types';

const PatternBorder = ({ children }) => (
  <div className="PatternBorder">
    <style jsx>{`
      .PatternBorder {
        width: 100%;
        height: 20px;
        opacity: 0.7;
        background: ${'url('+require('../assets/misc/pattern.svg')+')'} repeat;
      }
    `}</style>
  </div>
)

PatternBorder.propTypes = {}
PatternBorder.defaultProps = {}

export default PatternBorder
