import React, {useEffect, useState} from 'react';
import './Home.css';
import Button from "../../components/Button/Button";
import InputFieldLabelName from "../../components/InputFieldLabelName/InputFieldLabelName";
import Amadeus from "amadeus";
import PassengerCounter from "../../components/PassengerCounter/PassengerCounter";
import GetDate from '../../helpers/cutDate';
import GetTime from '../../helpers/cutTime';
import GetFlightDuration from '../../helpers/cutFlightDuration';
import ChangeTime from "../../helpers/changeTime";

import PlaneDeparture from '../../assets/plane-departure.svg';
import PlaneArrival from '../../assets/plane-arrival.svg';
import {logDOM} from "@testing-library/react";

function Home() {
    // const [loading, setLoading] = useState(true);
    const [townFrom, setTownFrom] = useState('AMS')
    const [townTo, setTownTo] = useState('AMS')
    const [departureDate, setDepartureDate] = useState(new Date().toISOString().split('T')[0]);
    const [passengerAdult, setPassengerAdult] = useState(1);
    const [searchResults, setSearchResults] = useState([]);

    const [endPoint, setEndPoint] = useState('https://test.api.amadeus.com/v1/security/oauth2/token');

    //om data te sorteren
    const [totalPrice, setTotalPrice] = useState('');

    //om data te filteren
    const [numberOfStopovers, setNumberOfStopovers] = useState('');

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

    function onFormSubmit(event) {
        event.preventDefault();
        console.log('Submitted!');

        let Amadeus = require('amadeus');
        let amadeus = new Amadeus({
            clientId: `${apiKey}`,
            clientSecret: `${secret}`
        });
        console.log(passengerAdult, townFrom)

        amadeus.shopping.flightOffersSearch.get({
            originLocationCode: `${townFrom}`,
            destinationLocationCode: `${townTo}`,
            departureDate: `${departureDate}`,
            adults: `${passengerAdult}`
        }).then(function (response) {
            console.log(response.data);
            setSearchResults(response.data);
        }).catch(function (responseError) {
            console.log(responseError.code);
        });
    }

    useEffect(() => {
        let Amadeus = require('amadeus');
        let amadeus = new Amadeus({
            clientId: `${apiKey}`,
            clientSecret: `${secret}`
        });
        console.log(passengerAdult, townFrom)

        amadeus.shopping.flightOffersSearch.get({
            originLocationCode: `${townFrom}`,
            destinationLocationCode: `${townTo}`,
            departureDate: `${departureDate}`,
            adults: `${passengerAdult}`
        }).then(function (response) {
            console.log(response.data);
            setSearchResults(response.data);
        }).catch(function (responseError) {
            console.log(responseError.code);
        });
    }, []);
    // !TE BESPREKEN MET SAM: waar te zetten setLoading? Bij async functie zet je vóór try-catch block (zie Pokemon, App.js)
    // setLoading(true);
    // if (loading) return `loading...`

    //met [searchResults] blijft opnieuw laden, dus dependencies [] moet leeg zijn



    ////!TE BESPREKEN MET SAM SORTEREN op meerdere keuzes:
    ////veranderen state van [totalPrice, setTotalPrice] naar [sortResults, setSortResults]
    ////veranderen naam van functie van sortTicketPrice() naar sortResults()
    //// meer dat 3 keuzes: maken switch ipv if-else? Hoe?
    // function sortResults() {
    //     if (sortResults === "cheapest-first") {
    //         searchResults.sort((a, b) => {
    //             return b.price.grandTotal - a.price.grandTotal
    //         })
    //         console.log("cheapest first", searchResults)
    //     } else if (sortResults === "most-expensive-first") {
    //         searchResults.sort((a, b) => {
    //             return a.price.grandTotal - b.price.grandTotal
    //         })
    //         console.log("most expensive first", searchResults)
    //     } else if (sortResults === "fastest-first") {
    //         searchResults.sort((a, b) => {
    //             return b.itineraries[0].duration - a.itineraries[0].duration
    //         })
    //     } else if (sortResults === "longest-first") {
    //         searchResults.sort((a, b) => {
    //             return a.itineraries[0].duration - b.itineraries[0].duration
    //         })
    //     } else {
    //         console.log("Maak uw keuze om te sorteren")
    //     }
    // }

    //!TE BESPREKEN MET SAM
    // function sortFlightDuration(){
    //     if ( data === "fastest-first" ){
    //         searchResults.sort((a, b) =>{
    //             return b.itineraries[0].duration - a.itineraries[0].duration
    //         })
    //         console.log("test change1B", searchResults)
    //     } else{
    //         searchResults.sort((a, b) => {
    //             return a.itineraries[0].duration - b.itineraries[0].duration
    //         })
    //         console.log("test change2B", searchResults)
    //     }
    // }


    function getCountryFrom(e) {
        setTownFrom(e.target.value)
    }

    function getCountryTo(e) {
        setTownTo(e.target.value)
    }

    function getDepartureDateTo(e) {
        console.log(e.target.value)
        setDepartureDate(e.target.value)
    }

    function getDeparture(airticket) {
        return airticket.itineraries[0].segments[0].departure;
    }

    function getFinalDestination(airticket) {
        let segments = airticket.itineraries[0].segments;
        let stopsQty = segments.length;
        let indexOfFinalDestination = stopsQty - 1;
        let finalDestination = segments[indexOfFinalDestination];
        let arrival_destination = finalDestination.arrival;
        return arrival_destination;
        // return finalDestination;
    }
    // i.p.v. airticket.itineraries[0].segments[(airticket.itineraries[0].segments.length-1)].arrival

    // bji het gebruiken van ternary operator
    // data[0].price.grandTotal;
    // data.sort((a, b) => (a.price.grandTotal > price.grandTotal? 1 : ((b.price.grandTotal > a.price.grandTotal)? -1 : 0))
    // data.sort((a, b) => (a.price.grandTotal > b.price.grandTotal) ? 1 : -1)

    //Stap: WRITE A FUNCTION TO ADD 365 DAYS FROM TODAY
    let today = new Date().toISOString().split('T')[0];
    //
    // function maxDateToBookTicket() {
    //     let today = new Date().toISOString().split('T')[0];
    //     return (
    //         today.setDate(today.getDate() + 365)
    //     )
    // }
    // let daysInYear = 365;
    // let maxDateToBookTicket = today.setDate(today.getDate() + daysInYear);

    //// Stap: sorteren van de resultaten var1
    // function cheapestFirst(airticket) {
    //     let allFoundGrandTotalPrice = setSearchResults.price.grandTotal;
    //     allFoundGrandTotalPrice.sort((a, b) => {
    //         if (a > b) {
    //             return 1;
    //         }
    //         if (a < b) {
    //             return -1;
    //         }
    //         return 0;
    //     })
    // }

    //!TE BESPREKEN MET SAM: BUTTON SCROLL TO TOP
    //Get the button
    // let buttonToTop = document.getElementById("btnToTop");
    //
    // // als de gebruiker naar beneden scrolt 1500px van de top van het document, verschijnt de button
    // window.onscroll = function() {scrollToTopFunction()};
    //
    // function scrollToTopFunction() {
    //     if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    //         buttonToTop.style.display = "block";
    //     } else {
    //         buttonToTop.style.display = "none";
    //     }
    // }
    //
    // // als de gebruiker  klikt op de button, scrolt naar de top van het document
    // function topFunction() {
    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    // }

    ////Get the button scroot to Top
    // var mybutton = document.getElementById("myBtn");
    // //When the user scrolls down 20px from the top of the document, show the button
    // window.onscroll = function() {scrollFunction()};
    // function scrollFunction() {
    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //         mybutton.style.display = "block";
    //     } else {
    //         mybutton.style.display = "none";
    //     }
    // }
    // // When the user clicks on the button, scroll to the top of the document
    // function topFunction() {
    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    // }

    //sort price
    function sortTicketPrice() {
        if (totalPrice === "most-expensive-first") {
            searchResults.sort((a, b) => {
                return a.price.grandTotal - b.price.grandTotal
            })
            console.log(searchResults)
        } else {
            searchResults.sort((a, b) => {
                return b.price.grandTotal - a.price.grandTotal
            })
            console.log(searchResults)
        }
    }

    //to filter results on the number of Stopovers
    function sortTransport(banaan) {
        const logtest = searchResults.filter(test => {
            return test.itineraries[0].segments.length.toString() === banaan
        })
        console.log(logtest)
        return logtest
    }




    return (
        <div className="Homepage-body">

            {searchResults.length > 0 ?
                <>
                    <h1>Er zijn {searchResults.length} aanbiedingen gevonden</h1>
                    {/*<section>*/}
                    {/*    <h2>Resultaten sorteren</h2>*/}
                    {/*    <button type="button" onClick={() => sortPriceFirstCheap(searchResults)}>*/}
                    {/*        Goedkoopste eerst*/}
                    {/*    </button>*/}
                    {/*    <button type="button" onClick={() => sortPriceFirstExpencive(searchResults)}>*/}
                    {/*        Goedkoopste eerst*/}
                    {/*    </button>*/}
                    {/*    {console.log('testing 2', searchResults)}*/}
                    {/*    /!*<select onChange={getCheapestTicket}>*!/*/}
                    {/*    /!*    /!*<option>Geen option</option>*!/*!/*/}
                    {/*    /!*    /!*<option value="cheapest">Goedkoopste eerst</option>*!/*!/*/}

                    {/*    /!*</select>*!/*/}
                    {/*</section>*/}

                    <section id="stopovers">
                        <h2>Resultaten verfijnen</h2>
                        <div>
                            <h3>Tussenstops</h3>
                            {/*<Button type="button" value="1" name="Direct" onClick={(e) => handleClick(e.target.value)}/>*/}
                            {/*<Button type="button" value="2" name="1" onClick={(e) => handleClick(e.target.value)}/>*/}
                            {/*<Button type="button" value="3" name="2" onClick={(e) => handleClick(e.target.value)}/>*/}
                        </div>
                        <select onChange={(e) => sortTransport(e.target.value)}>
                            <option value="direct">direct</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>

                    </section>
                    <section>
                        <h2>Resultaten sorteren</h2>
                        <div>
                            <h3>Sorteren op prijs</h3>
                            <select id="sort-by-price" onChange={(e) => sortTicketPrice(setTotalPrice(e.target.value))}>
                                <option hidden disabled selected value> -- kies een sorteeroptie -- </option>
                                <option value="cheapest-first">goedkoopste eerst</option>
                                <option value="most-expensive-first">duurste eerst</option>
                                {/*<option value="fastest-first">snelste eerst</option>*/}

                                {/*<option value="longest-first">langste eerst</option>*/}
                            </select>
                        </div>
                        {/*<div>*/}
                        {/*    <h3>Sorteren op de vluchtduur</h3>*/}
                        {/*    <select id="sort-by-flight-duration" onChange={(e) => sortFlightDuration(setData(e.target.value))}>*/}
                        {/*        <option value="fastest-first">snelste eerst</option>*/}
                        {/*        <option value="longest-first">langste eerst</option>*/}
                        {/*    </select>*/}
                        {/*</div>*/}

                    </section>

                    <div>
                        <ul>{searchResults.map((airticket) => {
                            return (
                                <>
                                    <div className="ticket-container">
                                        <div className="info-about-flight">
                                            {/*<li>{airticket.id}</li>*/}
                                            <div className="DateTime">
                                                <p>{GetDate(getDeparture(airticket).at)}</p>
                                                <p>{GetTime(getDeparture(airticket).at)}</p>
                                            </div>
                                            <div>
                                                <p>{getDeparture(airticket).iataCode}</p>
                                            </div>
                                            <div className="stopovers">
                                                <p>Tussenstop: {(airticket.itineraries[0].segments.length - 1)}</p>
                                                <p>Reisduur: {GetFlightDuration(ChangeTime(airticket.itineraries[0].duration))}</p>
                                            </div>

                                            <div className="DateTime">
                                                <p>{GetDate(getFinalDestination(airticket).at)}</p>
                                                <p>{GetTime(getFinalDestination(airticket).at)}</p>
                                            </div>
                                            <p className="airport-code">{getFinalDestination(airticket).iataCode}</p>
                                        </div>

                                        <div className="total-price-container">
                                            {airticket.price.currency === "EUR" ?
                                                <p className="total-ticket-price">{airticket.price.grandTotal} €</p>
                                                :
                                                <p className="total-ticket-price">{airticket.price.grandTotal}{airticket.price.currency}</p>
                                            }
                                            {airticket.travelerPricings.length === 1 ?
                                            <h4>Totale prijs voor <p>{airticket.travelerPricings.length} passagier</p></h4>
                                            :
                                            <h4>Totale prijs voor <p>{airticket.travelerPricings.length} passagiers</p></h4>}
                                            <Button type="submit" name="Naar de site"/>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        </ul>
                    </div>
                    <button onClick="topFunction()" id="myBtn" title="Go to top">Top</button>


                    {/*<button onClick={topFunction} id="btnToTop" title="Go to top">Top</button>*/}

                </>
                :
                <>
                    <form onSubmit={onFormSubmit} className="form-flights">
                        <h1 className="flights">Vluchten</h1>

                        <section>
                            <article>
                                <img src={PlaneDeparture} alt="img-of-plane-departure" className="plane-img"/>
                                <h4 className="flight-from">Van</h4>
                                <select className="select-city" onChange={getCountryFrom}>
                                    <option value="AMS">Amsterdam</option>
                                    <option value="BKK">Bangkok</option>
                                    <option value="BER">Berlijn</option>
                                    <option value="LAX">Los-Angeles</option>
                                    <option value="BOM">Mumbai</option>
                                    <option value="JFK">New-York</option>
                                    <option value="CDG">Parijs</option>
                                    <option value="PUJ">Punta-Cana</option>
                                    <option value="SYD">Sydney</option>
                                    <option value="WLG">Wellington</option>
                                </select>
                            </article>
                        </section>
                        <section>
                            <article className="select">
                                <img src={PlaneArrival} alt="img-of-plane-arrival" className="plane-img"/>
                                <h4 className="flight-to">Naar</h4>
                                <select className="select-city" onChange={getCountryTo}>
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
                            </article>
                        </section>
                        <section>
                            <article>
                                <InputFieldLabelName
                                    name="Vertrekdatum"
                                    type="date"
                                    id="outbound-date-to"
                                    min={today}
                                    value={departureDate}
                                    onChange={getDepartureDateTo}
                                    className="select-datum"
                                    //max={maxDateToBookTicket}
                                />
                            </article>
                        </section>
                        <section className="passengers">
                            <article>
                                <h4>Passagiers</h4>
                                <PassengerCounter type="button" disabled={passengerAdult === 0}
                                                  passengerQty={passengerAdult}
                                                  setPassengerCounter={setPassengerAdult}/>
                            </article>
                        </section>

                        <Button name="Zoeken" type="submit" className="search-button"/>
                    </form>

                </>}

        </div>
    )
}



export default Home;