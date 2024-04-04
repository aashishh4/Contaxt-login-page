import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext=createContext();
 export const AuthProvider=({children})=>{
    const [isLogin, setIsLogin] = useState(localStorage.getItem('login') === 'true');
        const [Apidata,setApidata]=useState([]);
    console.log("Apidata",Apidata);
    console.log("isLogin",isLogin)
    const navigate=useNavigate();
    const Login=()=>{
        localStorage.setItem('login','true')
        setIsLogin(true)
    }

    const Logout=()=>{
        localStorage.setItem('login','false')
        setIsLogin(false);
        navigate('/')
    }

    const setApivalue=(data)=>{
        setApidata(data)
    }
    return(
        <AuthContext.Provider value={{isLogin,Login,Logout,setApivalue,Apidata}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth=()=>useContext(AuthContext)