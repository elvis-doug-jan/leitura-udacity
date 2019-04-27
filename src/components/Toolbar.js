import React, { Component } from 'react'
import { Row, Button, Col, ButtonGroup } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getAllCategories } from './../utils/ApiCalls'

class Toolbar extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Button variant='outline-primary'>Home</Button>
        </Col>
        <Col>
        <span>Categories </span>
          <ButtonGroup>
            {this.props.categories.map((category, index) => (
              <Button key={index} variant='light'>{category.name}</Button>
            ))}
          </ButtonGroup>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({ getAllCategories }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)