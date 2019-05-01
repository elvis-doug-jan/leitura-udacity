import axios from 'axios'

export async function getAllPosts() {
  return axios.get('http://localhost:4000/posts', {
    headers: {
      'Authorization': 'whatever-you-want'
    }
  })
    .then(res => res.data)
    .catch(err => console.error('Erro ao consultar API de posts', err))
}

export async function getAllCategories() {
  return axios.get('http://localhost:4000/categories', {
    headers: {
      'Authorization': 'whatever-you-want'
    }
  })
  .then(res => res.data)
  .catch(err => console.warn('Erro ao consultart lista de categorias', err))
}

export async function getAllComments(postId) {
  return axios.get(`http://localhost:4000/posts/${postId}/comments`, {
    headers: {
      'Authorization': 'whatever-you-want'
    }
  })
  .then(res => res.data)
  .catch(err => console.warn('Erro ao consultart lista de comentários', err))
}