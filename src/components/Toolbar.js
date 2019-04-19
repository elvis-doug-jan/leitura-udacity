import React, { Component } from 'react'
import { Row, Button, Col, ButtonGroup } from 'react-bootstrap'

export default class Toolbar extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Button variant='outline-primary'>Home</Button>
        </Col>
        <Col>
        <span>Categories </span>
          <ButtonGroup>
            <Button variant='light'>React</Button>
            <Button variant='light'>Redux</Button>
            <Button variant='light'>Udacity</Button>
          </ButtonGroup>
        </Col>
      </Row>
    )
  }
}