import { Meteor } from 'meteor/meteor'

import React from 'react'
import ReactDOM from 'react-dom'
import { createContainer } from 'meteor/react-meteor-data'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

// App Components
import Login from './accounts/Login'
import Signup from './accounts/Signup'

// Tap Events Hack
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

// styles
import { styles } from './assets/styles'

// App component - represents the whole app
class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleLogout = this.handleLogout.bind(this)
    this.handleLoginOpen = this.handleLoginOpen.bind(this)
    this.handleSignupOpen = this.handleSignupOpen.bind(this)
  }

  handleLogout() {
    Meteor.logout()
  }

  handleLoginOpen() {
    console.log(this.props.currentUser)
    this.refs.login.setState({ open: true })
  }

  handleSignupOpen() {
    this.refs.signup.setState({ open: true })
  }

  render() {
    console.log(this.props.currentUser)
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title = 'Title'
            iconElementLeft = { <IconButton><NavigationClose /></IconButton> }
            iconElementRight = {
              <div style = { styles.menuWrapper }>
                { this.props.currentUser ?
                <div style = { styles.userName }>
                  <span className="user-name">{this.props.currentUser.username}</span>
                </div>
                :
                <div></div>
                }

                <IconMenu
                  iconButtonElement = {
                    <IconButton><MoreVertIcon /></IconButton>
                  }
                  targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                >
                  { this.props.currentUser ?
                    <MenuItem primaryText = 'Logout' onTouchTap = { this.handleLogout }/>
                    :
                    <div>
                      <MenuItem primaryText = 'Login'  onTouchTap = { this.handleLoginOpen } />
                      <MenuItem primaryText = 'Signup' onTouchTap = { this.handleSignupOpen } />
                    </div>
                  }
                </IconMenu>
              </div>
            }
          />
          <div id="render-target">{ this.props.content }</div>

          <Login ref = 'login' />
          <Signup ref = 'signup' />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default createContainer(() => {
  return {
    currentUser: Meteor.user()
  }
}, App)
