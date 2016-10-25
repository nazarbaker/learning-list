import React, { Component } from 'react'
import { Accounts } from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog'

// Task component - represents a single todo item
export default class Signup extends Component {
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

    Accounts.createUser({
      username: this.userNameInput.input.value,
      email: this.emailInput.input.value,
      password: this.passwordInput.input.value,
      profile: {
        likedItems: []
      }
    }, this.handleErrors)
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
        label = 'Signup'
        backgroundColor = '#35cd76'
        hoverColor = '#5db181'
        labelStyle = { buttonLabel }
        style = { buttonStyle }
        keyboardFocused = { true }
        type = 'submit'
        onTouchTap = { this.handleSubmit }
      />,
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
        title = 'Signup'
        actions = { actions }
        modal = { false }
        open = { this.state.open }
        onRequestClose = { this.handleClose }
        contentStyle = { dialogStyle }
        >
        <TextField
          floatingLabelText = 'Name'
          ref = { (ref) => this.userNameInput = ref }
          style = { textFieldStyle }
        />

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
