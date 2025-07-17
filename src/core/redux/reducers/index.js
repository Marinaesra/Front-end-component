import { combineReducers } from "redux";
import loginPageReducer from "../../../pages/LoginPage/LoginPageReducer";
import listaProductosReducer from "../../../components/ListaProductosComponent/ListaProductosReducer";
import detailsProductReducer from "../../../components/DetailsProductComponent/DetailsProductComponentReducer";


const reducer = combineReducers({
    loginPageReducer,
    listaProductosReducer,
    detailsProductReducer
})

export default reducer