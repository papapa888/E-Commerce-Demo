import { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangedListener,
  signOutUser,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase";
import userReducer, { USER_ACTION } from "./user-reducer";

export const userDetailContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const initialState = {
  currentUser: {},
};

const UserContext = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  //   const [currentUser, setCurrentUser] = useState(null);
  const { currentUser } = state;
  console.log(currentUser);

  useEffect(() => {
    const unsub = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch({ type: USER_ACTION.SET_USER, payload: user });
    });

    return unsub;
  }, []);

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION.SET_USER, payload: user });
  };
  return (
    <userDetailContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </userDetailContext.Provider>
  );
};

export default UserContext;
