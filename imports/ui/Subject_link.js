import React, { Component, PropTypes } from 'react'
// material-ui
import Paper from 'material-ui/Paper'

export default class SubjectLink extends Component {

  render() {
    return (
      <Paper zDepth = { 2 } >
        <a href = { this.props.item.link } >{ this.props.item.description }</a>
        <div>{ this.props.item.rating }</div>
      </Paper>
    )
  }
}

SubjectLink.propTypes = {
  item: PropTypes.object.isRequired
}
