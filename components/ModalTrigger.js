import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { Typography, Colors, MarginPaddingSize } from '../vars.mjs';

const ModalTrigger = ({ children, modalID }) => (
  <label htmlFor={'modal-trigger-' + modalID} className="toggleModal">
    {children}
    <style jsx>{`
      .toggleModal {
        cursor: pointer;
        text-align: center;
        border-width: 1px;
        border-style: solid;
        color: ${Colors.Royal};

        padding: 6px calc(${MarginPaddingSize[3]}/2);
        font-size: ${Typography.fontSize[3]};

        background: ${Colors.Royal};
        border-color: ${Colors.Royal};
        color: ${Colors.White};

        &:hover {
          background: ${Colors.PoloBlue};
          border-color: ${Colors.PoloBlue};
          color: ${Colors.White};
        }
        &:focus{
          outline: none;
        }
      } 
    `}</style>
  </label>
)

ModalTrigger.propTypes = {
  /**
   * Wrapper layout block
   */
  children: PropTypes.string.isRequired,
  /**
   * Wrapper layout block
   */
  modalID: PropTypes.string.isRequired
}

ModalTrigger.defaultProps = {}

export default ModalTrigger
