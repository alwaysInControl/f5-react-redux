import {combineReducers, legacy_createStore as createStore, applyMiddleware} from "redux";
import {userReducer} from "./userReducer";
import {todosReducer} from "./todosReducer";
import {postsReducer} from "./postsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    user: userReducer,
    todos: todosReducer,
    posts: postsReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))