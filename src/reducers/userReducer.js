const INITIAL_STATE = {
    id: null,
    uname: '',
    email: '',
    role: ''
}

export const userReducer=(state=INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            // titik tiga spread operator dan concat
            console.log("Reducers:", action.payload)
            return { ...state, ...action.payload }
        case "LOGOUT":
            return INITIAL_STATE
        default:
            return state;
    }
}