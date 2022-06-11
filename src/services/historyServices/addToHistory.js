// import axios from 'axios'

// const addToHistory = async (video, token, historyDispatch) => {
//   try {
//     const response = await axios.post(
//       '/api/user/history',
//       { video },
//       { headers: { authorization: token } },
//     )
//     console.log(response,"reponse,hi");
//     historyDispatch({ type: 'ADD_TO_HISTORY', payload: response.data.history })
//   } catch (error) {
//     console.error(error)
//   }
// }

// export { addToHistory }

import axios from "axios"

const addToHistory = async (video,token,HistoryDispatch) => {
    try{
        const response = await axios.post("/api/user/history",{video},{headers:{authorization:token}})
        console.log(response,"cur");
     HistoryDispatch({type:'ADD_TO_HISTORY', payload:response.data.history})   
    }
    
    catch(error){
        console.error(error);
    }

}

export {addToHistory}
