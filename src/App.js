import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { Switch, Route } from 'react-router'
import { handleInitialData } from './actions/index'
import { connect } from 'react-redux'
import Toolbar from './components/Toolbar'
import Posts from './components/Posts'
import PostDetails from './components/PostDetails'
import NewPost from './components/NewPost'
import EditPost from './components/EditPost'

class App extends Component {
  state = {
    newPost: false
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  dialogNewPost = value => this.setState({ newPost: value })

  render() {
    return (
      <div>
        <Router>
          <Route path='/' component={Toolbar} />
          <Route path='/react' exact component={Posts} />
          <Route path='/redux' exact component={Posts} />
          <Route path='/udacity' exact component={Posts} />
          <Route path='/' exact component={Posts} />
          <Route path='/new-post' component={NewPost} />
          <Route path='/edit-post/:id' exact component={EditPost} />
          <Route path='/react/:id' exact component={PostDetails} />
          <Route path='/udacity/:id' exact component={PostDetails} />
          <Route path='/redux/:id' exact component={PostDetails} />
        </Router>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    store
  }
}

export default connect(mapStateToProps)(App)
