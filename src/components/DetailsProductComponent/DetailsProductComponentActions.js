export const LOAD_PRODUCT = "LOAD_PRODUCT";
export const SAVE_PRODUCT_DETAILS = "SAVE_PRODUCT_DETAILS";

export const detailsProductAction = (payload) => {
  return {
    type: LOAD_PRODUCT,
    payload,
  };
};

export const saveDetailsProduct = (payload) => {
  return {
    type: SAVE_PRODUCT_DETAILS,
    payload,
  };
};
