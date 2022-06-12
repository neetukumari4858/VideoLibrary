const newPlaylist = (playlistId, playlists, playlistData) => {

  return playlists.reduce(
    (acc, cur) =>
      cur._id === playlistId ? [...acc, playlistData] : [...acc, cur],
    [],
  )
}

const PlayListReducer = (playlistState, playlistAction) => {
  const { type, payload } = playlistAction
  switch (type) {
    case 'CREATE_PLAYLIST':
      return { ...playlistState, playlists: playlistAction.payload }

    case 'ADD_TO_PLAYLIST': 
      return {
        ...playlistState,
        playlists: newPlaylist(
          playlistAction.payload.playlistId,
          playlistState.playlists,
          playlistAction.payload.playlistData,
        ),
      }

    //   return playlistState.map((playlist) =>
    //     playlist._id === payload.Playlist._id
    //       ? { ...playlist, videos: [...playlist.videos, payload.video] }
    //       : playlist,
    //   )
    case 'PLAYLIST_DELETE':
        return{ ...playlistState,playlists:playlistAction.payload}
        
    //   const removedPlaylist = playlistState.filter(
    //     (item) => item._id !== payload,
    //   )
    //   console.log(removedPlaylist, 'removedPlaylist')
    //   return removedPlaylist
    case 'REMOVE_VIDEO':
      const removedPlaylistVideo = playlistState.map((Playlist) => {
        return Playlist._id === payload.playlist._id
          ? {
              ...Playlist,
              videos: Playlist.videos.filter((video) => {
                return video._id !== payload.video._id
              }),
            }
          : Playlist
      })
      return removedPlaylistVideo
  }
}
export { PlayListReducer }
