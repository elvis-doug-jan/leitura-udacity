import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Button, Col, ButtonGroup } from 'react-bootstrap'
import { receiveAllPostsPerCategory } from './../actions/posts'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getAllCategories, getAllPostsPerCategoryApi } from './../utils/ApiCalls'
import { FaPlusSquare } from 'react-icons/fa'
import './../styles/Toolbar.css'

class Toolbar extends Component {
  newPostPage = () => this.props.openNewPost()

  changePostCategory = category => this.props.receiveAllPostsPerCategory(category)

  render() {
    return (
      <div className="toolbar">
        <Row>
          <Col>
            <Row className="justify-content-md-start">
              <span className="ml-4 mt-2 mr-3"><b>Categories</b> </span>
              <ButtonGroup>
                <Link to="/ ">
                  <Button variant='light' onClick={() => this.changePostCategory(' ')}>All posts</Button>
                </Link>
                <Link to="/react">
                  <Button variant='light' onClick={() => this.changePostCategory('react')}>React</Button>
                </Link>
                <Link to="redux">
                  <Button variant='light' onClick={() => this.changePostCategory('redux')}>Redux</Button>
                </Link>
                <Link to="udacity">
                  <Button variant='light' onClick={() => this.changePostCategory('udacity')}>Udacity</Button>
                </Link>
              </ButtonGroup>
            </Row>
          </Col>
          <Col>
            <Row className="justify-content-md-end">
              <Button variant="success" className="mr-4" onClick={() => this.newPostPage()}>
                <FaPlusSquare />
              </Button>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({ categories: state.categories })

const mapDispatchToProps = dispatch => bindActionCreators({ getAllCategories, receiveAllPostsPerCategory, getAllPostsPerCategoryApi }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
