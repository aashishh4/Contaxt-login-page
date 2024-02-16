import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './component/AuthContext';
import Loginpage from './component/Loginpage';
import Bookpage from './component/Bookpage';


function App() {

  const {islogin} = useAuth();
  const [login, setislogin] = useState(localStorage.getItem('login') === 'true');

  useEffect(() => {
    setislogin(islogin)
  }, [islogin])
 
  return (
      <div>
        <Routes>
          <Route
            path="/"
            element={login ? <Navigate to="/bookpage" /> : <Loginpage />}
          />
          <Route path="/bookpage" element={login ? <Bookpage /> : <Navigate to="/"/>} />
        </Routes>
      </div>
  );
}

export default App;
