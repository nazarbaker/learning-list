import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'

import LearnItem from '../Learn_item.js'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  }
}

class TabTwo extends React.Component {
  getLearnItem() {
    return [
      { _id: 1, text: 'MySQL' },
      { _id: 2, text: 'PostgreSQL' },
      { _id: 3, text: 'Sqlite' },
      { _id: 4, text: 'MongoDB' },
      { _id: 5, text: 'Redis' },
      { _id: 6, text: 'Amazon RDS' }
    ]
  }

  renderLearnItems() {
    return this.getLearnItem().map((item) => (
      <LearnItem key = { item._id } item = { item } />
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
export default TabTwo
