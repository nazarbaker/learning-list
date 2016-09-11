import React, { Component, PropTypes } from 'react'

// LearnItem component - represents a single learn item
export default class LearningItem extends Component {
  render() {
    return (
      <li>
        <a href = { this.props.item.topic + '/' + this.props.item.name }>
          { this.props.item.name }
        </a>
      </li>
    )
  }
}

LearningItem.propTypes = {
  // This component gets the item to display through a React prop.
  // We can use propTypes to indicate it is required
  item: PropTypes.object.isRequired
}
