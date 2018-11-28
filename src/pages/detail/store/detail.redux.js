import axios from "axios";
import { fromJS } from "immutable";

const GET_DETAIL_DATA = "GET_DETAIL_DATA";

const initState = fromJS({
    title: '',
    content: ''
})

export const detailReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_DETAIL_DATA:
            return state.merge({
                title:action.title,
                content:action.content
            });

        default:
            return state;
    }
}

const getDetailSuccess = (data) => {
    return {
        type:GET_DETAIL_DATA,
        title:data.title,
        content:data.content
    }
}

export const getDetailData = (id) => {
    return dispatch => {
        axios.get(`/api/detail.json?id=${id}`)
            .then(res => {
                // console.log(res.data.data);
                dispatch(getDetailSuccess(res.data.data))
            }).catch(() => {
                console.log('error');
            })
    }
}