import React, {useContext} from "react";
import "./TopMenu.css";
import {useHistory, Link} from "react-router-dom";
import Button from "../../components/Button/Button";
import language from "../../assets/flagNL.png";
import logo from "../../assets/logoFlyMeAway.png";
import {AuthContext} from "../../context/ContextAuthorization/ContextAuthorization";

function TopMenu() {
    const {logout, isAuth} = useContext(AuthContext);
    const history = useHistory();

    function signOut(){
        logout();
        history.push("/");
    }

    return (
        <nav>
            <span className="language-currency">
                <img src={language} alt="taal" id="language-img"/>
                <h2 className="currency">EUR</h2>
            </span>
            <Link to="/">
                    <span className="logo-container">
                    <img src={logo} alt="logo-FlyMeAway"/>
                    </span>
            </Link>
            {isAuth ?
                <Button type="button"
                        name="Uitloggen"
                        className="button-topmenu"
                        onClick={signOut}
                />
                :
                <div>
                    <Button
                        type="button"
                        name="Registreren"
                        className="button-topmenu"
                        onClick={() => history.push("/account-aanmaken")}
                    />
                    <Button
                        type="button"
                        name="Aanmelden"
                        className="button-topmenu"
                        onClick={() => history.push("/inloggen")}
                    />
                </div>
            }
        </nav>
    );
}

export default TopMenu;