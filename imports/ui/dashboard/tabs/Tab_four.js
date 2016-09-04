import React, { Component, PropTypes } from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import { createContainer } from 'meteor/react-meteor-data'

// connect db
import { LearningPlatforms } from '../../../api/learning_platforms.js'

import LearningItem from '../Learning_item.js'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  }
}

class TabFour extends React.Component {
  // getLearnItem() {
  //   return [
  //     { _id: 1, text: 'Angular.js' },
  //     { _id: 2, text: 'Backbone.js' },
  //     { _id: 3, text: 'Bootstrap' },
  //     { _id: 4, text: 'Bower' },
  //     { _id: 5, text: 'Grunt' },
  //     { _id: 6, text: 'Gulp' },
  //     { _id: 7, text: 'Karma' },
  //     { _id: 8, text: 'Node.js' },
  //     { _id: 9, text: 'Material Design' },
  //     { _id: 10, text: 'React' },
  //     { _id: 11, text: 'Ruby on Rails' },
  //     { _id: 12, text: 'Webpack' }
  //   ]
  // }

  renderLearnItems() {
    return this.props.learningPlatforms.map((item) => (
      <LearningItem key = { item._id } item = { item } />
    ))
  }

  render() {
    return (
      <div>
        <h2 style={styles.headline}>Platforms / Frameworks / Tools</h2>
          <ul>
            { this.renderLearnItems() }
          </ul>
      </div>
    )
  }

}

TabFour.propTypes = {
  learningPlatforms: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    learningPlatforms: LearningPlatforms.find({}).fetch(),
  }
}, TabFour)
