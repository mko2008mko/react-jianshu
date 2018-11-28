import axios from "axios";
import { fromJS } from "immutable";

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const UPDATE_REDIRECT = "UPDATE_REDIRECT";

const initState = fromJS({
    isLogin: false,
    redirectTo: '/'
})

export const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return state.set('isLogin', true);
        case LOGOUT_SUCCESS:
            return state.set('isLogin', false);
        case UPDATE_REDIRECT:
            return state.set('redirectTo', action.path);
        default:
            return state;
    }
}

const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS
    }
}

export const login = (act, pwd) => {
    return dispatch => {
        axios.get(`/api/login.json?act=${act}&pwd=${pwd}`)
            // axios.get(`/api/login.json`)
            .then(res => {
                if (res.data.success) {
                    dispatch(loginSuccess())
                }
            })
            .catch(() => {
                // console.log('error')
            })
    }
}

export const logOut = () => {
    return { type: LOGOUT_SUCCESS }
}

export const updateRedirect = (path) => {
    return { type: UPDATE_REDIRECT, path: path }
}