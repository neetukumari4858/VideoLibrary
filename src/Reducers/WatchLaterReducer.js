
const watchlistReducer=(watchlistState,action)=>{
    const {watchListVideo} =watchlistState;
    switch (action.type) {
        case "ADD_TO_WATCHLIST":
            return {...watchlistState,watchListVideo:[...watchlistState. watchListVideos,action.payload]};
        default:
            return {...watchlistState} 
    }
}
export {watchlistReducer}
