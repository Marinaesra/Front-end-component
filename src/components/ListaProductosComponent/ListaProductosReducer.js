import { LOAD_PRODUCTS } from "./ListaProductosAction"


const initialState = {
    products: []
}

const listaProductosReducer = (state = initialState, action) => {
    const{
        type,
        payload
    } = action

    switch (type) {
        case LOAD_PRODUCTS:
            return {
                ...state,
                products: payload.products
            }
        default:
            return state
    }
}

export default listaProductosReducer