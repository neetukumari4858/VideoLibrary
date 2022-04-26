const PlayListReducer=(state,action)=>{

    const {type,payload}=action 
    switch (type) {
        case "CREATE_PLAYLIST":
            return [...state,payload.playList]
        case "ADD_TO_PLAYLIST":
            return state.map((playlist)=>
            playlist._id===payload.Playlist._id? {...playlist,videos : [...playlist.videos,payload.video]}:playlist)
        case "REMOVE_PLAYLIST":
            const removedPlaylist = state.filter((item) => item._id !== payload)
            return removedPlaylist
        // case "REMOVE_VIDEO":
        //     const removedPlaylistVideo=state.videos.filter((item)=>item._id!== payload)
        //     console.log(removedPlaylistVideo,"removedPlaylistVideo");
        //     console.log(removedPlaylist);
    }
}
export {PlayListReducer}