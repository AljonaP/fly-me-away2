import React, {createContext, useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext({});

function ContextAuthorizationProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decode = jwt_decode(token);
            getUserData(decode.sub, token);
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: "done",
            });
        }
    }, []);

    function login(JWT){
        localStorage.setItem("token", JWT);
        console.log("gebruiker is ingelogd");
        const decode = jwt_decode(JWT);
        console.log(decode.sub);
        getUserData(decode.sub,JWT);
        history.push("/gebruiker-profiel");
    }

    function logout(){
        localStorage.clear();
        console.log("Gebruiker is uitgelogd!");
        toggleIsAuth({
            ...isAuth,
            isAuth: false,
            user: null,
            status: "done"
        });
    }

    async function getUserData(id, token){
        try {
            const result = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`,
                {headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }})
            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    email: result.data.email,
                    username: result.data.username,
                    id: result.data.id,
                },
                status: "done",
            });
        } catch (e) {
            console.error(e);
        }
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
     }

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === "done" ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default ContextAuthorizationProvider;