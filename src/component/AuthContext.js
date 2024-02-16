import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext=createContext();
 export const AuthProvider=({children})=>{
    const [islogin,setislogin]=useState(localStorage.getItem('login'==='true'));
    const [Apidata,setApidata]=useState([]);
    console.log("Apidata",Apidata);
    console.log("islogin",islogin)
    const navigate=useNavigate();
    const Login=()=>{
        localStorage.setItem('login','true')
         setislogin(true)
    }

    const Logout=()=>{
        localStorage.setItem('login','false')
        setislogin(false);
        navigate('/')
    }

    const setApivalue=(data)=>{
        setApidata(data)
    }
    return(
        <AuthContext.Provider value={{islogin,Login,Logout,setApivalue}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth=()=>useContext(AuthContext)