import { createContext, useContext, useReducer } from "react";
import {PlayListReducer} from "./../Reducers/PlaylistReducer";

const PlayListContext=createContext()
const usePlayList=()=>useContext(PlayListContext)
const playlists=[]

const PlayListContextProvider=({children})=>{
    const [Playlist,PlayListDispatch]=useReducer( PlayListReducer,{playlists:[]})
    return <PlayListContext.Provider value={{Playlist,PlayListDispatch}} >
        {children}
    </PlayListContext.Provider>
}
export {usePlayList,PlayListContextProvider}
