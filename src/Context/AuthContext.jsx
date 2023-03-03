import React,{ useState } from "react";
export const AuthContext = React.createContext()

const AuthProvider = ({children}) =>{
    const [login,setLogin]=useState(localStorage.getItem("Login")||false)
    const [user,setUser]=useState(JSON.parse(localStorage.getItem("User")))
    const handlerLogin = (userData)=>{
        setLogin(true)
        localStorage.setItem("Login",true)
        setUser(userData)
        localStorage.setItem("User",JSON.stringify(userData))
    }

    const handlerLogout = () =>{
        setLogin(false)
        localStorage.removeItem("Login")
        setUser()
        localStorage.removeItem("User")
    }

    return(
        <AuthContext.Provider
            value={{login,handlerLogin,handlerLogout,user}}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default  AuthProvider