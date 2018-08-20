import React from 'react';
import PropTypes from 'prop-types';

const PatternBorder = ({ children }) => (
  <div className="PatternBorder">
    <style jsx>{`
      .PatternBorder {
        width: 100%;
        height: 20px;
        opacity: 0.7;
        background: ${'url('+require('qs-ui-library-asset-inliner/inlined/misc/pattern.svg.js')+')'} repeat;
      }
    `}</style>
  </div>
)

PatternBorder.propTypes = {}
PatternBorder.defaultProps = {}

export default PatternBorder
