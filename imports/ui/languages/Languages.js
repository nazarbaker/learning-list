import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

// material-ui
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

// connect db
import { LanguagesLinks } from '../../api/languages_links.js'

import LanguagesItem from '../Languages_item.js'

class Languages extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    // save link in db
    LanguagesLinks.insert({ type: this.props.language, link: this.linkInput.input.value, description: this.descriptionInput.input.value, rating: 0 })
  }

  renderLanguages() {
    return this.props.languagesLinks.map((item) => (
      <LanguagesItem key = { item._id } item = { item } />
    ))
  }

  render() {
    return (
      <div>
        <h1>{ this.props.language }</h1>

        <form onSubmit = { this.handleSubmit } >
          <TextField
            floatingLabelText = 'add link'
            ref = { (ref) => this.linkInput = ref }
          />
          <br />
          <TextField
            floatingLabelText  = 'Description'
            ref = { (ref) => this.descriptionInput = ref }
          />
          <br />
          <FlatButton
            type = 'submit'
            label = 'Create'
            primary = { true }/>
        </form>

        { this.renderLanguages() }
      </div>
    )
  }
}

Languages.propTypes = {
  languagesLinks: PropTypes.array.isRequired,
};

export default createContainer(() => {
  const language = FlowRouter.getParam('language');

  return {
    languagesLinks: LanguagesLinks.find({type: language}).fetch()
  }
}, Languages)
