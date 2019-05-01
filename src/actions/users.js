export const RECEIVE_USER_LOGGED = 'RECEIVE_USER_LOGGED'

export function receiveUserLogged (userLogged) {
  console.warn('>>>>>>>>>>>>.', userLogged)
  return {
    type: RECEIVE_USER_LOGGED,
    userLogged
  }
}
