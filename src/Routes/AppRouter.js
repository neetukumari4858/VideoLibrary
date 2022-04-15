import {Home,VideoListing ,Login ,SignUp} from "./../Page/index"
import { Route, Routes} from "react-router-dom";

const AppRouter=()=>{
    return (
       <>
        <Routes>
            <Route path="/" element= {<Home/>}/>
            <Route path="/VideoListing" element= {<VideoListing/>}/>
            <Route path="/loginPage" element= {<Login/>}/>
            <Route path="/SignUpPage" element= {<SignUp/>}/>
        </Routes>
       </>
    )
   
}
export {AppRouter}