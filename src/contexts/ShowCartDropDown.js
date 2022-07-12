import { createContext, useEffect, useReducer } from "react";
import dropdownReducer, { ACTION } from "./dropdown-reducer";

export const DropDownContext = createContext({
  isShow: false,
  setIsShow: () => {},
  cartList: [],
  addToList: () => {},
  totalQuantity: 0,
  removeToList: () => {},
  removeEntireItem: () => {},
  totalCost: 0,
});

const reduceItem = (list, itemToReduce) => {
  const result = list.find((item) => item.id === itemToReduce.id);

  if (result.quantity - 1 !== 0) {
    return list.map((item) =>
      item.id === itemToReduce.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
  return list.filter((item) => item.id !== itemToReduce.id);
};

const addItem = (list, itemToAdd) => {
  const itemInCart = list.find((item) => item.id === itemToAdd.id);

  if (itemInCart) {
    return list.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...list, { ...itemToAdd, quantity: 1 }];
};

const removeByX = (list, itemToRemove) => {
  return list.filter((item) => item.id !== itemToRemove.id);
};

const initialState = {
  isShow: false,
  cartList: [],
  totalQuantity: 0,
  totalCost: 0,
};

const ShowCartDropDown = ({ children }) => {
  //   const [isShow, setIsShow] = useState(false);
  //   const [cartList, setCartList] = useState([]);
  //   const [totalQuantity, setTotalQuantity] = useState(0);
  //   const [totalCost, setTotalCost] = useState(0);

  const [state, dispatch] = useReducer(dropdownReducer, initialState);
  const { isShow, cartList, totalQuantity, totalCost } = state;

  useEffect(() => {
    calculateTotalQuantity();
  }, [cartList]);

  useEffect(() => {
    calculateTotal();
  }, [cartList]);

  const setIsShow = () => {
    dispatch({ type: ACTION.TOGGLE });
  };

  const calculateTotal = () => {
    const total = cartList.reduce((sum, currentItem) => {
      return sum + currentItem.price * currentItem.quantity;
    }, 0);
    dispatch({ type: ACTION.TOTAL_COST, payload: total });
  };

  const addToList = (productToAdd) => {
    dispatch({
      type: ACTION.ADD_ITEM,
      payload: addItem(cartList, productToAdd),
    });
  };

  const removeEntireItem = (productToRemove) => {
    dispatch({
      type: ACTION.REMOVE_ITEM,
      payload: removeByX(cartList, productToRemove),
    });
  };

  const removeToList = (productToRemove) => {
    dispatch({
      type: ACTION.REMOVE_ITEM,
      payload: reduceItem(cartList, productToRemove),
    });
  };

  const calculateTotalQuantity = () => {
    const total = cartList.reduce((sum, item) => {
      return (sum += item.quantity);
    }, 0);
    dispatch({ type: ACTION.TOTAL_QUANTITY, payload: total });
  };

  const value = {
    isShow,
    setIsShow,
    cartList,
    addToList,
    totalQuantity,
    removeToList,
    removeEntireItem,
    totalCost,
  };

  return (
    <DropDownContext.Provider value={value}>
      {children}
    </DropDownContext.Provider>
  );
};

export default ShowCartDropDown;
