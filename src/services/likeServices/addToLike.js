import axios from 'axios';

const addToLike = async (video, token, likedDispatch) => {
  try {
    const response = await axios.post(
      '/api/user/likes',
      { video },
      { headers: { authorization: token } },
    )
    likedDispatch({ type: 'LIKED_VIDEO', payload: response.data.likes })
  } catch (error) {
    console.log(error)
  }
}
export{addToLike}
