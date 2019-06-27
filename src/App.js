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
          <Route path='/' component={() => <Toolbar openNewPost={() => this.dialogNewPost(true)}/>}/>
          {this.state.newPost
            ? (<NewPost closeNewPost={() => this.dialogNewPost(false)}/>)
            : (
              <div>
                <Route path='/:category' exact component={Posts} />
                <Route path='/:category/:id' exact component={PostDetails} />
              </div>
            )
          }
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
