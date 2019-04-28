import { getInitialData } from '../utils/posts'
import { receiveAllPosts } from '../actions/posts'
import { receiveAllCategories } from '../actions/categories'
import { showLoading } from 'react-redux-loading'

// const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ posts, categories }) => {
        dispatch(receiveAllPosts(posts))
        dispatch(receiveAllCategories(categories))
      })
  }
}