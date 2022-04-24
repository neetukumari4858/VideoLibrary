import { createContext, useContext, useReducer } from "react";

const PlayListContext=createContext()
const usePlayList=()=>useContext(PlayListContext)
const playlists=[]


const PlayListReducer=(state,action)=>{
    const {type,payload}=action 
    // console.log(payload,"payload")
    switch (type) {
        case "CREATE_PLAYLIST":
            return [...state,payload.playList]
        case "ADD_TO_PLAYLIST":
            return state.map((playlist)=>
                playlist._id===payload.Playlist._id? {...playlist,videos : [...playlist.videos,payload.video]}:playlist

        )
        default:
    }
}

const PlayListContextProvider=({children})=>{
    const [Playlist,PlayListDispatch]=useReducer( PlayListReducer,playlists)
    console.log(Playlist,"playlist")
    return <PlayListContext.Provider value={{Playlist,PlayListDispatch}} >
        {children}

    </PlayListContext.Provider>
}
export {usePlayList,PlayListContextProvider}
