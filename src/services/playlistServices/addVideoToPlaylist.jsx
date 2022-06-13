import axios from "axios";

const addVideoToPlaylist = async (id, video, token, PlayListDispatch) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/${id}`,
      { video },
      { headers: { authorization: token } }
    );
    PlayListDispatch({
      type: "ADD_TO_PLAYLIST",
      payload: {
        id: response.data.playlist._id,
        playlistData: response.data.playlist,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export { addVideoToPlaylist };
