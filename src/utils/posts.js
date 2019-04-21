import { getAllPosts } from './ApiCalls'

export function getInitialData() {
  return Promise.all([
    getAllPosts()
  ]).then(([posts]) => ({
    posts
  }))
}