import React, { Component, PropTypes } from 'react'

import { createContainer } from 'meteor/react-meteor-data'

// connect db
import { LearningLanguages } from '../../api/learning_languages.js'

import LanguagesItem from '../Languages_item.js'

const param = {
  id: undefined
}

class Languages extends Component {
  constructor(props) {
    super(props)
    param.id = this.props.id
  }

  renderLanguages() {
    return this.props.learningLanguages.map((item) => (
      <LanguagesItem key = { item._id } item = { item } />
    ))
  }

  render() {
    return (
      <div>
        { this.renderLanguages() }
      </div>
    )
  }
}

Languages.propTypes = {
  learningLanguages: PropTypes.array.isRequired,
};

export default createContainer(() => {
  const language = FlowRouter.getParam('language');

  return {
    learningLanguages: LearningLanguages.find({text: language}).fetch(),
  }
}, Languages)
