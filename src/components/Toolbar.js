import React, { Component } from 'react'
import { Row, Button, Col, ButtonGroup } from 'react-bootstrap'
import { filterPostsByCaterogy } from './../actions/posts'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getAllCategories } from './../utils/ApiCalls'
import { FaPlusSquare } from 'react-icons/fa'
import './../styles/Toolbar.css'

class Toolbar extends Component {
  newPostPage = () => {
    this.props.history.push(`/new-post`)
  }

  filterPosts = (category) => {
    this.props.filterPostsByCaterogy(category)
  }

  render() {
    return (
      <div className="toolbar">
        <Row>
          <Col>
            <Row className="justify-content-md-start">
              <span className="ml-4 mt-2 mr-3"><b>Categories</b> </span>
              <ButtonGroup>
                <Button variant='light' onClick={() => this.filterPosts('all')}>All posts</Button>
                {this.props.categories.map((category, index) => (
                  <Button key={index} variant='light' onClick={() => this.filterPosts(category.name)}>{category.name}</Button>
                ))}
              </ButtonGroup>
            </Row>
          </Col>
          <Col>
            <Row className="justify-content-md-end">
              <Button variant="success" className="mr-4" onClick={() => this.newPostPage()}>
                <FaPlusSquare/>
              </Button>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({ categories: state.categories })

const mapDispatchToProps = dispatch => bindActionCreators({ getAllCategories, filterPostsByCaterogy }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
