import { getAllPosts } from './_DATA'

export function getInitialData() {
  return Promise.all([
    getAllPosts()
  ]).then(([posts]) => ({
    posts
  }))
}