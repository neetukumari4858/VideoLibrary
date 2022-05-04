import {useContext,createContext,useState} from "react"
const AuthContext=createContext({isLogedIn:false})
const AuthProvider=({children})=>{
    const [isLogedIn,setLogedIn]=useState(false)
    console.log(isLogedIn,"islogin")
    return (
        <AuthContext.Provider value={{isLogedIn,setLogedIn}}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth=()=>useContext(AuthContext)
export {useAuth,AuthProvider}