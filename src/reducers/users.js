import { RECEIVE_USER_LOGGED } from './../actions/users'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USER_LOGGED:
      return action.userLogged
    default:
      return state
  }
}