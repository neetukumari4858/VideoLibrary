const HistoryReducer=(HistoryState,action)=>{
    const {HistoryVideos} =HistoryState;
    const HistoryItem = HistoryVideos.find((HistoryPageItems) => HistoryPageItems._id === action.payload._id,)
    switch (action.type) {
        case "ADD_TO_History":
            if (HistoryItem){
                return {...HistoryState}
            }else {
            }
            return {...HistoryState, HistoryVideos:[...HistoryVideos,{...action.payload}]};
        case "REMOVE_From_History":
        return {
            ...HistoryState,
            HistoryVideos: [...HistoryVideos.filter((removeItem) => removeItem._id !== action.payload._id)]
          };
        default:
            return {...HistoryState} 
    }
}
export {HistoryReducer}
