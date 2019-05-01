import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { receiveAllComments } from './../actions/comments'
import moment from 'moment'

class Comment extends Component {

  componentDidMount() {
    this.props.receiveAllComments(this.props.match.params.id)
    console.log('PROPS COMPONENTS', this.props)
  }

  render() {
    return (
      <div>
        {this.props.comments.map(comment => (
          <div>
            <h3 key={comment.id}>{comment.author}</h3>
            <b>On <i>{moment(comment.timestamp).format('DD/MM/YYYY')}</i></b>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    )
  }
}


const mapStateToProps = ({ comments }) => ({ comments })

const mapDispatchToProps = dispatch => bindActionCreators({ receiveAllComments }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Comment)