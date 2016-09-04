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

class TabTwo extends React.Component {
  render() {
    return (
      <div>
        <h2 style = { styles.headline }>Database Management Systems</h2>
        <div>
          •    MySQL<br />
          •    PostgreSQL<br />
          •    Sqlite<br />
          •    MongoDB<br />
          •    Redis<br />
          •    Kyoto Tycoon<br />
          •    Memcache<br />
          •    Amazon RDS<br />
        </div>
      </div>
    )
  }

}
export default TabTwo
