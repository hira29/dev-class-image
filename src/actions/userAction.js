
export const loginAction = (data) => {
    console.log("Action :", data)
    return{
        type: "LOGIN_SUCCESS", 
        payload: data
    }
}

export const logoutAction=() => {
    localStorage.removeItem("tkn_name")
    return { 
        type: "LOGOUT"
    }
}