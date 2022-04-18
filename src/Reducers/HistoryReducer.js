const HistoryReducer=(HistoryState,action)=>{
    const {HistoryVideos} =HistoryState;
    const HistoryItem = HistoryVideos.find((HistoryPageItems) => HistoryPageItems._id === action.payload)
    switch (action.type) {
        case "ADD_TO_HISTORY":
            if (HistoryItem){
                return {...HistoryState}
            }else {
            }
            return {...HistoryState, HistoryVideos:[...HistoryVideos,{...action.payload}]};
        case "REMOVE_FROM_HISTORY":
        return {
            ...HistoryState,
            HistoryVideos: [...HistoryVideos.filter((removeItem) => removeItem._id !== action.payload._id)]
          };
        case "CLEAR_ALL":
            HistoryVideos.length = 0
            return { ...HistoryState,
                HistoryVideos: HistoryVideos
            }
        default:
            return {...HistoryState} 
    }
}
export {HistoryReducer}
