import { createContext, useContext, useReducer } from "react";
import { ModelReducer  } from "./../Reducers/ModelReducer";

const ModelContext = createContext();
const useModel = () => useContext(ModelContext);
const ModelContextProvider = ({ children }) => {
  const [modelState, modeldispatch] = useReducer( ModelReducer, { openCloseModel: false });
  return (
    <ModelContext.Provider value={{ modelState, modeldispatch}}>
      {children}
    </ModelContext.Provider>
  );
};
export { useModel, ModelContextProvider };