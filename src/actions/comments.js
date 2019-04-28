export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS'

export function receiveAllComments(comments) {
  console.warn('ACTION COMMENT', comments)
  return {
    type: RECEIVE_ALL_COMMENTS,  
    comments
  }
}