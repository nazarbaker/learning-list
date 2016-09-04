import React, { Component, PropTypes } from 'react'

// LearnItem component - represents a single learn item
export default class LearningItem extends Component {
  render() {
    return (
      <li>{ this.props.item.text }</li>
    )
  }
}

LearningItem.propTypes = {
  // This component gets the item to display through a React prop.
  // We can use propTypes to indicate it is required
  item: PropTypes.object.isRequired
}
