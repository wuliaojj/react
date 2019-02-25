const Login = 'Login'
const Logout = 'Logout'

export function auth(state={isAuth:false,user:'李云龙'},action) {
    console.log(state);
    switch (action.type) {
        case Login:
            return {...state,isAuth:true}
        case Logout: 
            return { ...state, isAuth: false }
        default:
            return state
    }
}


export function login() {
    return { type: Login}
}
export function logout() {
    return { type: Logout }
}