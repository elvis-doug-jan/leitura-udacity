import { getAllPosts, getAllCategories, getAllComments } from './ApiCalls'

export function getInitialData() {
  return Promise.all([
    getAllPosts(),
    getAllCategories(),
    getAllComments()
  ]).then(([posts, categories, comments]) => ({
    posts,
    categories,
    comments
  }))
}