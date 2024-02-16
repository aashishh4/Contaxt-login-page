import { useAuth } from "./AuthContext";

function Bookpage(){
    const {Logout,isLogin}=useAuth();
   

    function handleLogout(){
        Logout()
    
    }
   
    return(
        <div>
            <h1>Bookpage-opne-it</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )}
    export default Bookpage;