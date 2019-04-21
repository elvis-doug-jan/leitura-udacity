import React, { Component } from 'react'
import { handleInitialData } from './actions/index'
import { connect } from 'react-redux'
import Toolbar from './components/Toolbar'
import Posts from './components/Posts'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <Toolbar />
        <Posts />
      </div>
    );
  }
}

function mapStateToProps(...posts) {
  return { 
    posts
  }
}

export default connect(mapStateToProps)(App)
