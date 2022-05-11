
import {useContext,createContext,useState,useEffect} from "react"
const AuthContext=createContext({isLogedIn:false})
const AuthProvider=({children})=>{
    const userLoggedIn =localStorage.getItem("user") ? true : false
    const [isLogedIn,setLogedIn]=useState(userLoggedIn)
    const [userDetail,setUserdetail]=useState({token:"",user: {}})
    const token=localStorage.getItem("token")
    console.log(token,"gettoken")
    const user=JSON.parse(localStorage.getItem("user"))
    console.log(token ,user,"now")
 
    useEffect(() => {
        if (token && user){
            console.log(token,"tokenuseEffect")
            setUserdetail({token,user})
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
