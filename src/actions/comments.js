import { getAllComments, newCommentApi, deleteCommentApi, saveEditCommentApi } from './../utils/ApiCalls'
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS'

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
  newCommentApi(comment)
}

export function deleteComment(id) {
  deleteCommentApi(id)
}

export function saveCommentEdit(id, comment) {
  console.log('ACTION', comment)
  saveEditCommentApi(id, comment)
}