import axios from 'axios'

const getSinglePlaylist = async (token, setplaylistVideo, playlistId) => {
  try {
    const response = await axios.get(`/api/user/playlists/${playlistId}`, {
      headers: { authorization: token },
    })

    setplaylistVideo(response.data.playlist)
    console.log(response ,"getsingle");
  } catch (error) {
    console.error(error)
  }
}

export { getSinglePlaylist }
