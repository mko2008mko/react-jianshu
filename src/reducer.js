import { headersReducer } from "./components/header/store/redux";
import { combineReducers } from "redux-immutable";
import { homeReducer } from "./pages/home/store/home.redux";
import { detailReducer } from "./pages/detail/store/detail.redux.js";
import { loginReducer } from "./pages/login/store/login.redux";
import { rwriterReducer } from "./pages/recommendwirter/store/rwiter.redux";

export default combineReducers({ headersReducer, homeReducer, detailReducer, loginReducer, rwriterReducer });