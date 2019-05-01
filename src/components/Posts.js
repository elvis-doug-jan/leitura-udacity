import React, { Component } from 'react'
import { Container, Col, Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { receiveAllPosts } from './../actions/posts'
import moment from 'moment'
import './../styles/Post.css'

class Posts extends Component {
  showCommentsPost = id => {
    this.props.history.push(`/comments/${id}`)
  }

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
              <span>
                <b>Votes: {post.voteScore} Comments: {post.commentCount}</b>
                <Button variant="outline-primary" onClick={() => this.showCommentsPost(post.id)}>
                  Show comments
            </Button>
              </span>
            </Card>
          ))}
        </Col>
      </Container>
    )
  }
}

const mapStateToProps = ({ posts }) => ({ posts })

const mapDispatchToProps = dispatch => bindActionCreators({ receiveAllPosts }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Posts)