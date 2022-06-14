import axios from "axios";

const deleteVideoFromPlaylist = async (_id, playlistId, token, PlayListDispatch) => {
  try {
    const response = await axios.delete(`/api/user/playlists/${playlistId}/${_id}`, {
      headers: { authorization: token },
    });
    PlayListDispatch({
      type: "REMOVE_VIDEO_FROM_PLAYLIST",
      payload: {
        playlistdata: response.data.playlist,
        playlistId: response.data.playlist._id,
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
    console.error(error);
  }
};

export { deleteVideoFromPlaylist };
