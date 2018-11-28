import { fromJS } from "immutable";
import axios from "axios";


const SEARCH_FOCUS = 'header/SEARCH_FOCUS';
const SEARCH_BLUR = 'header/SEARCH_BLUR';
const GET_HEADER_LIST = 'header/GET_HEADER_LIST';
const MOUSE_IN = "header/MOUSE_IN";
const MOUSE_OUT = "header/MOUSE_OUT";
const CHANGE_PAGE = "header/CHANGE_PAGE";

const initState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn: false
})

export const headersReducer = (state = initState, action) => {
    switch (action.type) {
        case SEARCH_FOCUS:
            // return { focused: true };
            return state.set('focused', true);
        case SEARCH_BLUR:
            // return { focused: false };
            return state.set('focused', false);
        case GET_HEADER_LIST:
        return state.merge({
            list:action.data,
            totalPage:action.totalPage
        })
            // return state.set('list', action.data).set('totalPage', action.totalPage);
        case MOUSE_IN:
            return state.set('mouseIn', true);
        case MOUSE_OUT:
            return state.set('mouseIn', false);
        case CHANGE_PAGE:
            return state.set('page', state.get('page')>=state.get('totalPage')?1:state.get('page')+1);
        default:
            return state;
    }
}

export const searchFocus = () => {
    return { type: SEARCH_FOCUS };
}

export const searchBlur = () => {
    return { type: SEARCH_BLUR };
}

const getListSuccess = (data) => {
    return { type: GET_HEADER_LIST, data: fromJS(data), totalPage: Math.ceil(data.length / 10) };
}

export const getList = () => {
    return dispatch => {
        axios.get('api/headerlist.json')
            .then(res => {
                // console.log(res.data)
                dispatch(getListSuccess(res.data.data))
            })
            .catch(() => {
                console.log('error')
            })
    }
}

export const mouseInChange = () => {
    return { type: MOUSE_IN };
}

export const mouseOutChange = () => {
    return { type: MOUSE_OUT };
}

export const changPage = () => {
    return { type: CHANGE_PAGE };
}