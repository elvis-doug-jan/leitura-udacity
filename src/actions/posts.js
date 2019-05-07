export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'

export function receiveAllPosts(posts) {
  return {
    type: RECEIVE_ALL_POSTS,
    posts
  }
}
