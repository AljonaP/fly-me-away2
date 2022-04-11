import React, {useContext} from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {AuthContext} from "./context/ContextAuthorization/ContextAuthorization";
import CreateAccountPage from "./pages/create-account/Create-account";
import GeneralConditionsPage from "./pages/general-conditions/General-conditions";
import HomePage from "./pages/home/Home";
import LoginPage from "./pages/login/Login";
import PrivacyPolicyPage from "./pages/privacy-policy/Privacy-policy";
import ProfilePage from "./pages/profile/Profile";
import Footer from "./components/Footer/Footer";
import TopMenu from "./components/TopMenu/TopMenu";

function App() {
    const {isAuth} = useContext(AuthContext);
    const {toggleIsAuth} = useContext(AuthContext);

    return (
        <div className="App">
            <Router>
                <TopMenu/>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/account-aanmaken">
                        <CreateAccountPage/>
                    </Route>
                    <Route path="/gebruiker-profiel">
                        <ProfilePage isAuth={isAuth} toggleAuth={toggleIsAuth}/>
                    </Route>
                    <Route path="/inloggen">
                        <LoginPage/>
                    </Route>
                    <Route exact path="/algemene-voorwaarden">
                        <GeneralConditionsPage/>
                    </Route>
                    <Route exact path="/privacybeleid">
                        <PrivacyPolicyPage/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
