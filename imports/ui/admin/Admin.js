// React Dependencies
import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'
// Material-ui Dependencies
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
// connect database
import { LearningTopics } from '../../api/learning_topics.js'
// components
import LearningTopic from './Learning_topic.js'

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'languages'
    }
    this.setLearningTopic = this.setLearningTopic.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  setLearningTopic (event, value) {
    this.setState({
      value: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    LearningTopics.insert({ topic: this.state.value, subject: this.topicInput.input.value })
  }

  renderLearnItems() {
    return this.props.learningTopics.map((item) => (
      <LearningTopic key = { item._id } item = { item } />
    ))
  }

  render() {
    return (
      <div>
        <h1>Admin Page</h1>

        <div>
          <RadioButtonGroup
            name = 'learningTopic'
            onChange = { this.setLearningTopic }
            defaultSelected = 'languages'
            >
            <RadioButton
              value = 'languages'
              label = 'Languages / Technologies'
            />
            <RadioButton
              value = 'databases'
              label = 'Database Management Systems'
            />
            <RadioButton
              value = 'methodologies'
              label = 'Methodologies'
            />
            <RadioButton
              value = 'platforms'
              label = 'Platforms / Frameworks / Tools'
            />
          </RadioButtonGroup>

          <form onSubmit = { this.handleSubmit } >
            <TextField
              floatingLabelText = 'add topic'
              ref = { (ref) => this.topicInput = ref }
            />
            <FlatButton
              type = 'submit'
              label = 'Create'
              primary = { true }/>
          </form>
        </div>
        <div>
          { this.renderLearnItems() }
        </div>
      </div>
    )
  }
}

Admin.propTypes = {
  learningTopics: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    learningTopics: LearningTopics.find({}).fetch(),
  }
}, Admin)
