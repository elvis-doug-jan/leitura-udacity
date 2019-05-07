import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from './actions/index'
import { connect } from 'react-redux'
import Toolbar from './components/Toolbar'
import Posts from './components/Posts'
import Comment from './components/Comments'
import NewPost from './components/NewPost'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact component={Toolbar}/>
          <Route path='/' exact component={Posts}/>
        </div>
        <Route path='/comments/:id' exact component={Comment} />
        <Route path='/new-post' exact component={NewPost} />
      </Router>
    )
  }
}

function mapStateToProps(store) {
  return {
    store
  }
}

export default connect(mapStateToProps)(App)
