import React, { Component, PropTypes } from 'react'

import { Meteor } from 'meteor/meteor'

// material-ui
import Paper from 'material-ui/Paper'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentRemove from 'material-ui/svg-icons/content/remove'
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

// connect db
import { SubjectLinks } from '../../api/subject_links.js'
// styles
import { styles } from './assets/styles.js'

export default class SubjectLink extends Component {
  constructor(props) {
    super(props)
    this.state = {
      like: this.props.currentUser && (this.props.currentUser.profile.likedItems.indexOf(this.props.item._id) !== -1)
    }

    this.handleLike = this.handleLike.bind(this)
    this.deleteThisSubject = this.deleteThisSubject.bind(this)
  }

  componentDidMount() {
    if (this.props.currentUser) {
      setTimeout( () => {
        this.setState({ like: this.props.currentUser && (this.props.currentUser.profile.likedItems.indexOf(this.props.item._id) !== -1) })
      }, 500)
    }
  }

  handleLike(event, value) {
    let itemId = this.props.item._id

    if (value) {
      this.setState({ like: true })

      Meteor.call('subjectLinks.setLiked', itemId, 1)

      Accounts.users.update(
        {
          _id: Accounts.userId()
        }, {
          $addToSet: { 'profile.likedItems': itemId }
        }
      )
    } else {
      this.setState({ like: false })

      Meteor.call('subjectLinks.setLiked', itemId, -1)

      Accounts.users.update(
        {
          _id: Accounts.userId()
        }, {
          $pull: { 'profile.likedItems': itemId }
        }
      )
    }
  }

  deleteThisSubject() {
    Meteor.call('subjectLinks.remove', this.props.item._id)
  }

  render() {
    return (
      <Paper
        zDepth = { 2 }
        style = { styles.linkWrapper }
        >
        <div style = { styles.flex }>
          { this.props.currentUser ?
            <div>
              { this.props.currentUser._id === this.props.item.createdBy._id ?
                <button
                  onClick = { this.deleteThisSubject }
                  style = { styles.mgRight }
                  >
                  &times;
                </button>
                :
                <div>
                  <Checkbox
                    checkedIcon = { <ActionFavorite /> }
                    uncheckedIcon = { <ActionFavoriteBorder /> }
                    onCheck = { this.handleLike }
                    checked = { this.state.like }
                    />
                </div>
              }
            </div>
            : ''
          }

          <a href = { this.props.item.link } >{ this.props.item.description }</a>
        </div>

        <div>Rating: { this.props.item.rating }</div>
      </Paper>
    )
  }
}

SubjectLink.propTypes = {
  item: PropTypes.object.isRequired
}
