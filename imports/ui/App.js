import React from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

// Tap Events Hack
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

// App component - represents the whole app
export default class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
              title="Title"
          />
          <div id="render-target">{ this.props.content }</div>
        </div>
      </MuiThemeProvider>
    )
  }
}
