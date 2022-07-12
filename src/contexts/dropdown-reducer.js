const dropdownReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SHOW_CART":
      return { ...state, isShow: !state.isShow };
    case "ADD_ITEM":
      return { ...state, cartList: action.payload };
    case "REMOVE_ITEM":
      return { ...state, cartList: action.payload };
    case "TOTAL_QUANTITY":
      return { ...state, totalQuantity: action.payload };
    case "TOTAL_COST":
      return { ...state, totalCost: action.payload };
    default:
      throw new Error();
  }
};

export const ACTION = {
  TOGGLE: "TOGGLE_SHOW_CART",
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  TOTAL_QUANTITY: "TOTAL_QUANTITY",
  TOTAL_COST: "TOTAL_COST",
};

export default dropdownReducer;
