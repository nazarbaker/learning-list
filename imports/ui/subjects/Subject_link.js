import React, { Component, PropTypes } from 'react'
// material-ui
import Paper from 'material-ui/Paper'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentRemove from 'material-ui/svg-icons/content/remove'
// connect db
import { SubjectLinks } from '../../api/subject_links.js'
// styles
import { styles } from './assets/styles.js'

export default class SubjectLink extends Component {
  constructor(props) {
    super(props)
    this.increaseRating = this.increaseRating.bind(this)
    this.decreaseRating = this.decreaseRating.bind(this)
    this.deleteThisSubject = this.deleteThisSubject.bind(this)
  }

  increaseRating() {
    SubjectLinks.update({ _id: this.props.item._id }, {$inc: { rating: 1} })
  }

  decreaseRating() {
    SubjectLinks.update({ _id: this.props.item._id }, {$inc: { rating: -1} })
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
          <FloatingActionButton
            mini = { true }
            style = { styles.mgRight }
            onClick = { this.increaseRating }
            >
            <ContentAdd />
          </FloatingActionButton>

          <FloatingActionButton
            mini = { true }
            style = { styles.mgRight }
            onClick = { this.decreaseRating }
            >
            <ContentRemove />
          </FloatingActionButton>
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
