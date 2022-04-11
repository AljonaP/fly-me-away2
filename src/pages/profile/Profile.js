import React, {useContext} from "react";
import "./Profile.css";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/ContextAuthorization/ContextAuthorization";

function Profile() {
   const {user} = useContext(AuthContext);

    return (
        <>
            <div className="profile-page">
                <div className="profile-container">
                    <h1>Profielpagina</h1>
                    <section className="profile-data">
                        <h2 className="personal-data">Uw gegevens:</h2>
                        <br/>
                        {user &&
                        <>
                            <p><strong>Gebruikersnaam:</strong>&nbsp;{user.username}</p>
                            <br/>
                            <p><strong>Email:</strong>&nbsp;{user.email}</p>
                        </>
                        }
                    </section>
                    <h4 className="discount">Alle geregistreerde gebruikers krijgen voor alle vluchten naar Parijs een korting van
                        3%.<br/> Bij
                        het afrekenen voer uw kortingscode PARIJS202202. <br/>Deze actie is geldig van 01.02.2022 t/m
                        28.02.2022.</h4>
                </div>
                <p className="search-airtickets">Om te beginnen met zoeken naar de vliegtickets ga naar de <Link to="/">Homepagina</Link> of druk
                    op
                    de knop 'FlyMeAway' in de navigatiemenu.</p>
            </div>
        </>
    );
}

export default Profile;