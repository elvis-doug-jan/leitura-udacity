import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { receiveAllComments } from './../actions/comments'

class Comment extends Component {

  componentDidMount() {
    this.props.receiveAllComments(this.props.match.params.id)
    console.log('PROPS COMPONENTS', this.props)
  }

  render() {
    return (
      <div>
        {this.props.comments.map(comment => (
          <h4 key={comment.id}>{comment.id}</h4>
        ))}
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