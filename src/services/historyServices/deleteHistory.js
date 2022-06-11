import axios from 'axios'

const deleteHistory = async (videoId, token,HistoryDispatch) => {
  try {
    const response = await axios.delete(`/api/user/history/${videoId}`, {
      headers: { authorization: token },
    })
    console.log(response,"delete");
   HistoryDispatch({ type: 'DELETE_HISTORY', payload: response.data.history })
  } catch (error) {
    console.log(error)
  }
}
export { deleteHistory }
