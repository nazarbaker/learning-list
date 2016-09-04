import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'

import LearningItem from '../Learning_item.js'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  }
}

class TabThree extends React.Component {
  getLearnItem() {
    return [
      { _id: 1, text: 'Agile, SCRUM' },
      { _id: 2, text: 'TDD, BDD' },
      { _id: 3, text: 'Dry' },
      { _id: 4, text: 'KISS' },
      { _id: 5, text: 'FDD' },
      { _id: 6, text: '12 Factor Application' }
    ]
  }

  renderLearnItems() {
    return this.getLearnItem().map((item) => (
      <LearningItem key = { item._id } item = { item } />
    ))
  }

  render() {
    return (
      <div>
        <h2 style = { styles.headline }>Methodologies</h2>
        <ul>
          { this.renderLearnItems() }
        </ul>
      </div>
    )
  }

}
export default TabThree
