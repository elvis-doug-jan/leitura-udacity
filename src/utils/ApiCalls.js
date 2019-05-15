import axios from 'axios'
import uuid from 'uuid/v4'

const urlApi = 'http://localhost:3001/'

const headers = {
  Authorization: 'whatever-you-want'
}

export async function getAllPosts() {
  return axios.get(`${urlApi}posts`, { headers })
    .then(res => res.data)
    .catch(err => console.error('Erro ao consultar API de posts', err))
}

export async function getAllCategories() {
  return axios.get(`${urlApi}categories`, { headers })
    .then(res => res.data)
    .catch(err => console.warn('Erro ao consultart lista de categorias', err))
}

export async function getAllComments(postId) {
  return axios.get(`${urlApi}posts/${postId}/comments`, { headers })
    .then(res => res.data)
    .catch(err => console.warn('Erro ao consultart lista de comentários', err))
}

export async function newCommentApi(comment) {
  comment.id = uuid(comment.id)
  return axios.post(`${urlApi}comments`, comment, { headers })
    .then(res => res.data)
    .catch(err => console.warn('Erro ao criar novo comentário', err))
}

export function deleteCommentApi(id) {
  return axios.delete(`${urlApi}comments/${id}`, { headers })
    .then(res => res.data)
    .catch(err => console.warn('ERRO AO EXCLUIR COMENTARIO', err))
}

export function saveEditCommentApi(id, comment) {
  return axios.put(`${urlApi}comments/${id}`, { body: comment }, { headers })
    .then(res => res.data)
    .catch(err => console.warn('ERRO AO ATUALIZAR COMENTÁRIO', err))
}

export function voteCommentApi(id, vote) {
  return axios.post(`${urlApi}comments/${id}`, { option: vote }, { headers })
    .then(res => res.data)
    .catch(err => console.warn('ERRO AO VOTAR COMENTÁRIO', err))
}

export function newPostApi(post) {
  return axios.post(`${urlApi}posts`, post, { headers })
    .then(res => console.log('CADASTROU NOVO POST', res.data))
    .catch(err => console.warn('ERRO', err))
}