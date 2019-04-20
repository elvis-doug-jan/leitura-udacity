import axios from 'axios'

export async function getAllPosts() {
  return axios.get('http://localhost:3001/posts', { headers: { 'Authorization': 'whatever-you-want' } })
}