import React, { Component } from 'react'
import { handleInitialData } from './actions/index'
import { connect } from 'react-redux'
import Toolbar from './components/Toolbar'
import Posts from './components/Posts'

class App extends Component {
  componentDidMount() {
    // console.log(this.props)
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

function mapStateToProps(store) {
  console.log(">>>>>> APP", store)
  return { 
    store
  }
}

export default connect(mapStateToProps)(App)
