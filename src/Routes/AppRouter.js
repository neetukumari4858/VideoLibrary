import {Home,VideoListing ,Login ,SignUp,WatchList,Liked,History ,Playlist,SinglePlayList } from "./../Page/index"
import { Route, Routes} from "react-router-dom";
import { RequireAuth } from "./../Utils/RequireAuth";

const AppRouter=()=>{
    return (
       <>
        <Routes>
            
            <Route path="/" element={<RequireAuth> <Home /></RequireAuth>}/>
            <Route path="/VideoListing" element={<VideoListing/>} />
            <Route path="/LikedPage" element={<RequireAuth> <Liked/></RequireAuth>}/>
            <Route path="/WatchLater" element={<RequireAuth> <WatchList/></RequireAuth>}/>
            <Route path="/HistoryPage" element={<RequireAuth> <History /></RequireAuth>}/>
            <Route path="/PlaylistPage" element={<RequireAuth> <Playlist /></RequireAuth>}/>
            <Route path="/PlaylistPage/:id" element={<RequireAuth> <SinglePlayList/></RequireAuth>}/>
            <Route path="/loginPage" element={ <Login/>}/>
            <Route path="/SignUpPage" element={ <SignUp/>}/>
            
            {/* <Route path="/" element= {<Home/>}/>
            <Route path="/VideoListing" element= {<VideoListing/>}/>
            <Route path="/WatchLater" element= {<WatchList/>}/>
            <Route path="/LikedPage" element= {<Liked/>}/>
            <Route path="/HistoryPage" element= {<History/>}/>
            <Route path="/PlaylistPage" element= {<Playlist/>}/>
            <Route path="/PlaylistPage/:id" element= {<SinglePlayList/>}/>
            <Route path="/loginPage" element= {<Login/>}/>
            <Route path="/SignUpPage" element= {<SignUp/>}/> */}
        </Routes>
       </>
    )
}
export {AppRouter}
