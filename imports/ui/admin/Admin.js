// React Dependencies
import React from 'react'
// Material-ui Dependencies
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
// connect database
import { LearningLanguages } from '../../api/learning_languages.js'
import { LearningDatabases } from '../../api/learning_databases.js'
import { LearningMethodologies } from '../../api/learning_methodologies.js'
import { LearningPlatforms } from '../../api/learning_platforms.js'

export default class Admin extends React.Component {
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

    if (this.state.value == 'languages') {
      LearningLanguages.insert({ text: this.topicInput.input.value })
    } else if (this.state.value == 'databases') {
      LearningDatabases.insert({ text: this.topicInput.input.value })
    } else if (this.state.value == 'methodologies') {
      LearningMethodologies.insert({ text: this.topicInput.input.value })
    } else if (this.state.value == 'platforms') {
      LearningPlatforms.insert({ text: this.topicInput.input.value })
    }
  }

  render() {
    return (
      <div>
        <h1>Admin Page</h1>

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
    )
  }
}
