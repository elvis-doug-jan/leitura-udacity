import { getInitialData } from '../utils/posts'
import { receiveAllPosts } from '../actions/posts'
import { receiveAllCategories } from '../actions/categories'
import { showLoading } from 'react-redux-loading'

export function handleInitialData() {
  return (dispatch) => {
    console.log(dispatch)
    dispatch(showLoading())
    return getInitialData()
      .then(({ posts, categories }) => {
        dispatch(receiveAllPosts(posts))
        dispatch(receiveAllCategories(categories))
      })
  }
}