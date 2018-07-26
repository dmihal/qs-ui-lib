import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import ReactSelect from 'react-select/dist/react-select.css';
import { MarginPaddingSize, Colors } from '../vars.js';

class SelectDropDown extends React.Component {
  constructor () {
    super();
    this.state = {
      selectedOption: '',
    }
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption })

    if(this.props.handleChange) {
      this.props.handleChange(selectedOption)
    }
    
		// selectedOption can be null when the `x` (close) button is clicked
		// if (selectedOption) {
    // 	console.log(`Selected: ${selectedOption.label}`);
		// }
  }
  render() {
  	const { selectedOption } = this.state;

    return (
      <React.Fragment>
        <Select
          name={name}
          value={selectedOption}
          onChange={this.handleChange}
          options={[
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
          ]}
        />
        <style jsx global>
          {ReactSelect}
        </style>
        <style jsx>{`
          :global(.Select-control) {
            height: ${MarginPaddingSize[5]};
            border-radius: 2px;
            background-image: linear-gradient(to bottom, #ffffff, #f9fafb);
            border: solid 1px #c4cdd5;
          }
          :global(.Select-menu-outer > *) {
            background-image: linear-gradient(to bottom, #ffffff, #f9fafb);
          }
          :global(.Select-menu-outer > * > *) {
            background-color: transparent;
          }
          :global(.Select-placeholder) {
            color: ${Colors.Mirage};
          }
          :global(.Select-menu-outer *) {
            color: ${Colors.Mirage};
          }
          :global(.Select--multi .Select-value-icon:hover) {
            background-color: inherit;
            color: ${Colors.Royal};
          }
          :global(.Select--multi .Select-value-icon:focus) {
            background-color: inherit;
            color: ${Colors.Royal};
          }
        `}
        </style>
      </React.Fragment>
    );
  }
}

SelectDropDown.propTypes = {
  name: PropTypes.string,
  handleChange: PropTypes.func,
  options: PropTypes.array
}

SelectDropDown.defaultProps = {}

export default SelectDropDown