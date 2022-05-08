import { Navigate ,useLocation } from "react-router-dom";
import {useAuth} from "./../Context/AuthContext"

const RequireAuth=({children})=>{
    const {isLogedIn}=useAuth();
    const location =useLocation();
    return isLogedIn ?
        children
    :
    <Navigate to="/loginPage" state= {{from:location}} replace/>
}
export {RequireAuth}