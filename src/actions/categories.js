export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES'

export function receiveAllCategories(categories) {
  return {
    type: RECEIVE_ALL_CATEGORIES,  
    ...categories
  }
}