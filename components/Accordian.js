import React from 'react';
import PropTypes from 'prop-types';

const Accordian = ({ children, title }) => (
  <details>
    <summary>{title}</summary>
    <div className="details-content">
      {children}
    </div>
    <style jsx>{`
      details { 
        padding: 20px;
        width: 635px;
        border-radius: 2px;
        background-color: #ffffff;
        border: solid 1px #e4e4e4;
        cursor: pointer;
      }
      
      details:focus, 
      summary:focus { outline: none !important; }

      summary {
        position: relative;
        left: -1rem;
        background: ${'url('+ require('../assets/glyphs/glyph-arrow.svg') +')'} no-repeat right center;
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #1e2837;
      }
      summary::-webkit-details-marker { color: transparent; }

      {/*
        TODO: Rotate background image
        details[open] summary {
        background
      }*/}
      
      .details-content { 
        margin: 20px 0 0 20px;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.43;
        letter-spacing: normal;
        color: #1e2837;
      }
    `}</style>
  </details>
)

Accordian.propTypes = {
  /**
   * Child Elements
   */
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
}

Accordian.defaultProps = {}

export default Accordian