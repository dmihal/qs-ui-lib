import React from 'react'
import PropTypes from 'prop-types'
import { bgpattern } from '../../../asset-inliner'

const PatternBorder = ({ children }) => (
  <div className="PatternBorder">
    <style jsx>{`
      .PatternBorder {
        width: 100%;
        height: 20px;
        opacity: 0.7;
        background: ${'url('+bgpattern+')'} repeat;
      }
    `}</style>
  </div>
)

PatternBorder.propTypes = {}
PatternBorder.defaultProps = {}

export default PatternBorder
