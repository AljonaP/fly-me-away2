import React, {useState} from 'react';
import './Home.css';
import Button from "../../components/Button/Button";
import InputFieldLabelName from "../../components/InputFieldLabelName/InputFieldLabelName";
import InputFieldLabelValue from "../../components/InputFieldLabelValue/InputFieldLabelValue";
import PassengerType from "../../components/PassengerType/PassengerType";
import axios from "axios";
import Amadeus from "amadeus";
import {logDOM} from "@testing-library/react";
import PassengerCounter from "../../components/PassengerCounter/PassengerCounter";
import GetDate from '../../helpers/cutDate';
import GetTime from '../../helpers/cutTime';
import GetFlightDuration from '../../helpers/cutFlightDuration';
import BackgroundImage from '../../assets/TropicsSeaPalm.jpg';
import PlaneDeparture from '../../assets/plane-departure.svg';
import PlaneArrival from '../../assets/plane-arrival.svg';




function Home() {
    // const [loading, setLoading] = useState(true);
    const [ countriesFrom, setCountriesFrom] = useState('AMS')
    const [ countriesTo, setCountriesTo] = useState('AMS')
    const [departureDate, setDepartureDate] = useState(new Date().toISOString().split('T')[0]);
    const [departureDateFrom, setDepartureDateFrom] = useState('');

    const [ticketOnewayRetour, toggleTicketOnewayRetour] = useState('Retour');
    const [passengerAdult, setPassengerAdult] = useState(1);
    const [passengerChild, setPassengerChild] = useState(0);
    const [passengerBaby, setPassengerBaby] = useState(0);
    const [ticketClass, toggleTicketClass] = useState('Economy');
    const [clicked, toggleClicked] = React.useState(false);

    const [searchResults, setSearchResults] = useState([]);


    const [endPoint, setEndPoint] = useState('https://test.api.amadeus.com/v1/security/oauth2/token');
    const [data, setData] = useState('');

    const apiKey = 'aDeRyMoOgQddpHfhAgCSYyZ1qLTnHlOz';
    const secret = 'j0WIIYCSKleFB41k';

    // useEffect(() => {
    //     async function getData() {
    // // setLoading(true);
    // const token = localStorage.getItem('token')
    //     try {
    //         const apiKey = 'gg6rdsw4d82y9dhppr72w8we'
    //         const result = await axios.post(endPoint,
    //             `grant_type=client_credentials&client_id=${apiKey}&client_secret=${secret}`, {
    //                 headers: {
    //                     "Content-Type": 'application/x-www-form-urlencoded',
    //                 }})
    //         console.log(result.data);
    //         setData(result.data.access_token)
    //     } catch (e) {
    //         console.error(e)
    //     }
    //     }
    //     getData();
    // }, []);

    // if (loading) return `loading...`
// useEffect(() => {
//     let Amadeus = require('amadeus');
//     let amadeus = new Amadeus({
//         clientId: `${apiKey}`,
//         clientSecret: `${secret}`
//     });
//
//     console.log(amadeus)
//
//     amadeus.shopping.flightOffersSearch.get({
//         originLocationCode: `${countriesFrom}`,
//         destinationLocationCode: `${countriesTo}`,
//         // departureDate: `${departureDateTo}`,
//         departureDate: '2022-06-03',
//         adults: '2'
//     }).then(function(response){
//         console.log(response.data);
//     }).catch(function(responseError){
//         console.log(responseError.code);
//     });
//
// }, [countriesTo])


    function onFormSubmit(event) {
        event.preventDefault();
        console.log('Submitted!');

        let Amadeus = require('amadeus');
        let amadeus = new Amadeus({
            clientId: `${apiKey}`,
            clientSecret: `${secret}`
        });
        console.log(passengerAdult, countriesFrom)

        amadeus.shopping.flightOffersSearch.get({
            originLocationCode: `${countriesFrom}`,
            destinationLocationCode: `${countriesTo}`,
            departureDate: `${departureDate}`,
            // departureDate: '2022-06-03',
            adults: `${passengerAdult}`
        }).then(function(response){
            console.log(response.data);
            setSearchResults(response.data);
        }).catch(function(responseError){
            console.log(responseError.code);
        });
    }

    let today = new Date().toISOString().split('T')[0];

    function getCountryFrom(e){
        setCountriesFrom(e.target.value)
    }

    function getCountryTo(e){
        setCountriesTo(e.target.value)
    }

    function getDepartureDateTo(e){
        console.log(e.target.value)
        setDepartureDate(e.target.value)
    }

     // let daysInYear = 365;
    // let maxDateToBookTicket = today.setDate(today.getDate() + daysInYear);

    return (
        <div className="Homepage-body">
            {/*<img src={BackgroundImage} className="background-img"/>*/}

            {searchResults.length > 0 ?
                <>
                    <h1>Er zijn {searchResults.length} aanbiedingen gevonden</h1>
                    <div>
                        <ul>{searchResults.map((airticket) => {
                            return(
                                <>
                                    <div className="ticket-container">
                                        <li>{airticket.id}</li>
                                        <p>{GetDate(airticket.itineraries[0].segments[0].departure.at)}</p>
                                        <p>{GetTime(airticket.itineraries[0].segments[0].departure.at)}</p>
                                        <p>{airticket.itineraries[0].segments[0].departure.iataCode}</p>
                                        <p>{GetFlightDuration(airticket.itineraries[0].duration)}</p>
                                        <p>Tussenstop {(airticket.itineraries[0].segments.length-1)}</p>
                                        <p>{GetDate(airticket.itineraries[0].segments[(airticket.itineraries[0].segments.length-1)].arrival.at)}</p>
                                        <p>{GetTime(airticket.itineraries[0].segments[(airticket.itineraries[0].segments.length-1)].arrival.at)}</p>
                                        <p>{airticket.itineraries[0].segments[(airticket.itineraries[0].segments.length-1)].arrival.iataCode}</p>
                                        <p>Totale prijs voor<p>{airticket.travelerPricings.length} passagiers</p></p>
                                        <p>{airticket.price.grandTotal}</p>
                                        <p>{airticket.price.currency}</p>
                                    </div>
                                </>
                        )})}
                        </ul>
                    </div>
                </>
                :
                <>
                    <form onSubmit={onFormSubmit} className="form-vluchten">
                        <h1 className="flights">Vluchten</h1>

                        <section>
                            <img src={PlaneDeparture} alt="img-of-plane-departure"/>
                            <h4>Van</h4>
                            <select id="country" name="country" className="countries" onChange={getCountryFrom}>
                                <option value="AMS">Amsterdam</option>
                                <option value="BKK">Bangkok</option>
                                <option value="BER">Berlijn</option>
                                <option value="LAX">Los-Angeles</option>
                                <option value="BOM">Mumbai</option>
                                <option value="JFK">New York</option>
                                <option value="CDG">Parijs</option>
                                <option value="PUJ">Punta-Cana</option>
                                <option value="SYD">Sydney</option>
                                <option value="WLG">Wellington</option>
                            </select>
                        </section>
                        <section>
                            <img src={PlaneArrival} alt="img-of-plane-arrival"/>
                            <h4>Naar</h4>
                            <select onChange={getCountryTo}>
                                <option value="AMS">Amsterdam</option>
                                <option value="BKK">Bangkok</option>
                                <option value="BER">Berlijn</option>
                                <option value="LAX">Los-Angeles</option>
                                <option value="BOM">Mumbai</option>
                                <option value="JFK">New York</option>
                                <option value="CDG">Parijs</option>
                                <option value="PUJ">Punta-Cana</option>
                                <option value="SYD">Sydney</option>
                                <option value="WLG">Wellington</option>
                            </select>
                        </section>
                        <section>
                            <InputFieldLabelName
                                name="Heen"
                                type="date"
                                id="outbound-date-to"
                                min={today}
                                value={departureDate}
                                onChange={getDepartureDateTo}
                                // max={maxDateToBookTicket}
                            />
                        </section>
                        <section className="passenger-counter">
                            <h4>Passagiers</h4>
                            <PassengerCounter type="button" disabled={passengerAdult === 0} passengerQty={passengerAdult} setPassengerCounter={setPassengerAdult}/>
                        </section>
                        {/*<section>*/}
                        {/*    <h4>Klasse</h4>*/}
                        {/*    <select*/}
                        {/*        name="class" id="class" value={ticketClass} onChange={(e) => toggleTicketClass(e.target.value)}>*/}
                        {/*        <option value="ECONOMY">Economy</option>*/}
                        {/*        <option value="PREMIUM_ECONOMY">Premium-Economy</option>*/}
                        {/*        <option value="PREMIUM">Premium</option>*/}
                        {/*        <option value="BUSINESS">Business</option>*/}
                        {/*        <option value="FIRST">First</option>*/}
                        {/*    </select>*/}
                        {/*</section>*/}

                        <Button name="Zoeken" type="submit" />
                    </form>

                </>}

        </div>
    );
}



export default Home;