import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  }
}

class TabThree extends React.Component {
  render() {
    return (
      <div>
        <h2 style = { styles.headline }>Methodologies</h2>
        <div>
          •    Agile, SCRUM<br />
          •    TDD, BDD<br />
          •    Dry<br />
          •    KISS<br />
          •    FDD<br />
          •    12 Factor Application<br />
        </div>
      </div>
    )
  }

}
export default TabThree
