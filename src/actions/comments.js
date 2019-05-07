import {
  getAllComments,
  newCommentApi,
  deleteCommentApi,
  saveEditCommentApi,
  voteCommentApi
} from './../utils/ApiCalls'
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS'
export const NEW_COMMENT = 'NEW_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'

export function receiveAllComments(id) {
  return dispatch => {
    return getAllComments(id)
      .then(comments =>
        dispatch({
          type: RECEIVE_ALL_COMMENTS,
          comments
        })
      )
      .catch(err => console.warn('ERRO AO DISPARAR ACTION DE COMENTÁRIOS!', err))
  }
}

export function newComment(comment) {
  return dispatch => {
    return newCommentApi(comment)
      .then(comment => {
        return getAllComments(comment.parentId)
          .then(comments => dispatch({
            type: RECEIVE_ALL_COMMENTS,
            comments
          }))
      })
  }
}

export function deleteComment(commentId) {
  return dispatch => {
    return deleteCommentApi(commentId)
      .then(commentDeleted => {
        return getAllComments(commentDeleted.parentId)
          .then(comments =>
            dispatch({
              type: RECEIVE_ALL_COMMENTS,
              comments
            })
          )
      })
  }
}

export function saveCommentEdit(id, comment) {
  return dispatch => {
    return saveEditCommentApi(id, comment)
      .then(commentEdited => {
        return getAllComments(commentEdited.parentId)
          .then(comments =>
            dispatch({
              type: RECEIVE_ALL_COMMENTS,
              comments
            })
          )
      })
  }
}

export function voteComment(id, vote) {
  return dispatch => {
    return voteCommentApi(id, vote)
      .then(comment => {
        return getAllComments(comment.parentId)
          .then(comments =>
            dispatch({
              type: RECEIVE_ALL_COMMENTS,
              comments
            })
          )
      })
  }
}
