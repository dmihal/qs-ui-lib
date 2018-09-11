import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

class Tabs extends Component {
  static propTypes = {
    /*
    * Tab value list
    */
    tabList: PropTypes.array.isRequired,
    /*
    * Default Active
    */
    defaultActiveTab: PropTypes.string,
    /*
    * Event handler
    */
    handleSelection: PropTypes.func.isRequired
  }

  constructor(props) {
    super()    
    this.state = {
      activeTab: props.defaultActiveTab || ''
    }
  }

  handleClick = (e,tabitemClick) => {
    this.setState({activeTab: tabitemClick})
    
    if(this.props.handleSelection) {
      this.props.handleSelection(tabitemClick)
    }
  }

  render() {
    return (
      <div className="Tabs">
        {
          this.props.tabList.map((tabItem) => {
            return (
              <div
                className="ref-wrapper"
                key={tabItem + Math.random()}>
                <Button
                  activeHighlight={this.state.activeTab === tabItem}  
                  onClick={(someVal) => {this.handleClick(someVal, tabItem)}}>
                  {tabItem}
                </Button>
              </div>
            )
          })  
        }
        <style jsx>{`
          .Tabs {display: flex;}
        `}</style>
      </div>
    )
  }
}

export default Tabs