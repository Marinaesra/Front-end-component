import { combineReducers } from "redux";
import loginPageReducer from "../../../pages/LoginPage/LoginPageReducer";
import listaProductosReducer from "../../../components/ListaProductosComponent/ListaProductosReducer";


const reducer = combineReducers({
    loginPageReducer,
    listaProductosReducer
})

export default reducer