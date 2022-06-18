import axios from "axios";
import { toast } from "react-toastify";

const deletePlaylist = async (playlistId, token, PlayListDispatch ) => {
  try {
    const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: { authorization: token },
    });
    PlayListDispatch ({type:"PLAYLIST_DELETE", payload:response.data.playlists})
    toast.info("playlist deleted from playlist")
  } catch (error) {
      console.error(error)
  }
};

export{deletePlaylist}