import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { receiveUserLogged } from './../actions/users'
import { receiveAllComments, newComment, deleteComment } from './../actions/comments'
import moment from 'moment'

class Comment extends Component {

  state = {
    newComment: '',
    userLogged: ''
  }

  componentDidMount() {
    this.props.receiveAllComments(this.props.match.params.id)
    this.setState({ userLogged: this.props.user.userLogged })
  }

  newComment = comment => {
    setTimeout(() => {
      this.setState({ newComment: comment })
    }, 500)
  }

  postNewComment = () => {
    const comment = {
      author: this.state.userLogged,
      body: this.state.newComment,
      deleted: false,
      id: '123456789',
      parentDeleted: false,
      parentId: this.props.match.params.id,
      voteScore: 0
    }

    newComment(comment)
  }

  removeComment = id => {
    deleteComment(id)
  }

  editComment = () => {
  }


  render() {
    return (
      <div>
        {this.props.comments.map(comment => (
          <div key={comment.id}>
            <h3>{comment.author}</h3>
            <b>On <i>{moment(comment.timestamp).format('DD/MM/YYYY')}</i></b>
            <p>{comment.body}</p>
            <button onClick={() => this.removeComment(comment.id)}>Delete Comment</button>
            {this.state.userLogged === comment.author
              ? <button onClick={() => this.editComment()}>Edit Comment</button>
              : <button disabled> Edit Comment</button>
            }
          </div>
        ))}
        <textarea onChange={event => this.newComment(event.target.value)} />
        <br />
        <button onClick={() => this.postNewComment()}>New Comment</button>
      </div>
    )
  }
}

const mapStateToProps = ({ comments, user }) => ({ comments, user })

const mapDispatchToProps = dispatch => bindActionCreators(
  { receiveAllComments, receiveUserLogged },
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Comment)