import React, {useState, useContext, useEffect} from "react";
import "./Login.css";
import {useHistory, Link} from "react-router-dom";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import {AuthContext} from "../../context/ContextAuthorization/ContextAuthorization";
import axios from "axios";

function Login(){
    const {login, isAuth} = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    useEffect(() => {
        if (isAuth === true){
            history.push("/gebruiker-profiel");
        }
    }, [isAuth]);

    async function handleClick(e) {
        e.preventDefault();
        console.log(`
        Username: ${username},
        Password: ${password},
        `)
        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: username,
                password: password,
            });
            console.log(result.data)
            login(result.data.accessToken);
            console.log(result.data.accessToken);
        } catch (e) {
            console.error(e);
            console.log(e.response);
        }
    }

    return (
        <>
            <div className="page-login">
                <div className="form-container">
                    <form onSubmit={handleClick} className="form-create-account-login">
                        <h1>Aanmelden</h1>
                        <InputField
                            name="Username"
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <InputField
                            name="Wachtwoord"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            name="Submit"
                            type="submit"
                            className="send-button"
                        />
                    </form>
                    <p className="if-registered-or-not-registered">Heb je nog geen account?&nbsp;
                        <Link to="/account-aanmaken">Registreer</Link>&nbsp;je dan eerst.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;