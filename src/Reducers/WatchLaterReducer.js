
const watchlistReducer=(watchlistState,action)=>{
    const {watchListVideos} =watchlistState;
    const cardItem = watchListVideos.find((cardPageItems) => cardPageItems._id === action.payload._id,)
    switch (action.type) {
        case "ADD_TO_WATCHLIST":
            if (cardItem){
                return {...watchlistState}
            }else {

            }
            return {...watchlistState, watchListVideos:[...watchListVideos,{...action.payload}]};
        case "REMOVE_From_WatchList":
        return {
            ...watchlistState,
            watchListVideos: [...watchListVideos.filter((removeItem) => removeItem._id !== action.payload._id)]
          };
        default:
            return {...watchlistState} 
    }
}
export {watchlistReducer}
