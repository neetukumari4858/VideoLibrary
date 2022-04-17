import { createContext, useContext ,useReducer} from "react";
import {likedReducer} from "./../Reducers/LikedReducer"

const LikedContext=createContext();
const useLiked=()=>useContext(LikedContext);

const LikedContextProvider=({children})=>{
    const [likedState,likedDispatch]=useReducer(likedReducer,
        {likedVideos:[]}
    )
    return <LikedContext.Provider value={{likedState,likedDispatch}}>
        {children}
    </LikedContext.Provider>
}
export {useLiked,LikedContextProvider};