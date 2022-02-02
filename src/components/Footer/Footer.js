import React, {useState} from 'react';
import './Footer.css';
import {Link} from "react-router-dom";
import InputFieldLabelName from "../InputFieldLabelName/InputFieldLabelName";
import Button from "../Button/Button";

function Footer() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contactMessage, setContactMessage] = useState('');
    const [messageLength, setMessageLength ] = useState("300")
    const [submitted, setSubmitted] = useState(false);
    const [disabled, setDisabled] = useState(false);

    function disableButton() {
        if (contactMessage.length < 20){
            setDisabled(true);
        }
    }
    function sendForm(e) {
        e.preventDefault()
        console.log(`Het bericht: "${contactMessage}" is succesvol verzonden.`);
        setSubmitted(true);
    }

    return (
        <div>
            <footer>
                <address id="address">
                    <div>
                        Ons adres:
                        <br/>
                        FlyMeAway B.V.
                        <br/>
                        Preludeweg 20
                        <br/>
                        2402 HD Alphen aan den Rijn
                        <br/>
                        <a href="https://goo.gl/maps/M8gDX6SorVqZ71KQ7">Vind ons op Google-maps!</a>
                    </div>


                    <br/>
                    <div>
                        Office tel. <a href="tel:+31172222222">+31 (0)172 - 22 22 22</a>
                        <br/>
                        K.V.K : Gouda 54645648
                        <br/>
                        BTW Nr. : NL 007934567B01
                    </div>
                </address>
                <div id="terms-conditions">
                    © FlyMeAway B.V. 2021
                    <br/>
                    FlyWeAway is gemaakt voor de echte reizigers! Bekijk en vergelijk de beste deals al nú en vlieg naar jouw favoriete bestemming.
                    <br/>
                    <br/>

                    Op alle onze deals zijn de&nbsp;
                    <Link to="/algemene-voorwaarden">
                        <span>Algemene Voorwaarden</span>
                    </Link>
                    &nbsp;en&nbsp;
                    <Link to="/privacybeleid">
                        <span>Privacy Beleid</span>
                    </Link>
                    &nbsp;
                    van toepassing.
                    <br/>
                    De getoonde prijzen zijn inclusief BTW, maar kunnen variëren bij de vliegticketaanbieder.
                </div>
                {/* Voor styling zie: https://github.com/hogeschoolnovi/frontend-react-fruit-perfection/blob/stap-6/src/App.css*/}
                {/* Voor styling zie 3.4 React */}
                <form className="contact-form">Contact ons
                    <br/>
                    <InputFieldLabelName
                        type="text"
                        id="name"
                        value={name}
                        placeholder="Naam"
                        onChange={(e) => setName(e.target.value)}/>

                    <InputFieldLabelName
                        type="email"
                        id="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}/>

                    <textarea
                        maxLength={messageLength}
                        placeholder="Typ hier uw bericht, min 20 en max 300 tekens"
                        className={messageLength === 300 ? 'error-message' : ''}
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}>

                        {/*{contactMessage.length > 300 && <p className="error-message">Dit bericht is te lang!</p>}*/}

                    </textarea>

                    <Button type="submit" value="submit" disabled={!name && !email && {disableButton}} onClick={sendForm} >
                        Verzend
                    </Button>
                </form>

            </footer>
        </div>
    );
}

export default Footer;