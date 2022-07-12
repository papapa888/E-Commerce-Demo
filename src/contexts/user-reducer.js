const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, currentUser: action.payload };
    default:
      throw new Error(`unhandled type ${action.type} in userReducer`);
  }
};

export default userReducer;

export const USER_ACTION = {
  SET_USER: "SET_USER",
};
