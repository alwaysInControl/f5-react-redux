import {legacy_createStore as createStore} from "redux";
import {userReducer} from "./userReducer";

export default createStore(userReducer)