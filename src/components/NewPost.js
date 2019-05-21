import React, { Component } from 'react'
import { newPost } from './../actions/posts'
import { Container, Col, Button } from 'react-bootstrap'
import { getAllCategories } from './../utils/ApiCalls'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { v4 } from 'uuid'
import './../styles/Post.css'

class NewPost extends Component {

  state = {
    title: '',
    body: '',
    author: this.props.user.userLogged,
    category: ''
  }

  createPost = () => {
    const { title, author, category, body } = this.state

    this.props.newPost({
      id: v4(),
      timestamp: Date.now(),
      title,
      author,
      category,
      body
    })

    this.setState({ body: '' })
    this.setState({ category: '' })
    this.setState({ title: '' })
  }

  setBodyPost = bodyPost => {
    this.setState({ body: bodyPost })
  }

  setTitlePost = titlePost => {
    this.setState({ title: titlePost })
  }

  setCategory = category => {
    this.setState({ category })
  }

  render() {
    return (
      <Container>
        <Col>
          <h3>New post</h3>
          Title:
          <input value={this.state.title} onChange={e => this.setTitlePost(e.target.value)} />
          <br />
          <br />
          Content:
          <textarea value={this.state.body} onChange={e => this.setBodyPost(e.target.value)}></textarea>
          <br />
          {this.props.categories.map(category => (
            <Button variant="secondary" key={category.path} onClick={() => this.setCategory(category.name)} >{category.name}</Button>
          ))}
          <br />
          <Button onClick={() => this.createPost()}>Create Post</Button>
        </Col>
      </Container>
    )
  }
}

const mapStateToProps = ({ categories, user }) => ({ categories, user })

const mapDispatchToProps = dispatch => bindActionCreators({ getAllCategories, newPost }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)