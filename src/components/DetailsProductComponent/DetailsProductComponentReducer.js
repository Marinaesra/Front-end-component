import {
  LOAD_PRODUCT,
  SAVE_PRODUCT_DETAILS,
} from "./DetailsProductComponentActions";

const initialState = {
  productId: undefined,
  productDetails: undefined,
};

const detailsProductReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_PRODUCT:
      return {
        ...state,
        productId: payload.productId,
      };
    case SAVE_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: payload.productDetails,
      };
    default:
      return state;
  }
};

export default detailsProductReducer;
