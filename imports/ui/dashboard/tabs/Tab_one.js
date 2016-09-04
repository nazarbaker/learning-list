import React, { Component, PropTypes } from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import { createContainer } from 'meteor/react-meteor-data'

// connect db
import { LearningLanguages } from '../../../api/learning_languages.js'

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
  // getLearnItem() {
  //   return [
  //     { _id: 1, text: 'JavaScript' },
  //     { _id: 2, text: 'HTML' },
  //     { _id: 3, text: 'CSS' },
  //     { _id: 4, text: 'Php' },
  //     { _id: 5, text: 'Ruby' }
  //   ]
  // }

  renderLearnItems() {
    return this.props.learningLanguages.map((item) => (
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
  learningLanguages: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    learningLanguages: LearningLanguages.find({}).fetch(),
  }
}, TabOne)
