import React, { Component } from 'react'
import { Container, Col, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { receiveAllPosts } from './../actions/posts'
import moment from 'moment'
import './../styles/Post.css'

class Posts extends Component {
  render() {
    return (
      <Container>
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
              <b>Votes: {post.voteScore} Comments: {post.commentCount}</b>
            </Card>
          ))}
        </Col>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({ receiveAllPosts }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Posts)