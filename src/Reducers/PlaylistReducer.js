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
            console.log(removedPlaylist,"removedPlaylist")
            return removedPlaylist
        case "REMOVE_VIDEO":
            const removedPlaylistVideo=state.map(Playlist=>{
                return Playlist._id===payload.playlist._id? {...Playlist,videos:Playlist.videos.filter((video)=>{
                    return  video._id!==payload.video._id
                })}:Playlist
            })
            return removedPlaylistVideo
    }
}
export {PlayListReducer}