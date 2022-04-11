import React, {useEffect, useState} from "react";
import "./Home.css";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import Counter from "../../components/Counter/Counter";
import ChangeTime from "../../helpers/changeTime";
import GetDate from "../../helpers/cutDate";
import GetTime from "../../helpers/cutTime";
import GetFlightDuration from "../../helpers/cutFlightDuration";
import PlaneArrival from "../../assets/plane-arrival.svg";
import PlaneDeparture from "../../assets/plane-departure.svg";

function Home() {
    const [townFrom, setTownFrom] = useState("AMS")
    const [townTo, setTownTo] = useState("AMS")
    const [departureDate, setDepartureDate] = useState(new Date().toISOString().split("T")[0]);
    const [passengerAdult, setPassengerAdult] = useState(1);
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState(""); //to sort the search results on price
    const [numberOfStopovers, setNumberOfStopovers] = useState([]);  //to filter the search results on Qty of stopovers
    const [showButton, setShowButton] = useState(false); //scroll button "back-to-top"
    const apiKey = "vulInHierDeAPICode";
    const secret = "vulInHierDeSecretCode";

    function onFormSubmit(event) {
        event.preventDefault();
        console.log("Submitted!");

        let Amadeus = require("amadeus");
        let amadeus = new Amadeus({
            clientId: `${apiKey}`,
            clientSecret: `${secret}`
        });
        console.log(passengerAdult, townFrom);
        setLoading(true);

        amadeus.shopping.flightOffersSearch.get({
            originLocationCode: `${townFrom}`,
            destinationLocationCode: `${townTo}`,
            departureDate: `${departureDate}`,
            adults: `${passengerAdult}`
        }).then(function (response) {
            console.log(response.data);
            setSearchResults(response.data);
            setNumberOfStopovers(response.data)
        }).catch(function (responseError) {
            console.log(responseError.code);
        });
    }

    useEffect(() => {
        let Amadeus = require("amadeus");
        let amadeus = new Amadeus({
            clientId: `${apiKey}`,
            clientSecret: `${secret}`
        });
        console.log(passengerAdult, townFrom);
        setLoading(true);

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
        setLoading(false);
    }, []);

    function getCountryFrom(e) {
        setTownFrom(e.target.value);
    }

    function getCountryTo(e) {
        setTownTo(e.target.value);
    }

    function getDepartureDateTo(e) {
        console.log(e.target.value);
        setDepartureDate(e.target.value);
    }

    function getDeparture(airticket) {
        return airticket.itineraries[0].segments[0].departure;
    }

    function getFinalDestination(airticket) {
        let segments = airticket.itineraries[0].segments;
        let stopsQty = segments.length;
        let indexOfFinalDestination = stopsQty - 1;
        let finalDestination = segments[indexOfFinalDestination];
        let arrivalDestination = finalDestination.arrival;
        return arrivalDestination;
    }
    // instead of airticket.itineraries[0].segments[(airticket.itineraries[0].segments.length-1)].arrival

    let today = new Date().toISOString().split("T")[0];

    //sort result on price
    function sortTicketPrice() {
        if (totalPrice === "most-expensive-first") {
            searchResults.sort((a, b) => {
                return a.price.grandTotal - b.price.grandTotal;
            })
            console.log(searchResults)
        } else {
            searchResults.sort((a, b) => {
                return b.price.grandTotal - a.price.grandTotal;
            })
            console.log(searchResults);
        }
    }

    // to filter results
    function sortTransport(stops) {
        console.log(stops)
        if (stops !== "all") {
            const stopsArray = searchResults.filter(airticket => airticket.itineraries[0].segments.length - 1 === parseInt(stops));
            setNumberOfStopovers(stopsArray);
        } else {
            setNumberOfStopovers(searchResults);
        }
        console.log(numberOfStopovers);
    }

    function totalStopOvers() {
        let total = 0;
        searchResults.map(airticket => {
            const length = airticket.itineraries[0].segments.length;
            if (length > total) {
                return total = length;
            }
        })
        return total;
    }

    // for button scroll to top
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 1000) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className="Homepage-body">
            {numberOfStopovers.length > 0 ?
                <>
                    <h1>Er zijn {numberOfStopovers.length} aanbiedingen gevonden</h1>
                    <section>
                        <h2>Resultaten sorteren op prijs</h2>
                        <select defaultValue="" onChange={(e) => sortTicketPrice(setTotalPrice(e.target.value))}>
                            <option value="" disabled> -- kies een sorteeroptie --</option>
                            <option value="cheapest-first">goedkoopste eerst</option>
                            <option value="most-expensive-first">duurste eerst</option>
                        </select>
                    </section>
                    <section>
                        <h2>Resultaten verfijnen op aantal tussenstops</h2>
                        <select onChange={(e) => sortTransport(e.target.value)}>
                            <option value="all">Alle vluchten</option>
                            {[...Array(totalStopOvers())].map((_, index) => (
                                <option value={index}>{index}</option>
                            ))}
                        </select>
                    </section>
                    <div>
                        <ul>{numberOfStopovers.map((airticket) => {
                            return (
                                <>
                                    <div className="ticket-container">
                                        <div className="info-about-flight">
                                            <div>
                                                <p>{GetDate(getDeparture(airticket).at)}</p>
                                                <p>{GetTime(getDeparture(airticket).at)}</p>
                                            </div>
                                            <div>
                                                <p>{getDeparture(airticket).iataCode}</p>
                                            </div>
                                            <div>
                                                <p>Tussenstop: {(airticket.itineraries[0].segments.length - 1)}</p>
                                                <p>Reisduur: {GetFlightDuration(ChangeTime(airticket.itineraries[0].duration))}</p>
                                            </div>
                                            <div>
                                                <p>{GetDate(getFinalDestination(airticket).at)}</p>
                                                <p>{GetTime(getFinalDestination(airticket).at)}</p>
                                            </div>
                                            <p>{getFinalDestination(airticket).iataCode}</p>
                                        </div>
                                        <div className="total-price-container">
                                            {airticket.price.currency === "EUR" ?
                                                <p className="total-ticket-price">{airticket.price.grandTotal} €</p>
                                                :
                                                <p className="total-ticket-price">{airticket.price.grandTotal}{airticket.price.currency}</p>
                                            }
                                            {airticket.travelerPricings.length === 1 ?
                                                <h4>Totale prijs
                                                    voor <p>{airticket.travelerPricings.length} passagier</p></h4>
                                                :
                                                <h4>Totale prijs
                                                    voor <p>{airticket.travelerPricings.length} passagiers</p></h4>}
                                            <Button
                                                type="submit"
                                                name="Naar de site"
                                            />
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        </ul>
                    </div>
                    {showButton && (
                        <Button
                            name="&#8679;"
                            className="back-to-top"
                            onClick={scrollToTop}
                        />
                    )}
                </>
                :
                <> {loading ? <h1>Zoeken naar de beste deals...Meld je aan en krijg een speciale kortingscode!</h1>
                    :
                    <form className="form-flights" onSubmit={onFormSubmit}>
                        <h1 className="flights">Vluchten</h1>
                        <section>
                            <article>
                                <img src={PlaneDeparture} alt="img-of-plane-departure" className="plane-img"/>
                                <h4 className="flight-from">Van</h4>
                                <select onChange={getCountryFrom}>
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
                            <article>
                                <img src={PlaneArrival} alt="img-of-plane-arrival" className="plane-img"/>
                                <h4 className="flight-to">Naar</h4>
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
                            </article>
                        </section>
                        <section>
                            <article>
                                <InputField
                                    name="Vertrekdatum"
                                    type="date"
                                    id="outbound-date-to"
                                    min={today}
                                    value={departureDate}
                                    onChange={getDepartureDateTo}
                                    className="select-datum"
                                />
                            </article>
                        </section>
                        <section>
                            <article>
                                <Counter
                                    type="button"
                                    disabled={passengerAdult === 0}
                                    passengerQty={passengerAdult}
                                    setPassengerCounter={setPassengerAdult}
                                />
                            </article>
                        </section>
                        <Button
                            type="submit"
                            name="Zoeken"
                            className="search-button"
                        />
                    </form>}
                </>}
        </div>
    )
}


export default Home;