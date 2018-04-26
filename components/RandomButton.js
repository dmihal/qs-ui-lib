import React, { Component } from 'react';
import PropTypes from 'prop-types';

import sample from 'lodash/sample'; // randomization function

 /**
 * This is an complex button that has "state"
 * The button will change it's text on every click.
 */
export default class RandomButton extends Component {
  static propTypes = {
    /**
     * List of possible texts.
     */
    variants: PropTypes.array.isRequired,
  };

  constructor(props) {
    super();
    this.state = {
      text: sample(props.variants),
    };
  }

  handleClick() {
    this.setState({
      text: sample(this.props.variants),
    });
  }

  render() {
    return (
      <button 
        className="random-button"
        onClick={this.handleClick.bind(this)}>
        {this.state.text}
        <style jsx>{`
          .random-button {
            padding: .5em 1.5em;
            color: #666;
            background-color: #fff;
            border: 1px solid currentColor;
            border-radius: .3em;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
          }
        `}</style>
      </button>
    );
  }
}
