import React, { Component } from 'react'
import { Container, Col, Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllComments } from './../utils/ApiCalls'
import { receiveAllPosts } from './../actions/posts'
import { receiveAllComments } from './../actions/comments'
import { comments } from './../reducers/comments'
import moment from 'moment'
import './../styles/Post.css'

const getCommentsPost = async id => {
  await getAllComments(id)
    .then(listComments => comments({}, receiveAllComments(listComments)))
    .catch(err => console.log(err))
}

const Posts = props => (
  <Container>
    <Col>
      {props.posts.map(post => (
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
            <Button variant="outline-primary" onClick={() => getCommentsPost(post.id)}>
              Show comments
            </Button>
          </span>
        </Card>
      ))}
    </Col>

  </Container>
)

const mapStateToProps = state => {
  console.warn('STATE', state)
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ receiveAllPosts }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Posts)