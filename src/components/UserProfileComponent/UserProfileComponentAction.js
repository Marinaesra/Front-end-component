export const LOAD_USERS = 'LOAD_USERS'


export const loadUser = (users) => {
    return {
        type: LOAD_USERS,
        payload: {
            users
        }
    }
}