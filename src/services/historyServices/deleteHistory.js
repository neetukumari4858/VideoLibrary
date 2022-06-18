import axios from 'axios'

const deleteHistory = async (_id, token, HistoryDispatch) => {
  try {
    const response = await axios.delete(`/api/user/history/${_id}`, {
      headers: { authorization: token },
    })
    HistoryDispatch({ type: 'DELETE_HISTORY', payload: response.data.history })
  } catch (error) {
    console.log(error)
  }
}
export { deleteHistory }
