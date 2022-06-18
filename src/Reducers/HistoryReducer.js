const HistoryReducer = (HistoryState, historyAction) => {
  const { HistoryVideos } = HistoryState

  switch (historyAction.type) {
    case 'ADD_TO_HISTORY':
      return { ...HistoryState, HistoryVideos: historyAction.payload }

    case 'DELETE_HISTORY':
      return {
        ...HistoryState,
        HistoryVideos: historyAction.payload,
      }
    case 'DELETE_ALL_HISTORY':
      return { ...HistoryState, HistoryVideos: historyAction.payload }
    default:
      return HistoryState
  }
}
export { HistoryReducer }
