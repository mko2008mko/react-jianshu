import { fromJS } from "immutable";
import axios from "axios";

const GET_HOME_DATA = "GET_HOME_DATA";
const ADD_ARTICLE_LIST = "ADD_ARTICLE_LIST";
const SCROLL_EVENT = "SCROLL_EVENT";
const CHANGE_PAGE = "CHANGE_PAGE";


const initState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    recommendWriter: [],
    page: 1,
    isShow: false,
    rwPage: 1,
    rwTotalPage: 1

})

export const homeReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_HOME_DATA:
            return state.merge({
                topicList: action.topicList,
                articleList: action.articleList,
                recommendList: action.recommendList,
                recommendWriter: action.recommendWriter,
                rwTotalPage: action.rwTotalPage
            })
        case ADD_ARTICLE_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(action.newArticleList),
                page: action.nextPage
            })

        case SCROLL_EVENT:
            return state.set('isShow', action.isShow);
        case CHANGE_PAGE:
            return state.set('rwPage',
                state.get('rwPage') >= state.get('rwTotalPage') 
                ? 1 : state.get('rwPage') + 1)
        default:
            return state;
    }
}

const getHomeDataSuccess = (result) => {
    return {
        type: GET_HOME_DATA,
        topicList: fromJS(result.topicList),
        articleList: fromJS(result.articleList),
        recommendList: fromJS(result.recommendList),
        recommendWriter: fromJS(result.recommendWriter),
        rwTotalPage: Math.ceil(result.recommendWriter.length / 5)
    }
}

export const getHomeDate = () => {
    return dispatch => {
        axios.get('api/home.json')
            .then(res => {
                // console.log(res.data.data);
                dispatch(getHomeDataSuccess(res.data.data))
            }).catch(() => {
                console.log('error');
            })
    }
}

const getMoreListSuccess = (result, page) => {
    return {
        type: ADD_ARTICLE_LIST,
        newArticleList: fromJS(result),
        nextPage: page + 1
    }
}

export const getMoreList = (page) => {
    return dispatch => {
        axios.get(`api/homeList.json?page=${page}`)
            .then(res => {
                dispatch(getMoreListSuccess(res.data.data, page))
            }).catch(() => {
                console.log('error');
            })
    }
}

export const backTopIsShow = (isshow) => {
    return {
        type: SCROLL_EVENT,
        isShow: isshow
    }
}

export const changePage = () => {
    return {
        type: CHANGE_PAGE
    }
}