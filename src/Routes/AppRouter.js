import {Home,VideoListing ,Login ,SignUp,WatchList,Liked} from "./../Page/index"
import { Route, Routes} from "react-router-dom";

const AppRouter=()=>{
    return (
       <>
        <Routes>
            <Route path="/" element= {<Home/>}/>
            <Route path="/VideoListing" element= {<VideoListing/>}/>
            <Route path="/WatchLater" element= {<WatchList/>}/>
            <Route path="/LikedPage" element= {<Liked/>}/>
            <Route path="/loginPage" element= {<Login/>}/>
            <Route path="/SignUpPage" element= {<SignUp/>}/>
        </Routes>
       </>
    )
}
export {AppRouter}