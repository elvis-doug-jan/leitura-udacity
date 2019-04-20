import React, { Component } from 'react'
import { Container, Row, Button, Col, ButtonGroup, Card } from 'react-bootstrap'
import { connect } from 'react-redux'

class Posts extends Component {
  render() {
    return (
      <Container>
        <Col>
          <Card>
            <h1>Post example</h1>
          </Card>
        </Col>
      </Container>
    )
  }
}

export default connect()(Posts)