import { createContext, useContext, useReducer } from "react";
import { ModalReducer  } from "./../Reducers/ModelReducer"

const ModalContext = createContext();
const useModal = () => useContext(ModalContext);
const ModalContextProvider = ({ children }) => {
  const [ModalState, Modaldispatch] = useReducer( ModalReducer, { openCloseModal: false, video:{}});
  // console.log(ModalState.video,'video')
  return (
    <ModalContext.Provider value={{ ModalState, Modaldispatch}}>
      {children}
    </ModalContext.Provider>
  );
};
export { useModal, ModalContextProvider };