
import {useContext,createContext,useState, useEffect} from "react"
const AuthContext=createContext({isLogedIn:false})
const AuthProvider=({children})=>{
    const user = localStorage.getItem("user") ? false :true
    const [isLogedIn,setLogedIn]=useState(user)
    useEffect(()=>{
        if (user){
            // console.log(user,"user")
            setLogedIn(true)
        }
    },[]);
    return (
        <AuthContext.Provider value={{isLogedIn,setLogedIn}}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth=()=>useContext(AuthContext)
export {useAuth,AuthProvider}