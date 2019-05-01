import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { receiveAllComments } from './../actions/comments'

class Comment extends Component {

  componentDidMount() {
    console.log('PROPS COMMENT', this.props)
  }

  render() {
    return(
      <div>
        <h1>TESTEs</h1>
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.warn('STATE', state)
  // return {
  //   posts: state.posts
  // }
}

const mapDispatchToProps = dispatch => bindActionCreators({ receiveAllComments }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Comment)