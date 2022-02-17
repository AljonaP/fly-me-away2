import React, {useEffect, useState} from 'react';
import './Home.css';
import Button from "../../components/Button/Button";
import InputFieldLabelName from "../../components/InputFieldLabelName/InputFieldLabelName";
import Amadeus from "amadeus";
import PassengerCounter from "../../components/PassengerCounter/PassengerCounter";
import GetDate from '../../helpers/cutDate';
import GetTime from '../../helpers/cutTime';
import GetFlightDuration from '../../helpers/cutFlightDuration';
import ChangeHour from "../../helpers/changeHour";
import PlaneDeparture from '../../assets/plane-departure.svg';
import PlaneArrival from '../../assets/plane-arrival.svg';

function Home() {
    // const [loading, setLoading] = useState(true);
    const [countriesFrom, setCountriesFrom] = useState('AMS')
    const [countriesTo, setCountriesTo] = useState('AMS')
    const [departureDate, setDepartureDate] = useState(new Date().toISOString().split('T')[0]);
    const [passengerAdult, setPassengerAdult] = useState(1);
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


useEffect(() => {
    let Amadeus = require('amadeus');
    let amadeus = new Amadeus({
        clientId: `${apiKey}`,
        clientSecret: `${secret}`
    });

    console.log(amadeus)

    amadeus.shopping.flightOffersSearch.get({
        originLocationCode: `${countriesFrom}`,
        destinationLocationCode: `${countriesTo}`,
        // departureDate: `${departureDateTo}`,
        departureDate: '2022-06-03',
        adults: '2'
    }).then(function(response){
        console.log(response.data);
    }).catch(function(responseError){
        console.log(responseError.code);
    });

}, [countriesTo])


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
            adults: `${passengerAdult}`
        }).then(function(response){
            console.log(response.data);
            setSearchResults(response.data);
        }).catch(function(responseError){
            console.log(responseError.code);
        });
    }
useEffect(()=> {
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
        adults: `${passengerAdult}`
    }).then(function(response){
        console.log(response.data);
        setSearchResults(response.data);
    }).catch(function(responseError){
        console.log(responseError.code);
    });
},[searchResults]);




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
    function getDeparture(airticket) {
        return airticket.itineraries[0].segments[0].departure;
    }

    function getFinalDestination(airticket) {
        let segments = airticket.itineraries[0].segments;
        let stopsQty = segments.length;
        let indexOfFinalDestination = stopsQty-1;
        let finalDestination = segments[indexOfFinalDestination];
        let arrival_destination = finalDestination.arrival;
        return arrival_destination;
    }
    // i.p.v. airticket.itineraries[0].segments[(airticket.itineraries[0].segments.length-1)].arrival


    // function cheapestFirst(airticket) {
    // let allFoundGrandTotalPrice = setSearchResults.price.grandTotal;
    // allFoundGrandTotalPrice.sort((a, b) => {
    //     if (a > b) {
    //         return 1;
    //     }
    //     if (a < b) {
    //         return -1;
    //     }
    //     return 0;
    // })
    // }
        // bji het gebruiken van ternary operator
        // data[0].price.grandTotal;
        // data.sort((a, b) => (a.price.grandTotal > price.grandTotal? 1 : ((b.price.grandTotal > a.price.grandTotal)? -1 : 0))
        // data.sort((a, b) => (a.price.grandTotal > b.price.grandTotal) ? 1 : -1)

    // Stap: filter de resultaten - 3 opties
    // Optie 1: 0 tussenstops = 'direct'

    // function ggg
    // if (airticket.itineraries[0].segments.length === 0) {
    //     return 'direct'
    // } else if(airticket.itineraries[0].segments.length > 0) {
    //     return 'meer dan 1 tussenstops'
    //
    // }
    //




    // const bootcampStudents = students.filter((student) => {
    //     return student.course === 'FSD Bootcamp';
    //     // je kunt dit ook uitschrijven als:
    //     // if (student.course === 'FSD Bootcamp') {
    //     //    return true
    //     // }
    // })


    // Optie 2: 1 tussenstops = '1'
    // Optie 3: 2 tussenstops = '2'



    // function getCheapestTicket(e) {
    //     if (e.target.value === 'cheapest') {
    //         sortPriceFirstCheap();
    //     }
    //
    // }


    //Stap: WRITE A FUNCTION TO ADD 365 DAYS FROM TODAY
    let today = new Date().toISOString().split('T')[0];
    //
    // function maxDateToBookTicket {
    //     let today = new Date().toISOString().split('T')[0];
    //     return (
    //         today.setDate(today.getDate() + 365)
    //     )
    // }
    // let daysInYear = 365;
    // let maxDateToBookTicket = today.setDate(today.getDate() + daysInYear);

    // Stap: sorteren de resultaten op goedkoopste eerst
    // function sortPriceFirstCheap(totalPrice) {
    //     totalPrice.sort((a, b)=> {
    //             return a.price.grandTotal - b.price.grandTotal;
    //         }
    //     )
    //     console.log('testing', searchResults)
    // }
    //
    // function sortPriceFirstExpencive(totalPrice) {
    //     totalPrice.sort((a, b)=> {
    //             return b.price.grandTotal - a.price.grandTotal;
    //         }
    //     )
    //     console.log('testing', searchResults)
    // }
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
                        <h3>Tussenstops</h3>
                        <select id="choose-stopovers">
                            <option value="1">Direct</option>
                            <option value="2">1</option>
                            <option value="3">2</option>
                        </select>
                    </section>
                    <div>
                        <ul>{searchResults.map((airticket) => {
                            return (
                                <>
                                    <div className="ticket-container">
                                        <li>{airticket.id}</li>
                                        <div className="DateTime">
                                            <p>{GetDate(getDeparture(airticket).at)}</p>
                                            <p>{GetTime(getDeparture(airticket).at)}</p>
                                        </div>
                                        <div>
                                        <p>{getDeparture(airticket).iataCode}</p>
                                        </div>
                                        <div>
                                            <p>Tussenstop: {(airticket.itineraries[0].segments.length - 1)}</p>
                                            <p>Reisduur: {GetFlightDuration(airticket.itineraries[0].duration)}</p>
                                        </div>
                                        <div className="DateTime">
                                            <p>{GetDate(getFinalDestination(airticket).at)}</p>
                                            <p>{GetTime(getFinalDestination(airticket).at)}</p>
                                        </div>
                                        <p>{getFinalDestination(airticket).iataCode}</p>
                                        <div>
                                            <p>Totale prijs voor<p>{airticket.travelerPricings.length} passagiers</p></p>
                                            <span>
                                            <p>{airticket.price.grandTotal}</p>
                                            <p>{airticket.price.currency}</p>
                                            </span>
                                            <Button type="submit" name="Select"/>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        </ul>
                    </div>
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
                                    // max={maxDateToBookTicket}
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
    );
}



export default Home;