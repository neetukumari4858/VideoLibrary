const HistoryReducer=(HistoryState,historyAction)=>{
    const {HistoryVideos} =HistoryState;
    // const HistoryItem = HistoryVideos.find((HistoryPageItems) => HistoryPageItems._id === historyAction.payload._id)
    switch (historyAction.type) {
        case "ADD_TO_HISTORY":
            return {...HistoryState, HistoryVideos:historyAction.payload};

        case "DELETE_HISTORY":
        return {
            ...HistoryState,
            HistoryVideos:historyAction.payload
          };
        case "DELETE_ALL_HISTORY":

            return { ...HistoryState,
                HistoryVideos: HistoryVideos
            }
        default:
            return HistoryState
    }
}
export {HistoryReducer}
