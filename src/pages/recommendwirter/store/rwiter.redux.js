import axios from "axios";
import { fromJS } from "immutable";
const GET_RWRITER_DATA = "GET_RWRITER_DATA";

const initState = fromJS({
    rwriterList: [],
    page: 1
})

export const rwriterReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_RWRITER_DATA:
            return state.set('rwriterList', state.get('rwriterList').concat(action.rwriterList))
                .set('page', action.page)
        default:
            return state;
    }
}

const getrwriterDataSuccess = (result, page) => {
    return {
        type: GET_RWRITER_DATA,
        rwriterList: fromJS(result),
        page: page + 1
    }
}

export const getRWriterData = (page) => {

    return dispatch => {
        axios.get(`api/recommendWriter.json?page=${page}`)
            .then(res => {

                dispatch(getrwriterDataSuccess(res.data.data, page))
            }).catch(() => {
                console.log('error');
            })
    }
}