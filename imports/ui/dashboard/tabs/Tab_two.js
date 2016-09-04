import React, { Component, PropTypes } from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import { createContainer } from 'meteor/react-meteor-data'

// connect db
import { LearningDatabases } from '../../../api/learning_databases.js'

import LearningItem from '../Learning_item.js'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  }
}

class TabTwo extends React.Component {
  // getLearnItem() {
  //   return [
  //     { _id: 1, text: 'MySQL' },
  //     { _id: 2, text: 'PostgreSQL' },
  //     { _id: 3, text: 'Sqlite' },
  //     { _id: 4, text: 'MongoDB' },
  //     { _id: 5, text: 'Redis' },
  //     { _id: 6, text: 'Amazon RDS' }
  //   ]
  // }

  renderLearnItems() {
    return this.props.learningDatabases.map((item) => (
      <LearningItem key = { item._id } item = { item } />
    ))
  }

  render() {
    return (
      <div>
        <h2 style = { styles.headline }>Database Management Systems</h2>
        <ul>
          { this.renderLearnItems() }
        </ul>
      </div>
    )
  }

}

TabTwo.propTypes = {
  learningDatabases: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    learningDatabases: LearningDatabases.find({}).fetch(),
  }
}, TabTwo)
