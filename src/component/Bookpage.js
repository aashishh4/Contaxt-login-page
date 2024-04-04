import React, { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

function Bookpage() {
    const { Logout, isLogin, Apidata } = useAuth();
    const [namestate, setnamestate] = useState([]);

    function handleLogout() {
        localStorage.clear('Product');
        Logout();
    }

    useEffect(() => {
        const storedName = localStorage.getItem("product");
        if (storedName) {
            setnamestate(storedName);
        }
    }, []); // Run only once on component mount

    // useEffect(() => {
    //     // Update localStorage when Apidata changes
    //     localStorage.setItem("product", namestate);
    // }, [namestate]); // Run whenever namestate changes

    return (
        <div>
            <h1>{namestate}</h1>
            <select value={namestate} onChange={(e) => setnamestate(e.target.value)}>
                <option>Select Name</option>
                {Apidata.map((item, i) => (
                    <option key={i} value={item.id}>{item.name}</option>
                ))}
            </select>
            <br />
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Bookpage;
