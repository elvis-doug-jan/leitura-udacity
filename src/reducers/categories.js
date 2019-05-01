import { RECEIVE_ALL_CATEGORIES } from './../actions/categories'

const initialState = [
  {
    name: '',
    path: ''
  }
]

export default function posts(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return  action.categories
    default:
      return state
  }
}