import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { updatePost } from './../actions/posts'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getOnePostId } from './../utils/ApiCalls'

class EditPost extends Component {

  state = {
    post: '',
    contentPost: ''
  }

  componentDidMount() {
    getOnePostId(this.props.match.params.id)
      .then(post => {
        this.setState({post})
        this.setState({contentPost: post.body})
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
  }

  render() {
    return (
      <Row>
        <Col>
          <div>
            <b>TITULO DO POST {this.state.post.title}</b>
            <p>Author: <i>{this.state.post.author}</i></p>
            <textarea value={this.state.contentPost} onChange={e => this.changeContentPost(e.target.value)}></textarea>
            <br />
            <Button onClick={() => this.savePost()}>Save</Button>
            <Button variant="danger">Cancel</Button>
          </div>
        </Col>
      </Row>
    )
  }
}

// const mapStateToProps = ({ posts }) => ({ posts })

const mapDispatchToProps = dispatch => bindActionCreators({ updatePost }, dispatch)

export default connect(null, mapDispatchToProps)(EditPost)