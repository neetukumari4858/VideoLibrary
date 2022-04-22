import { createContext, useContext, useReducer } from "react";

const PlayListContext=createContext()
const usePlayList=()=>useContext(PlayListContext)
const initialState=[]

const PlayListReducer=(state,action)=>{
    const {type,payload}=action 
    switch (type) {
        case "CREATE_PLAYLIST":
            return [...state,payload.playList]
        default:
    }
}

const PlayListContextProvider=({children})=>{
    const [Playlist,PlayListDispatch]=useReducer( PlayListReducer,initialState)
    return <PlayListContext.Provider value={{Playlist,PlayListDispatch}} >
        {children}

    </PlayListContext.Provider>
}
export {usePlayList,PlayListContextProvider}
