import { combineReducers } from "redux";
import HomeReducer from './home';
import LoginReducer from './login';
import ModalReducer from "./modal";
import ProfileReducer from "./profile";

const RootReducer = combineReducers({
    HomeReducer,
    LoginReducer,
    ModalReducer,
    ProfileReducer,
})

export default RootReducer