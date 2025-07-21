import { LOAD_USERS } from "./UserProfileComponentAction"

const initialState = {
    users: undefined
}

const userProfileComponentReducer = (state = initialState, action) =>{
    switch (action.type) {
        case LOAD_USERS:
            return {
                ...state,
                users:action.payload.users
            }
                default:
            return state
    }
}

export default userProfileComponentReducer
