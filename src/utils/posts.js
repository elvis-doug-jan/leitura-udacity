import { getAllPosts, getAllCategories } from './ApiCalls'

export function getInitialData() {
  return Promise.all([
    getAllPosts(),
    getAllCategories()
  ]).then(([posts, categories]) => ({
    posts,
    categories
  }))
}