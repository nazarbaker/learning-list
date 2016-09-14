import React, { Component } from 'react'

import { Meteor } from 'meteor/meteor'

// material-ui
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

// Task component - represents a single todo item
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleErrors = this.handleErrors.bind(this)
  }

  handleClose() {
    this.setState({ open: false })
  }

  handleSubmit(event) {
    event.preventDefault()

    const email = this.emailInput.input.value
    const password = this.passwordInput.input.value

    Meteor.loginWithPassword(email, password, this.handleErrors)
  }

  handleErrors(error) {
    if (error){
      alert(error.reason)
      Meteor.logout()
    } else {
      this.setState({ open: false })
    }
  }

  render() {

    const buttonStyle = {
      marginRight: 16
    }

    const buttonLabel = {
      color: 'white'
    }

    const cancelLabel = {
      color: '#f85252'
    }

    const actions = [
      <FlatButton
        label = 'Cancel'
        labelStyle = { cancelLabel }
        style = { buttonStyle }
        hoverColor = '#d4d4d4'
        onTouchTap = { this.handleClose }
      />,
      <FlatButton
        label = 'Login'
        backgroundColor = '#35cd76'
        hoverColor = '#5db181'
        labelStyle = { buttonLabel }
        style = { buttonStyle }
        keyboardFocused = { true }
        type = 'submit'
        onTouchTap = { this.handleSubmit }
      />
    ]

    const textFieldStyle = {
      display: 'block',
      margin: 'auto auto'
    }

    const dialogStyle = {
      maxWidth: 450
    }

    return (
      <Dialog
        title = 'Login'
        actions = { actions }
        modal = { false }
        open = { this.state.open }
        onRequestClose = { this.handleClose }
        contentStyle = { dialogStyle }
        >
        <TextField
          floatingLabelText = 'Email'
          type = 'email'
          ref = { (ref) => this.emailInput = ref }
          style = { textFieldStyle }
        />

        <TextField
          floatingLabelText = 'Password'
          type = 'password'
          ref = { (ref) => this.passwordInput = ref }
          style = { textFieldStyle }
        />
      </Dialog>
    )
  }
}
