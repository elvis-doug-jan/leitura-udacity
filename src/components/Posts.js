import React, { Component } from 'react'
import { Container, Col, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { receiveAllPosts } from './../actions/posts'

class Posts extends Component {
  componentDidMount() {
    console.log('PROPS', this.props)
  }

  render() {
    console.log('PROPS POSTS COMPONENT', this.props)
    return (
      <Container>
        <Col>
          <Card>
            <h1>Post example</h1>
            {/* {this.props.posts.map(post => (
              <h6>testes</h6>
            ))} */}
          </Card>
        </Col>
      </Container>
    )
  }
}

// const Posts = props => (
//   <Container>
//     <Col>
//       <Card>
//         <h1>Post example</h1>
//         <h3>Props: {props[0].title}</h3>
//       </Card>
//     </Col>
//   </Container>
// )

const mapStateToProps = async state => {
  state.posts.map(post => console.warn('UM POST', post))
  return state
}
const mapDispatchToProps = async dispatch => await bindActionCreators({ receiveAllPosts }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Posts)