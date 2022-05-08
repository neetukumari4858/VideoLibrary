
import {useContext,createContext,useState, useEffect} from "react"
const AuthContext=createContext({isLogedIn:false})
const AuthProvider=({children})=>{
    const userLoggedIn =localStorage.getItem("user") ? false : true
    const [isLogedIn,setLogedIn]=useState(userLoggedIn)
    const [userDetail,setUserdetail]=useState({token:localStorage.getItem("token") || "",user: JSON.parse(localStorage.getItem("user"))||{}})

    useEffect(() => {
        if (userLoggedIn){
            setLogedIn(false)
        }
    },[])

    return (
        <AuthContext.Provider value={{isLogedIn,setLogedIn,userDetail,setUserdetail}}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth=()=>useContext(AuthContext)
export {useAuth,AuthProvider}