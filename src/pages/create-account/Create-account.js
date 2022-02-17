import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button";
import InputFieldLabelName from "../../components/InputFieldLabelName/InputFieldLabelName";
import './Create-account.css';
import axios from "axios";


function CreateAccount() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    async function handleClick(e) {
        e.preventDefault()
        console.log(email, username, password);
        try {
            await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',
                {
                    username: username,
                    email: email,
                    password: password,
                    role: ['user'],
                });
            // history.push("/inloggen");
            console.log(`
        Username: ${username}
        Email: ${email},
        Password: ${password},
       `)
        } catch (e) {
            console.error(e);
            console.log(e.response);
        }
        history.push("/inloggen");
    }

    return (
        <>
            <div className="form-container">
            <form onSubmit={handleClick} className="form-create-account-login">
                <h1 className="create-account">Account aanmaken</h1>
                <InputFieldLabelName
                    type="text"
                    id="username"
                    name="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>

                <InputFieldLabelName
                    type="text"
                    id="email"
                    name="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                <InputFieldLabelName
                    type="text"
                    id="password"
                    name="Wachtwoord"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
               <Button
                    type="submit"
                    name="Submit"
                    className="send-button"/>
            </form>
            <p>Heb je al een account? Je kunt je <Link to="/inloggen">hier</Link> aanmelden.</p>
            </div>

        </>
    );
}

export default CreateAccount;

