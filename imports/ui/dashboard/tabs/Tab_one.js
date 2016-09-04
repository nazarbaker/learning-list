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

class TabOne extends React.Component {
  render() {
    return (
      <div>
        <h2 style = { styles.headline }>Languages / Technologies</h2>
        <div>
          •    Technical Documentation<br />
          •    Ruby<br />
          •    SASS/LESS<br />
          •    Php<br />
          •    JavaScript<br />
          •    RegEx<br />
          •    XML<br />
          •    SQL<br />
          •    HTML<br />
          •    HTML5<br />
          •    CSS<br />
          •    CSS3<br />
        </div>
      </div>
    )
  }

}
export default TabOne
