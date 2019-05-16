import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

export default class EditPost extends Component {

  state = {
    post: ''
  }

  componentDidMount() {
    this.setState({ post: this.props.post })
  }

  render() {
    return (
      <Row>
        <Col>
          <h3>TITULO DO POST {this.state.post.title}</h3>
        </Col>
      </Row>
    )
  }
}