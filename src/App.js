import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from './actions/index'
import { connect } from 'react-redux'
import Toolbar from './components/Toolbar'
import Posts from './components/Posts'
import Comment from './components/PostDetails'
import NewPost from './components/NewPost'
import EditPost from './components/EditPost'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
      <Route path='/' component={Toolbar}/>
        <div>
          <Route path='/:category/posts' exact component={Posts}/>
        </div>
        <Route path='/post/:id' exact component={Comment} />
        <Route path='/new-post' exact component={NewPost} />
        <Route path='/edit-post/:id' exact component={EditPost} />
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
