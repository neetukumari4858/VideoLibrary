import axios from "axios"

const createPlaylist = async (playlist,PlayListDispatch,token) => {
    const response = await axios.post("/api/user/playlists", {playlist}, {headers: {authorization: token}})
    try{
        if(response.status === 201){
            PlayListDispatch({type:"CREATE_PLAYLIST", payload:response.data.playlists})
        }

    }catch(error){
        console.error(error);
    }
}
export{createPlaylist}