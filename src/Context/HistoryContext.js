import { createContext, useContext ,useReducer} from "react";
import {HistoryReducer} from "./../Reducers/HistoryReducer"

const HistoryContext=createContext();
const useHistory=()=>useContext(HistoryContext);

const HistoryContextProvider=({children})=>{
    const [HistoryState,HistoryDispatch]=useReducer(HistoryReducer,
        { HistoryVideos:[]}
    )
    return <HistoryContext.Provider value={{HistoryState,HistoryDispatch}}>
        {children}
    </HistoryContext.Provider>
}
export {useHistory,HistoryContextProvider};