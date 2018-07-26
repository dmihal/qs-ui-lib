import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip'
import RcSliderCSS from 'rc-slider/assets/index.css'
import { Colors } from '../vars';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

class SlideBar extends Component {
  static propTypes = {
    max: PropTypes.number.isRequired,
    defaultValue: PropTypes.number,
    handleDrag: PropTypes.func
  }

  constructor(props) {
    super();
    // this.state = {
    //   value: props.SOMEPROP 
    // };
  }

  handleDrag = (sliderData) => {
    if(this.props.handleDrag) { this.props.handleDrag(sliderData) }

    const { value, dragging, index, ...restProps } = sliderData;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}>
        <Handle value={value} {...restProps} />
      </Tooltip>
    )
  }

  render() {
    return (
      <React.Fragment>
        <Slider min={0} max={this.props.max} defaultValue={this.props.defaultValue} handle={this.handleDrag} />
        <style jsx global>
          {RcSliderCSS}
        </style>
        <style jsx>{`
          :global(.rc-slider-handle) {
            border-color: ${Colors.White};
            border-width: 5px;
            box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
            background-color: ${Colors.Royal};
            margin-top: -10px;
            width: 24px;
            height: 24px;
            &:hover {
              border-color: ${Colors.PoloBlue};
            }
            &:active {
              border-color: white;
              box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
            }
          }
          :global(.rc-slider-track) {
            background-color: ${Colors.Royal};
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default SlideBar
