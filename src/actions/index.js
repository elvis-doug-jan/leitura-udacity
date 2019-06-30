import { getInitialData } from '../utils/posts'
import { receiveAllPosts, receiveAllPostsPerCategory } from '../actions/posts'
import { receiveAllCategories } from '../actions/categories'
import { receiveUserLogged } from './users'
import { showLoading } from 'react-redux-loading'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(receiveUserLogged({ userLogged: 'Yourself' }))
    dispatch(showLoading())
    return getInitialData()
    .then(({ posts, categories }) => {
      dispatch(receiveAllPosts(posts))
      dispatch(receiveAllCategories(categories))
      dispatch(receiveAllPostsPerCategory(''))
      })
  }
}