import React, {useState} from "react";
import "./Create-account.css";
import {useHistory, Link} from "react-router-dom";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import axios from "axios";

function CreateAccount() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("" );
    const [password, setPassword] = useState("");
    const history = useHistory();

    async function handleClick(e) {
        e.preventDefault();
        console.log(email, username, password);
        try {
            await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',
                {
                    username: username,
                    email: email,
                    password: password,
                    role: ["user"],
                });
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
            <div className="page-create-account">
                <div className="form-container">
                    <form onSubmit={handleClick} className="form-create-account-login">
                        <h1 className="create-account">Account aanmaken</h1>
                        <InputField
                            name="Username"
                            type="text"
                            id="username"
                            value={username}
                            placeholder="minimaal 6 tekens"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <InputField
                            name="Email"
                            type="text"
                            id="email"
                            className="email-in-form"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputField
                            type="password"
                            id="password"
                            name="Wachtwoord"
                            value={password}
                            placeholder="minimaal 6 tekens"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            name="Submit"
                            className="send-button"
                        />
                    </form>
                    <p className="if-registered-or-not-registered">Heb je al een account? Je kunt je &nbsp;
                        <Link to="/inloggen">hier</Link>&nbsp; aanmelden.
                    </p>
                </div>
            </div>

        </>
    );
}

export default CreateAccount;

