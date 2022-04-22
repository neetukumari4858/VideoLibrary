import { createContext, useContext, useReducer } from "react";
import { ModalReducer  } from "./../Reducers/ModelReducer"

const ModalContext = createContext();
const useModal = () => useContext(ModalContext);
const ModalContextProvider = ({ children }) => {
  const [ModalState, Modaldispatch] = useReducer( ModalReducer, { openCloseModal: false });
  return (
    <ModalContext.Provider value={{ ModalState, Modaldispatch}}>
      {children}
    </ModalContext.Provider>
  );
};
export { useModal, ModalContextProvider };