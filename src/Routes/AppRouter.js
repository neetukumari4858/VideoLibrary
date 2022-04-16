import {Home,VideoListing ,Login ,SignUp,WatchList} from "./../Page/index"
import { Route, Routes} from "react-router-dom";

const AppRouter=()=>{
    return (
       <>
        <Routes>
            <Route path="/" element= {<Home/>}/>
            <Route path="/VideoListing" element= {<VideoListing/>}/>
            <Route path="/WatchLater" element= {<WatchList/>}/>
            <Route path="/loginPage" element= {<Login/>}/>
            <Route path="/SignUpPage" element= {<SignUp/>}/>
        </Routes>
       </>
    )
}
export {AppRouter}