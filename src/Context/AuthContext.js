
import {useContext,createContext,useState, useEffect} from "react"
const AuthContext=createContext({isLogedIn:false})
const AuthProvider=({children})=>{
    const user =localStorage.getItem("user") ? false :true
    const [isLogedIn,setLogedIn]=useState(user)
    const [userDetail,setUserdetail]=useState({token:localStorage.getItem("token") || "",user: JSON.parse(localStorage.getItem("user"))||{}})

    useEffect(() => {
        if (user){
            setLogedIn(true)
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