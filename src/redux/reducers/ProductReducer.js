import ActionType from './../constants/ActionType';

const initialState = {
  products: [],  // Ensure the state has a products array
};

export const productReducers = (state = initialState, {type, payload}) =>{
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return {...state, products:payload}
    default:
      return state
  }
}

export const selectedProductReducers = (state = {}, {type, payload}) =>{
  switch (type) {
    case ActionType.SELECTED_PRODUCT:
      return {...state, ...payload}
    case ActionType.REMOVE_SELECTED_PRODUCT:
      return {}
    default:
      return state
  }
}
