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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    // save link in db
    SubjectLinks.insert({ type: this.props.subject, link: this.linkInput.input.value, description: this.descriptionInput.input.value, rating: 0 })
  }

  renderLanguages() {
    return this.props.subjectLinks.map((item) => (
      <SubjectLink key = { item._id } item = { item } />
    ))
  }

  render() {
    return (
      <div>
        <h1>{ this.props.subject }</h1>

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

Subject.propTypes = {
  subjectLinks: PropTypes.array.isRequired,
};

export default createContainer(() => {
  const subject = FlowRouter.getParam('subject');

  return {
    subjectLinks: SubjectLinks.find({type: subject}).fetch()
  }
}, Subject)
