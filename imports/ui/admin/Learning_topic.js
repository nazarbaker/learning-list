import React, { Component, PropTypes } from 'react'
// connect database
import { LearningTopics } from '../../api/learning_topics.js'
// styles
import { styles } from './assets/styles.js'

export default class LearningTopic extends Component {

  deleteThisTopic() {
    LearningTopics.remove(this.props.item._id);
  }

  render() {
    return (
      <li style = { styles.linkWrapper }>
        <a
          href = { this.props.item.topic + '/' + this.props.item.subject }
          target = '_blank'
          >
          { this.props.item.subject }
        </a>
        <button onClick = { this.deleteThisTopic.bind(this) } >
          &times;
        </button>
      </li>
    )
  }
}

LearningTopic.propTypes = {
  item: PropTypes.object.isRequired
}
