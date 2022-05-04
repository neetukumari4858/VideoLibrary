import { Navigate ,useLocation } from "react-router-dom";
import {useAuth} from "./../Context/AuthContext"
const RequireAuth=({children})=>{
    const {isLogedIn}=useAuth();
    console.log(isLogedIn,"islogedin")
    const location =useLocation();
    console.log(location,"location")
    return isLogedIn ?
        children
    :
        <Navigate to="/loginPage" state={{from:location}} replace/>
    
}
export {RequireAuth}