import React, { Component } from 'react'
import { updatePost } from './../actions/posts'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Button, Card } from 'react-bootstrap'
import { FaSave, FaSignOutAlt } from 'react-icons/fa'
import { getOnePostIdApi } from './../utils/ApiCalls'
import './../styles/EditPost.css'

class EditPost extends Component {

  state = {
    post: '',
    contentPost: '',
    titlePost: ''
  }

  cancel = () => {
    this.props.closeEditPost()
  }

  componentDidMount() {
    getOnePostIdApi(this.props.match.params.id)
      .then(post => {
        this.setState({ post })
        this.setState({ contentPost: post.body })
        this.setState({ titlePost: post.title })
      })
  }

  changeContentPost = content => this.setState({ contentPost: content })

  changeTitlePost = title => this.setState({ titlePost: title })

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
      title: this.state.titlePost,
      voteScore
    }, this.props.category)
    this.props.closeEditPost()
  }

  render() {
    return (
      <Row className="justify-content-md-center">
        <Card className="cardContentNewPost">
          <span className="inputEditTitle">
            <b>
              <textarea value={this.state.titlePost} onChange={e => this.changeTitlePost(e.target.value)}></textarea>
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

const mapStateToProps = ({ posts }) => ({ posts })

const mapDispatchToProps = dispatch => bindActionCreators({ updatePost }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)