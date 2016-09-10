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
      <Paper
        zDepth = { 2 }
        >
        <List>
          <ListItem primaryText={this.props.item.text} leftIcon={<ContentInbox />} />
          <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
          <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
          <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
          <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
        </List>
        <Divider />
        <List>
          <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
          <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
          <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
          <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
        </List>
      </Paper>
    )
  }
}

LanguagesItem.propTypes = {
  item: PropTypes.object.isRequired
}
