import React, { Component } from 'react'
import { Container, Col, Card } from 'react-bootstrap'
import { connect } from 'react-redux'

class Posts extends Component {
  render() {
    console.log('PROPS POSTS COMPONENT', this.props)
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

function mapStateToProps({ posts }, props) {
  console.log(props)
}

export default connect(mapStateToProps)(Posts)