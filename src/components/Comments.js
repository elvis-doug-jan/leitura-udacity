import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { receiveAllComments } from './../actions/comments'

class Comment extends Component {

  componentDidMount() {
    this.props.receiveAllComments(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        <h1>TESTEs</h1>
      </div>
    )
  }
}


const mapStateToProps = ({ comments }) => {
  return {
    comments
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ receiveAllComments }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Comment)