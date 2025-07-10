export const LOAD_PRODUCTS = 'LOAD_PRODUCTS'

export const loadProductsActions = (payload) => {
    return {
        type: LOAD_PRODUCTS,
        payload
    }
}