import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'

import LearnItem from '../Learn_item.js'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
}

class TabOne extends React.Component {
  getLearnItem() {
    return [
      { _id: 1, text: 'JavaScript' },
      { _id: 2, text: 'HTML' },
      { _id: 3, text: 'CSS' },
      { _id: 4, text: 'Php' },
      { _id: 5, text: 'Ruby' }
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
        <h2 style = { styles.headline }>Languages / Technologies</h2>
        <ul>
          { this.renderLearnItems() }
        </ul>
      </div>
    )
  }

}
export default TabOne
