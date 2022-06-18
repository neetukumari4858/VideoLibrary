import axios from 'axios';

const getPlaylist = async (token, PlayListDispatch) => {
  try {
    const response = await axios.get('/api/user/playlists', {
        headers: { authorization: token },
    })
    PlayListDispatch({
      type: 'CREATE_PLAYLIST',
      payload: response.data.playlists,
    })
  } catch (error) {
    console.error(error)
  }
}
export { getPlaylist }


















