import axios from 'axios'

export async function getAllPosts() {
  return axios.get('http://localhost:4000/posts', {
    headers: {
      'Authorization': 'whatever-you-want'
    }
  })
    .then(res => {
      return res.data
    })
    .catch(err => console.error('Erro ao consultar API de posts', err))
}