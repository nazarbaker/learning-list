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

class TabFour extends React.Component {
  getLearnItem() {
    return [
      { _id: 1, text: 'Angular.js' },
      { _id: 2, text: 'Backbone.js' },
      { _id: 3, text: 'Bootstrap' },
      { _id: 4, text: 'Bower' },
      { _id: 5, text: 'Grunt' },
      { _id: 6, text: 'Gulp' },
      { _id: 7, text: 'Karma' },
      { _id: 8, text: 'Node.js' },
      { _id: 9, text: 'Material Design' },
      { _id: 10, text: 'React' },
      { _id: 11, text: 'Ruby on Rails' },
      { _id: 12, text: 'Webpack' }
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
        <h2 style={styles.headline}>Platforms / Frameworks / Tools</h2>
          <ul>
            { this.renderLearnItems() }
          </ul>
      </div>
    )
  }

}
export default TabFour
