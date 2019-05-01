import { getInitialData } from '../utils/posts'
import { receiveAllPosts } from '../actions/posts'
import { receiveAllCategories } from '../actions/categories'
import { receiveUserLogged } from './users'
import { showLoading } from 'react-redux-loading'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    dispatch(receiveUserLogged({ userLogged: 'Yourself' }))
    return getInitialData()
      .then(({ posts, categories }) => {
        dispatch(receiveAllPosts(posts))
        dispatch(receiveAllCategories(categories))
      })
  }
}