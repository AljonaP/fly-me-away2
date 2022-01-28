import React from 'react';
import './Search-results.css';
import InputFieldLabelValue from "../../components/InputFieldLabelValue/InputFieldLabelValue";

// // https://docs.airfranceklm.com/docs/read/opendata/offers/GET_availableoffers_v1
//
// // GET https://api.airfranceklm.com/opendata/offers/v1/available-offers{?d,departureDate,displayPriceContent}
/*// https://docs.airfranceklm.com/docs/read/opendata/offers/GET_flightDetails*/
//
function SearchResults() {
    return (
        <div>
            <h1>Resultaten verfijnen</h1>
            <section id="stopovers">
                <h2>Tussenstops</h2>
                <select id="choose-stopovers">
                    <option value="1">Direct</option>
                    <option value="2">1</option>
                    <option value="3">2</option>
                </select>
            </section>
            <section>
                <h2>Vertrektijden</h2>
                <input type="range">

                </input>
            </section>
            <section>
                <h2>Reisduur</h2>
                <InputFieldLabelValue name="Reisduur-heen" type="range" min="00:00" max="23:59"/>
                <InputFieldLabelValue name="Reisduur-terug" type="range" min="00:00" max="23:59"/>
            </section>

            <h1>Resultaten sorteren</h1>

            <select>
                <option>Goedkoopste eerst</option>
                <option>Snelste eerst</option>
            </select>

            <div className="ticket-container">
                <div>
                    <h2>Heen</h2>
                    <h4>Airline name</h4>
                    <img name="logo-airline" alt="logo-airline"/>
                    <time>Departure time</time>
                    <p>Departure City</p>
                    <p>Departure IATA code</p>
                    <time dateTime="PT15H10M">Duration of Time</time>
                    <h4>Tussenstops</h4>
                    <time>Arrival time</time>
                    <p>Destination City</p>
                    <p>Destination IATA code</p>
                </div>
                <div>
                    <div>
                        <h2>Terug</h2>
                        <h4>Airline name</h4>
                        <img name="logo-airline" alt="logo-airline"/>
                        <time>Departure time</time>
                        <p>Departure City</p>
                        <p>Departure IATA code</p>
                        <time dateTime="PT15H10M">Duration of Time</time>
                        <h4>Tussenstops</h4>
                        <time>Arrival time</time>
                        <p>Destination City</p>
                        <p>Destination IATA code</p>
                    </div>
                    <div className="price">Price €</div>
                    <p>per reisiger</p>
                    <button>Naar de site</button>
                </div>
            </div>
        </div>
    )
}

export default SearchResults;


