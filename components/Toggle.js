import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Colors, MarginPaddingSize } from '../vars.mjs';

const Toggle = ({toggleID}) => (
  <React.Fragment>
    <input type="checkbox" name={toggleID} id={toggleID} />
    <label for={toggleID}></label>
    <style jsx>{`
      input {
        max-height: 0;
        max-width: 0;
        opacity: 0;
      }
      input + label {
        display: inline-block;
        position: relative;
        box-shadow: inset 0 0 0px 1px #d5d5d5;
        text-indent: -5000px;
        height: 30px;
        width: 50px;
        border-radius: 15px;
        cursor: pointer;
      }
      
      input + label:before {
        content: "";
        position: absolute;
        display: block;
        height: 30px;
        width: 30px;
        top: 0;
        left: 0;
        border-radius: 15px;
        background: rgba(19,191,17,0);
        -moz-transition: .25s ease-in-out;
        -webkit-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
      }
      
      input + label:after {
        content: "";
        position: absolute;
        display: block;
        height: 30px;
        width: 30px;
        top: 0;
        left: 0px;
        border-radius: 15px;
        background: white;
        box-shadow: inset 0 0 0 1px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.2);
        -moz-transition: .25s ease-in-out;
        -webkit-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
      }
      input:checked + label:before {
        width: 50px;
        background: ${Colors.Royal};
      }
      
      input:checked + label:after {
        left: 20px;
        box-shadow: inset 0 0 0 1px ${Colors.Royal}, 0 2px 4px rgba(0,0,0,.2);
      }
    `}</style>
  </React.Fragment>
)

Toggle.propTypes = {}
Toggle.defaultProps = {}

export default Toggle
