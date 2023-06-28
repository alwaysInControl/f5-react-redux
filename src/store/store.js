import {combineReducers, legacy_createStore as createStore} from "redux";
import {userReducer} from "./userReducer";
import {todosReducer} from "./todosReducer";

const rootReducer = combineReducers({
    user: userReducer,
    todos: todosReducer
})

export default createStore(rootReducer)