import React, { Component } from 'react'
import { newPost } from './../actions/posts'
import { Container, Row, Button, Card, Col } from 'react-bootstrap'
import { getAllCategories } from './../utils/ApiCalls'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FaSave } from 'react-icons/fa'
import { v4 } from 'uuid'
import './../styles/NewPost.css'

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
        <Row className="justify-content-md-center">
          <Card className="cardContentNewPost">
            <Row className="justify-content-md-center">
              <h4>New post</h4>
            </Row>
            Title:
          <input value={this.state.title} onChange={e => this.setTitlePost(e.target.value)} className="inputTitle" />
            <br />
            <br />
            Content:
          <textarea value={this.state.body} onChange={e => this.setBodyPost(e.target.value)} className="inputContent"></textarea>
            <br />
            <Row className="justify-content-md-center">
              {this.props.categories.map(category => (
                <Button variant="secondary" key={category.path} onClick={() => this.setCategory(category.name)} className="mr-1 ml-1">
                  {category.name}
                </Button>
              ))}
            </Row>
            <br />
            <Row className="justify-content-md-center">
              <Col md={2}>
                <Button onClick={() => this.createPost()} className="buttonCreatePost">
                  <FaSave />
                </Button>
              </Col>
            </Row>
          </Card>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = ({ categories, user }) => ({ categories, user })

const mapDispatchToProps = dispatch => bindActionCreators({ getAllCategories, newPost }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)