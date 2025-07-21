import { combineReducers } from "redux";
import loginPageReducer from "../../../pages/LoginPage/LoginPageReducer";
import detailsProductReducer from "../../../components/DetailsProductComponent/DetailsProductComponentReducer";
import listProductsReducer from "../../../components/ListProductsComponent/ListProductsReducer";
import userProfileComponentReducer from "../../../components/UserProfileComponent/UserProfileComponentReducer";


const reducer = combineReducers({
    loginPageReducer,
    listProductsReducer,
    detailsProductReducer,
    userProfileComponentReducer
})

export default reducer