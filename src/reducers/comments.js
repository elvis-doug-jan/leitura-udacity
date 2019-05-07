import { RECEIVE_ALL_COMMENTS } from './../actions/comments'

const initialState = [
  {
    id: '',
    parentId: '',
    timestamp: 0,
    body: '',
    author: '',
    voteScore: 0,
    deleted: false,
    parentDeleted: false
  }
]

export default function comments(state = initialState, action) {
  console.log('REDUCER', action.comments)
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return action.comments  
    default:
      return state
  }
}