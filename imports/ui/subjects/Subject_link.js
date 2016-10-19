import React, { Component, PropTypes } from 'react'
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
      like: (this.props.currentUser.profile.likedItems.indexOf(this.props.item._id) !== -1)
    }

    this.handleLike = this.handleLike.bind(this)
    this.deleteThisSubject = this.deleteThisSubject.bind(this)
  }

  handleLike(event, value) {
    let itemId = this.props.item._id

    if (value) {
      this.setState({ like: true })
      SubjectLinks.update({ _id: itemId }, {$inc: { rating: 1} })
      Accounts.users.update(
        {
          _id: Accounts.userId()
        }, {
          $addToSet: { 'profile.likedItems': itemId }
        }
      )
    } else {
      this.setState({ like: false })
      SubjectLinks.update({ _id: this.props.item._id }, {$inc: { rating: -1} })
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
    SubjectLinks.remove(this.props.item._id);
  }

  render() {
    return (
      <Paper
        zDepth = { 2 }
        style = { styles.linkWrapper }
        >
        { this.props.currentUser && (this.props.currentUser._id === this.props.item.createdBy._id) ?
        <button onClick = { this.deleteThisSubject } >
          &times;
        </button>
        :
        <div></div>
        }

        <a href = { this.props.item.link } >{ this.props.item.description }</a>

        { this.props.currentUser ?
        <div>
          <Checkbox
            checkedIcon = { <ActionFavorite /> }
            uncheckedIcon = { <ActionFavoriteBorder /> }
            onCheck = { this.handleLike }
            checked = { this.state.like }
          />
        </div>
        :
        <div></div>
        }

        <span>Rating: { this.props.item.rating }</span>
      </Paper>
    )
  }
}

SubjectLink.propTypes = {
  item: PropTypes.object.isRequired
}
