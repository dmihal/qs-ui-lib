import React, { Component } from "react";
import PropTypes from "prop-types";

import Slider from "rc-slider";
import Tooltip from "rc-tooltip";
import { Colors } from "../vars";

const Handle = Slider.Handle;

class SlideBar extends Component {
  static propTypes = {
    /*
    * Max value
    */
    max: PropTypes.number.isRequired,
    /*
    * Default value
    */
    defaultValue: PropTypes.number,
    /*
    * Event Handler
    */
    handleDrag: PropTypes.func
  };

  constructor(props) {
    super();
  }

  handleDrag = sliderData => {
    if (this.props.handleDrag) {
      this.props.handleDrag(sliderData);
    }

    const { value, dragging, index, ...restProps } = sliderData;

    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Slider
          min={0}
          max={this.props.max}
          defaultValue={this.props.defaultValue}
          handle={this.handleDrag}
        />
        <style jsx global>{`
          .rc-slider {
            position: relative;
            height: 14px;
            padding: 5px 0;
            width: 100%;
            border-radius: 6px;
            -ms-touch-action: none;
            touch-action: none;
            box-sizing: border-box;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
          .rc-slider * {
            box-sizing: border-box;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
          .rc-slider-rail {
            position: absolute;
            width: 100%;
            background-color: #e9e9e9;
            height: 4px;
            border-radius: 6px;
          }
          .rc-slider-track {
            position: absolute;
            left: 0;
            height: 4px;
            border-radius: 6px;
            background-color: #abe2fb;
          }
          .rc-slider-handle {
            position: absolute;
            margin-left: -7px;
            margin-top: -5px;
            width: 14px;
            height: 14px;
            cursor: pointer;
            cursor: -webkit-grab;
            cursor: grab;
            border-radius: 50%;
            border: solid 2px #96dbfa;
            background-color: #fff;
            -ms-touch-action: pan-x;
            touch-action: pan-x;
          }
          .rc-slider-handle:hover {
            border-color: #57c5f7;
          }
          .rc-slider-handle:active {
            border-color: #57c5f7;
            box-shadow: 0 0 5px #57c5f7;
            cursor: -webkit-grabbing;
            cursor: grabbing;
          }
          .rc-slider-handle:focus {
            border-color: #57c5f7;
            box-shadow: 0 0 0 5px #96dbfa;
            outline: none;
          }
          .rc-slider-mark {
            position: absolute;
            top: 18px;
            left: 0;
            width: 100%;
            font-size: 12px;
          }
          .rc-slider-mark-text {
            position: absolute;
            display: inline-block;
            vertical-align: middle;
            text-align: center;
            cursor: pointer;
            color: #999;
          }
          .rc-slider-mark-text-active {
            color: #666;
          }
          .rc-slider-step {
            position: absolute;
            width: 100%;
            height: 4px;
            background: transparent;
          }
          .rc-slider-dot {
            position: absolute;
            bottom: -2px;
            margin-left: -4px;
            width: 8px;
            height: 8px;
            border: 2px solid #e9e9e9;
            background-color: #fff;
            cursor: pointer;
            border-radius: 50%;
            vertical-align: middle;
          }
          .rc-slider-dot-active {
            border-color: #96dbfa;
          }
          .rc-slider-disabled {
            background-color: #e9e9e9;
          }
          .rc-slider-disabled .rc-slider-track {
            background-color: #ccc;
          }
          .rc-slider-disabled .rc-slider-handle,
          .rc-slider-disabled .rc-slider-dot {
            border-color: #ccc;
            box-shadow: none;
            background-color: #fff;
            cursor: not-allowed;
          }
          .rc-slider-disabled .rc-slider-mark-text,
          .rc-slider-disabled .rc-slider-dot {
            cursor: not-allowed !important;
          }
          .rc-slider-vertical {
            width: 14px;
            height: 100%;
            padding: 0 5px;
          }
          .rc-slider-vertical .rc-slider-rail {
            height: 100%;
            width: 4px;
          }
          .rc-slider-vertical .rc-slider-track {
            left: 5px;
            bottom: 0;
            width: 4px;
          }
          .rc-slider-vertical .rc-slider-handle {
            margin-left: -5px;
            margin-bottom: -7px;
            -ms-touch-action: pan-y;
            touch-action: pan-y;
          }
          .rc-slider-vertical .rc-slider-mark {
            top: 0;
            left: 18px;
            height: 100%;
          }
          .rc-slider-vertical .rc-slider-step {
            height: 100%;
            width: 4px;
          }
          .rc-slider-vertical .rc-slider-dot {
            left: 2px;
            margin-bottom: -4px;
          }
          .rc-slider-vertical .rc-slider-dot:first-child {
            margin-bottom: -4px;
          }
          .rc-slider-vertical .rc-slider-dot:last-child {
            margin-bottom: -4px;
          }
          .rc-slider-tooltip-zoom-down-enter,
          .rc-slider-tooltip-zoom-down-appear {
            animation-duration: 0.3s;
            animation-fill-mode: both;
            display: block !important;
            animation-play-state: paused;
          }
          .rc-slider-tooltip-zoom-down-leave {
            animation-duration: 0.3s;
            animation-fill-mode: both;
            display: block !important;
            animation-play-state: paused;
          }
          .rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,
          .rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {
            animation-name: rcSliderTooltipZoomDownIn;
            animation-play-state: running;
          }
          .rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {
            animation-name: rcSliderTooltipZoomDownOut;
            animation-play-state: running;
          }
          .rc-slider-tooltip-zoom-down-enter,
          .rc-slider-tooltip-zoom-down-appear {
            transform: scale(0, 0);
            animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
          }
          .rc-slider-tooltip-zoom-down-leave {
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
          }
          @keyframes rcSliderTooltipZoomDownIn {
            0% {
              opacity: 0;
              transform-origin: 50% 100%;
              transform: scale(0, 0);
            }
            100% {
              transform-origin: 50% 100%;
              transform: scale(1, 1);
            }
          }
          @keyframes rcSliderTooltipZoomDownOut {
            0% {
              transform-origin: 50% 100%;
              transform: scale(1, 1);
            }
            100% {
              opacity: 0;
              transform-origin: 50% 100%;
              transform: scale(0, 0);
            }
          }
          .rc-slider-tooltip {
            position: absolute;
            left: -9999px;
            top: -9999px;
            visibility: visible;
            box-sizing: border-box;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
          .rc-slider-tooltip * {
            box-sizing: border-box;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
          .rc-slider-tooltip-hidden {
            display: none;
          }
          .rc-slider-tooltip-placement-top {
            padding: 4px 0 8px 0;
          }
          .rc-slider-tooltip-inner {
            padding: 6px 2px;
            min-width: 24px;
            height: 24px;
            font-size: 12px;
            line-height: 1;
            color: #fff;
            text-align: center;
            text-decoration: none;
            background-color: #6c6c6c;
            border-radius: 6px;
            box-shadow: 0 0 4px #d9d9d9;
          }
          .rc-slider-tooltip-arrow {
            position: absolute;
            width: 0;
            height: 0;
            border-color: transparent;
            border-style: solid;
          }
          .rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
            bottom: 4px;
            left: 50%;
            margin-left: -4px;
            border-width: 4px 4px 0;
            border-top-color: #6c6c6c;
          }
        `}</style>
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

export default SlideBar;
