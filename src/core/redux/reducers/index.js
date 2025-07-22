import { combineReducers } from "redux";
import loginPageReducer from "../../../pages/LoginPage/LoginPageReducer";
import detailsProductReducer from "../../../components/DetailsProductComponent/DetailsProductComponentReducer";
import listProductsReducer from "../../../components/ListProductsComponent/ListProductsReducer";


const reducer = combineReducers({
    loginPageReducer,
    listProductsReducer,
    detailsProductReducer,
    
})

export default reducer