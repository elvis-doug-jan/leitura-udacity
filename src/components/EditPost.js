import React, { Component } from 'react'
import { updatePost } from './../actions/posts'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Button, Card } from 'react-bootstrap'
import { FaSave, FaSignOutAlt } from 'react-icons/fa'
import { getOnePostId } from './../utils/ApiCalls'
import './../styles/EditPost.css'

class EditPost extends Component {

  state = {
    post: '',
    contentPost: ''
  }

  cancel = () => {
    this.props.history.push(`/`)
  }

  componentDidMount() {
    getOnePostId(this.props.match.params.id)
      .then(post => {
        this.setState({ post })
        this.setState({ contentPost: post.body })
      })
  }

  changeContentPost = content => this.setState({ contentPost: content })

  savePost = () => {
    const { author, category, commentCount, deleted, id, timestamp, title, voteScore } = this.state.post

    this.props.updatePost({
      author,
      body: this.state.contentPost,
      category,
      commentCount,
      deleted,
      id,
      timestamp,
      title,
      voteScore
    })
    this.props.history.push(`/`)
  }

  render() {
    return (
      <Row className="justify-content-md-center">
        <Card className="cardContentNewPost">
          <span className="inputEditTitle">
            <b>
              <h4>{this.state.post.title}</h4>
            </b>
          </span>
          <p className="editPostAuthor"><b>Author:</b> <i>{this.state.post.author}</i></p>
          <textarea className="editPostBody" value={this.state.contentPost} onChange={e => this.changeContentPost(e.target.value)}></textarea>
          <br />
          <Row className="justify-content-md-center">
            <Button className="mr-1" onClick={() => this.savePost()}>
              <FaSave />
            </Button>
            <Button variant="warning" className="ml-1" onClick={() => this.cancel()}>
              <FaSignOutAlt />
            </Button>
          </Row>
        </Card>
      </Row>
    )
  }
}

// const mapStateToProps = ({ posts }) => ({ posts })

const mapDispatchToProps = dispatch => bindActionCreators({ updatePost }, dispatch)

export default connect(null, mapDispatchToProps)(EditPost)