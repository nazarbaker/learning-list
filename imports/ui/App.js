import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

// App component - represents the whole app
export default class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
        <AppBar
            title="Title"
        />
      </MuiThemeProvider>
    );
  }
}
