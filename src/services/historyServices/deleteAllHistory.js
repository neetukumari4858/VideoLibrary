import axios from 'axios'

const deleteAllHistory = async (token, HistoryDispatch) => {
  try {
    const response = await axios.delete('/api/user/history/all', {
      headers: { authorization: token },
    })
    console.log(response,"alldelete");
    HistoryDispatch({
      type: 'DELETE_ALL_HISTORY',
      payload: response.data.history,
    })
  } catch (error) {
    console.log(error)
  }
}
export { deleteAllHistory }
