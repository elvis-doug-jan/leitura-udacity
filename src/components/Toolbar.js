import React, { Component } from 'react'
import { Row, Button, Col, ButtonGroup } from 'react-bootstrap'
import { filterPostsByCaterogy } from './../actions/posts'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getAllCategories } from './../utils/ApiCalls'

class Toolbar extends Component {
  newPostPage = () => {
    this.props.history.push(`/new-post`)
  }

  filterPosts = (category) => {
    this.props.filterPostsByCaterogy(category)
  }

  render() {
    return (
      <Row>
        <Col>
        <span>Categories </span>
          <ButtonGroup>
            <Button variant='light' onClick={() => this.filterPosts('all')}>All posts</Button>
            {this.props.categories.map((category, index) => (
              <Button key={index} variant='light' onClick={() => this.filterPosts(category.name)}>{category.name}</Button>
            ))}
          </ButtonGroup>
          <Button onClick={() => this.newPostPage()}>New Post</Button>
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
const mapDispatchToProps = dispatch => bindActionCreators({ getAllCategories, filterPostsByCaterogy }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)