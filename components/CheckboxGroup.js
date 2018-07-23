import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Colors, MarginPaddingSize } from '../vars.js';

const CheckboxGroup = ({ nameID, options, error }) => (
  <React.Fragment>
    <form>
      {
        options.map((option, index)=> {
          return (
            <div
              key={option.label+index}
              className={
                  "checkbox-choice-wrap" +
                  (option.disabled ? ' disabled' : '' ) +
                  (option.deactive ? ' deactive' : '' ) +
                  (option.error ? ' error' : '' )}>
                <input type="checkbox" id={option.label+index+nameID} name={nameID} disabled={option.disabled || option.error}/>
                <label htmlFor={option.label+index+nameID}>{option.label}</label>
            </div>
          )
        })
      }
    </form>
    <style jsx>{`
      .checkbox-choice-wrap {
          margin-bottom: ${MarginPaddingSize[4]};

          &.disabled {
            input:checked + label:before,
            input:not(:checked) + label:before {
              cursor: not-allowed;
            }
          }
          &.deactive label::after {
            filter: saturate(0%) opacity(20%);
          }
          &.error {
            input:checked + label:before,
            input:not(:checked) + label:before {
              border: 1px solid ${Colors.Cinnabar};
              background: rgba(227, 66, 52, 0.1);
              cursor: not-allowed;
            }
            input:checked + label:after,
            input:not(:checked) + label:after {
              background-image: ${ 'url(/' + require('../assets/icons/icon-check.svg') + ')' };
            }
        }
      }
      [type="checkbox"] {
        &:checked,
        &:not(:checked) {
          position: absolute;
          left: -9999px;
        }
        &:checked + label,
        &:not(:checked) + label {
          position: relative;
          padding-left: 28px;
          cursor: pointer;
          line-height: 20px;
          display: inline-block;
          color: #666;
        }
        &:checked + label:before,
        &:not(:checked) + label:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 16px;
          height: 16px;
          border: 1px solid #ddd;
          border-radius: 2px;
          background: #fff;
        }
        &:checked + label:after,
        &:not(:checked) + label:after {
          content: '';
          width: 11px;
          height: 9px;
          position: absolute;
          top: 4px;
          left: 3px;
          border-radius: 100%;
          -webkit-transition: all 0.2s ease;
          transition: all 0.2s ease;
          background-image: ${ error ? 'none' : 'url(/' + require('../assets/icons/icon-check.svg') + ')' };
        }
        &:not(:checked) + label:after {
          opacity: 0;
          -webkit-transform: scale(0);
          transform: scale(0);
        }
        &:checked + label:after {
          opacity: 1;
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      }
    `}</style>
  </React.Fragment>
)

CheckboxGroup.propTypes = {
  /**
   * Field label
   */
  nameID: PropTypes.string.isRequired,
  /**
   * checkbox ID
   */
  options: PropTypes.array.isRequired,
  /**
   * Error
   */
  error: PropTypes.bool,
  /**
   * Disabled 
   */
  disabled: PropTypes.bool,
}

CheckboxGroup.defaultProps = {}

export default CheckboxGroup
