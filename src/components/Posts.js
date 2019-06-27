import React, { Component } from 'react'
import { Container, Col, Card, Button, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { receiveAllPosts, votePost, deletePostId, receiveAllPostsPerCategory } from './../actions/posts'
import moment from 'moment'
import { FaRegFrown, FaRegGrin, FaEdit, FaTrash, FaRegComments } from 'react-icons/fa'
import EditPost from './EditPost'
import './../styles/Post.css'

class Posts extends Component {
  state = {
    post: {},
    postEdit: false
  }

  category = ''

  componentDidMount() {
    this.category = this.props.match.url.replace('/', '')
    this.props.receiveAllPostsPerCategory(this.category)
  }

  closeDialogEdit = async () => {
    this.props.receiveAllPostsPerCategory(this.category)
    this.setState({ postEdit: false })
    this.props.history.push(`/${this.category}`)
  }

  showCommentsPost = post => {
    this.props.history.push(`/${post.category}/${post.id}`)
  }

  votePost = (id, vote) => {
    this.props.votePost(id, vote)
  }

  editPost = (post) => {
    this.category = this.props.match.url.replace('/', '')
    this.setState({ post: post })
    this.setState({ postEdit: true })
  }

  deletePost = id => {
    this.category = this.props.match.url.replace('/', '')
    this.props.deletePostId(id, this.category)
  }

  render() {
    return (
      <div>
        {this.state.postEdit
          ? <EditPost postObject={this.state.post} category={this.category} closeEditPost={() => this.closeDialogEdit()} />
          : <Container className="postComponent">
            <Col>
              {this.props.posts.map(post => (
                <Card key={post.id} className="cardContent">
                  <Row>
                    <Col md={10}>
                      <Row className="justify-content-md-start">
                        <h4 className="postTitle">{post.title}</h4>
                      </Row>
                    </Col>
                    <Col md={2}>
                      <Row className="justify-content-md-end">
                        <Button variant="info" onClick={() => this.editPost(post)}>
                          <FaEdit />
                        </Button>
                        <Button variant="danger" className="ml-3" onClick={() => this.deletePost(post.id)}>
                          <FaTrash />
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                  <span className="postAuthor">By: <b>{post.author}</b></span>
                  <span className="postData">
                    in <i className="categoryPost">{post.category}</i> on <i>{moment(post.timestamp).format('DD/MM/YYYY')} {moment(post.timestamp).format('HH:mm')}</i>
                  </span>
                  <br />
                  <div className="postBody">{post.body}</div>
                  <Row>
                    <Col>
                      Votes: <b>{post.voteScore}</b>
                    </Col>
                    <Col>
                      <Row className="justify-content-md-end mr-1">
                        Comments: <b>{post.commentCount}</b>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Row>
                        <Button className="likeButton" variant="outline-primary" onClick={() => this.votePost(post.id, 'upVote')}>
                          <FaRegGrin />
                        </Button>
                        <Button className="deslikeButton" variant="outline-danger" onClick={() => this.votePost(post.id, 'downVote')}>
                          <FaRegFrown />
                        </Button>
                      </Row>
                    </Col>
                    <Button variant="outline-primary" className="mr-2" onClick={() => this.showCommentsPost(post)}>
                      <FaRegComments />
                    </Button>
                  </Row>
                </Card>
              ))}
            </Col>
          </Container>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => ({ posts })

const mapDispatchToProps = dispatch => bindActionCreators({
  receiveAllPosts, votePost, deletePostId, receiveAllPostsPerCategory
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
