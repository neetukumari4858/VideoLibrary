import {useContext,createContext,useState} from "./react"

const AuthContext=createContext({isLogedIn:false})

const AuthProvider=({children})=>{
    const [isLogrdIn,setLogedIn]=useState(false)
    return (
        <AuthContext.Provider value={{isLogrdIn,setLogedIn}}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth=()=>useContext(AuthContext)
export {useAuth,AuthProvider}