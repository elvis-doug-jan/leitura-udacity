import { RECEIVE_USER_LOGGED } from './../actions/users'

export default function users(state = {}, action) {
  console.log('SSSSSSTTTTTTTAAAAAAAATTTTTTTTTTEEEEEEEE', state)
  switch (action.type) {
    case RECEIVE_USER_LOGGED:
      return action.userLogged
    default:
      return state
  }
}