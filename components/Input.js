import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Colors, MarginPaddingSize } from '../vars.js';

const Input = ({ label, placeholder, search, required, error, disabled }) => (
  <div className="input-wrapper">
    { label ? <label>{label} {required ? '*' : null }</label> : null }
    { error ? <label className="error">{error}</label> : null }
    <input type="text" placeholder={placeholder} disabled={disabled}/>
    <style jsx>{`
      .input-wrapper {
        border-radius: 2px;
        background-color: #ffffff;
        display: inline-block;
        min-width: 100px;
        position: relative;
        padding-bottom: calc(${MarginPaddingSize[4]}/2);

        label {
          display: block;
          font-size: ${Typography.fontSize[4]};
          color: ${Colors.Slate};
          margin-bottom: calc(${MarginPaddingSize[5]}/2);

          &.error {
            color: ${Colors.Cinnabar}
          }
        }
        
        input {
          display: block;
          width: 100%;
          font-size: ${Typography.fontSize[3]};
          color: ${ error ? Colors.Cinnabar : Colors.Mirage};
          border: solid 1px ${Colors.Gallery};
          border-color: ${ error ? Colors.Cinnabar : Colors.Gallery };
          padding: calc(${MarginPaddingSize[5]}) calc(${MarginPaddingSize[5]});
          outline: none;
          position: relative;

          &::placeholder {
            color: ${Colors.Gallery};
          }

          &:active, 
          &:focus {
            border: solid 1px ${Colors.Royal};
            border-color: ${ error ? Colors.Cinnabar : Colors.Gallery };  
          }
        }

        ::after {
          display: block;
          vertical-align: middle;
          content: '';
          background: ${ search ? 'url(/' + require('../assets/search.svg') + ')' : null };
          width: 14px;
          height: 14px;
          position: absolute;
          left: calc(100% - 20px - 5px);
          bottom: 24px;
        }

      }
    `}</style>
  </div>
)

Input.propTypes = {
  /**
   * Field label
   */
  label: PropTypes.string,
  /**
   * PlaceHolder
   */
  placeholder: PropTypes.string,
  /**
   * Search Icon
   */
  search: PropTypes.bool,
  /**
   * Required? (*)
   */
  required: PropTypes.bool,
  /**
   * Error 
   */
  error: PropTypes.string,
  /**
   * Disabled 
   */
  disabled: PropTypes.bool,
}

Input.defaultProps = {}

export default Input