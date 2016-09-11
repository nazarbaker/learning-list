import React, { Component, PropTypes } from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import { createContainer } from 'meteor/react-meteor-data'

// connect db
import { LearningTopics } from '../../../api/learning_topics.js'

import LearningItem from '../Learning_item.js'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
}

class TabOne extends Component {

  renderLearnItems() {
    return this.props.learningTopics.map((item) => (
      <LearningItem key = { item._id } item = { item } />
    ))
  }

  render() {
    return (
      <div>
        <h2 style = { styles.headline }>Languages / Technologies</h2>
        <ul>
          { this.renderLearnItems() }
        </ul>
      </div>
    )
  }
}

TabOne.propTypes = {
  learningTopics: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    learningTopics: LearningTopics.find({topic: 'languages'}).fetch(),
  }
}, TabOne)
