const watchlistReducer = (watchlistState, action) => {
  const { watchListVideos } = watchlistState

  switch (action.type) {
    case 'WATCH_LATER_VIDEO':
      return { ...watchlistState, watchListVideos: action.payload }
    case 'DELETE_WATCH_LATER':
      return { ...watchlistState, watchListVideos: action.payload }
    default:
      return { ...watchlistState }
  }
}
export { watchlistReducer }
