import React, { Component, PropTypes } from 'react'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentSend from 'material-ui/svg-icons/content/send'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import ActionInfo from 'material-ui/svg-icons/action/info'

// just example ;)
export default class LanguagesItem extends Component {

  render() {
    return (
      <Paper zDepth = { 2 } >
        <a href = { this.props.item.link } >{ this.props.item.description }</a>
        <div>{ this.props.item.rating }</div>
      </Paper>
    )
  }
}

LanguagesItem.propTypes = {
  item: PropTypes.object.isRequired
}
