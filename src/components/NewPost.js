import React, { Component } from 'react'
import { Container, Col, Card, Button } from 'react-bootstrap'
import { getAllCategories } from './../utils/ApiCalls'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import moment from 'moment'
import './../styles/Post.css'

class NewPost extends Component {
  render() {
    return (
      <Container>
        <Col>
          <h3>New post</h3>
          Title:
          <input />
          <br />
          <br />
          Content:
          <textarea></textarea>
          <br/>
          {this.props.categories.map(category => (
            <button key={category.path}>{category.name}</button>
          ))}
        </Col>
      </Container>
    )
  }
}

const mapStateToProps = ({ categories }) => ({ categories })

const mapDispatchToProps = dispatch => bindActionCreators({ getAllCategories }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)