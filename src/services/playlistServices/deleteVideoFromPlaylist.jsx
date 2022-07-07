import axios from "axios";

const deleteVideoFromPlaylist = async (
  _id,
  playlistId,
  token,
  PlayListDispatch
) => {
  try {
    console.log(  _id,
      playlistId,
      token,
      PlayListDispatch,"delete")
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}/${_id}`,
      {
        headers: { authorization: token },
      }
    );
    console.log(response,"re")
    PlayListDispatch({
      type: "REMOVE_VIDEO_FROM_PLAYLIST",
      payload: {
        payload: response.data.playlist,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export { deleteVideoFromPlaylist };
