import { createContext, useContext ,useReducer} from "react";
import {watchlistReducer} from "./../Reducers/WatchLaterReducer"

const WatchlistContext=createContext();
const useWatchlist=()=>useContext(WatchlistContext);

const WatchlistContextProvider=({children})=>{
    const [watchlistState,watchlistDispatch]=useReducer(watchlistReducer,
        { watchListVideos:[]}
    )
    return <WatchlistContext.Provider value={{watchlistState,watchlistDispatch}}>
        {children}
    </WatchlistContext.Provider>

}
export {useWatchlist,WatchlistContextProvider};