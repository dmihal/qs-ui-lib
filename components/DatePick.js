import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { Typography, Colors, MarginPaddingSize } from '../vars.js';
import 'react-datepicker/dist/react-datepicker.css';

const DatePick = ({ selected, handleChange, width }) => (
  <React.Fragment>
    <DatePicker selected={selected} onChange={handleChange}/>
    <style jsx>{`
      :global(.react-datepicker-wrapper) {width: ${width || '282px'};}
      :global(.react-datepicker) {
        border-radius: 0;
        border: 1px solid #c4cdd5;
      }
      :global(.react-datepicker__input-container) {width: 100%;}
      :global(.react-datepicker__input-container::after) {
        content: '';
        display: block;
        position: absolute;
        width: 17px;
        height: 16px;
        vertical-align: middle;
        content: '';
        background: ${ 'url(/' + require('../assets/calendar.svg') + ')'};
        left: calc(100% - 20px - 10px);
        bottom: 14px;
      }
      :global(.react-datepicker__input-container > *) {
        display: block;
        width: 100%;
        font-size: ${Typography.fontSize[3]};
        color: ${Colors.Mirage};
        border: solid 1px ${Colors.Gallery};
        border-color: ${ Colors.Gallery };
        padding: calc(${MarginPaddingSize[5]}) calc(${MarginPaddingSize[5]});
        outline: none;
        position: relative;
      }
      :global(.react-datepicker__header) {
        background: ${Colors.White};
        border-width: 1px;
        border-bottom-color: #c4cdd5;
      }
      :global(.react-datepicker__triangle){display: none;}
      :global(.react-datepicker-popper[data-placement^="bottom"]){margin-top: 0;}
      :global(.react-datepicker__month-container){}
      :global(.react-datepicker__month){margin: 0;}
      :global(.react-datepicker__navigation--previous){border-right-color: rgba(90, 106, 122, 1.0);}
      :global(.react-datepicker__navigation--next){border-left-color: rgba(90, 106, 122, 1.0);}
      :global(.react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name) {
        margin: 0;
        width: ${MarginPaddingSize[3]};
        height: ${MarginPaddingSize[3]};
        line-height: ${MarginPaddingSize[3]};
        font-size: ${Typography.fontSize[3]};
      }
      :global(.react-datepicker__day-name) {
        line-height: ${Typography.fontSize[4]};
        font-size: ${Typography.fontSize[4]};
        height: ${Typography.fontSize[3]};
      }
      :global(.react-datepicker__current-month){
        text-align: center;
        font-weight: normal;
        font-size: ${Typography.fontSize[3]};
        padding-bottom: 8px;
      }
      :global(.react-datepicker__day--keyboard-selected, .react-datepicker__day--keyboard-selected:hover) {
        border-radius: 0;
        background-color: ${Colors.Royal};
        font-weight: normal;
      }
      :global(.react-datepicker__day) {
        border-bottom: 1px solid #c4cdd5;
        border-right: 1px solid #c4cdd5;
      }
      :global(.react-datepicker__day:last-child) {
        border-right: 0;
      }
      :global(.react-datepicker__week:last-child .react-datepicker__day) {
        border-bottom: 0;
      }
      :global(.react-datepicker__day:hover) {
        border-radius: 0;
        font-weight: normal;
      }
      :global(.react-datepicker__navigation) {
        border-width: 0.35rem;
      }
      :global(.react-datepicker__day--outside-month){
        color: transparent !important;
      }
    `}</style>
  </React.Fragment>
)

DatePick.propTypes = {
  selected: PropTypes.func,
  handleChange: PropTypes.func,
}

DatePick.defaultProps = {}

export default DatePick