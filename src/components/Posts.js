import React, { Component } from 'react'
import { Container, Col, Card, Button, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { receiveAllPosts, votePost, deletePostId } from './../actions/posts'
import moment from 'moment'
import './../styles/Post.css'

class Posts extends Component {
  state = {
    post: {}
  }

  showCommentsPost = id => {
    this.props.history.push(`/comments/${id}`)
  }

  votePost = (id, vote) => {
    this.props.votePost(id, vote)
  }

  editPost = post => {
    this.setState({ post })
    this.props.history.push(`/edit-post/${post.id}`)
  }

  deletePost = id => {
    this.props.deletePostId(id)
  }

  render() {
    return (
      <Container className="postComponent">
        <Col>
          {this.props.posts.map(post => (
            <Card key={post.id} className="cardContent">
              <h4>{post.title}</h4>
              <span>By: <b>{post.author}</b></span>
              <span>
                in <i>{post.category}</i> on <i>{moment(post.timestamp).format('DD/MM/YYYY')} {moment(post.timestamp).format('HH:mm')}</i>
              </span>
              <br />
              <div>{post.body}</div>
              <span>
                <b>Votes: {post.voteScore} Comments: {post.commentCount}</b>
                <Row>
                  <Button className="likeButton" onClick={() => this.votePost(post.id, 'upVote')}>Like</Button>
                  <Button className="deslikeButton" variant="dark" onClick={() => this.votePost(post.id, 'downVote')}>Deslike</Button>
                </Row>
                <Row>
                  <Button variant="info" onClick={() => this.editPost(post)}>Edit</Button>
                  <Button variant="info" onClick={() => this.deletePost(post.id)}>Delete</Button>
                </Row>
                <Button variant="outline-primary" onClick={() => this.showCommentsPost(post.id)}>Show comments</Button>
              </span>
            </Card>
          ))}
        </Col>
      </Container>
    )
  }
}

const mapStateToProps = ({ posts }) => ({ posts })

const mapDispatchToProps = dispatch => bindActionCreators({ receiveAllPosts, votePost, deletePostId }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Posts)