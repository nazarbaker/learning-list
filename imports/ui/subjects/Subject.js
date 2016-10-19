import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

// material-ui
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

// connect db
import { SubjectLinks } from '../../api/subject_links.js'
// components
import SubjectLink from './Subject_link.js'
// styles
import styles from './assets/styles.js'

class Subject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      linkError: '',
      descriptionError: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteErrors = this.deleteErrors.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.linkInput.input.value && this.descriptionInput.input.value) {
      // save link in db
      SubjectLinks.insert({
        type: this.props.subject,
        link: this.linkInput.input.value,
        description: this.descriptionInput.input.value,
        createdBy: this.props.currentUser,
        rating: 0
      })
      this.linkInput.input.value = null
      this.descriptionInput.input.value = null
    } else {
      this.setState({
        linkError: this.linkInput.input.value ? '' : 'This field is required.',
        descriptionError: this.descriptionInput.input.value ? '' : 'This field is required.'
      });
    }
  }

  deleteErrors() {
    this.setState({
      linkError: '',
      descriptionError: ''
    });
  }

  renderLanguages() {
    return this.props.subjectLinks.map((item) => (
      <SubjectLink key = { item._id } item = { item } currentUser = { this.props.currentUser }/>
    ))
  }

  render() {
    return (
      <div>
        <h1>{ this.props.subject }</h1>

        { this.props.currentUser ?
        <form onSubmit = { this.handleSubmit } >
          <TextField
            floatingLabelText = 'add link'
            ref = { (ref) => this.linkInput = ref }
            errorText = { this.state.linkError }
            onFocus = { this.deleteErrors }
          />
          <br />
          <TextField
            floatingLabelText  = 'Description'
            ref = { (ref) => this.descriptionInput = ref }
            errorText = { this.state.descriptionError }
            onFocus = { this.deleteErrors }
          />
          <br />
          <FlatButton
            type = 'submit'
            label = 'Create'
            primary = { true }
          />
        </form>
        :
        <div></div>
        }

        { this.renderLanguages() }
      </div>
    )
  }
}

Subject.propTypes = {
  subjectLinks: PropTypes.array.isRequired,
};

export default createContainer(() => {
  const subject = FlowRouter.getParam('subject');

  return {
    subjectLinks: SubjectLinks.find({type: subject}, { sort: { rating: -1 } }).fetch(),
    currentUser: Meteor.user()
  }
}, Subject)
