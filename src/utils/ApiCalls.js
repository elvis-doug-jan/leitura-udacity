import axios from 'axios'

export async function getAllPosts() {
  return axios.get('http://localhost:3001/posts', {
    headers: {
      'Authorization': 'whatever-you-want'
    }
  })
    .then(res => {
      console.warn('CHAMADA DA API', res.data)
      return res.data
    })
    .catch(err => console.error('Erro ao consultar API de posts', err))
}