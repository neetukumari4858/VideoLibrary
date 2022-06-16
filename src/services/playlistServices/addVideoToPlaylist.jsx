import axios from "axios";

const addVideoToPlaylist = async (playlistId, video, token, PlayListDispatch) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      { headers: { authorization: token } }
    );
    PlayListDispatch({
      type: "ADD_VIDEO_TO_PLAYLIST",
      payload: {
        playlistId: response.data.playlist._id,
        playlistData: response.data.playlist,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export { addVideoToPlaylist };
