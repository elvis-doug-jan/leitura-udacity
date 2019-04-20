import { getAllPosts } from '../utils/posts'
// import { receiveUsers } from '../actions/users'
// import { receiveTweets } from '../actions/tweets'
// import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getAllPosts()
      .then(res => console.log(res.data))
  }
}