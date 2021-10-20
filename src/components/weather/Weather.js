//https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=7adf3a153b451eea706144e62dab30a1

import React from "react";
import './style.css'

const Weather = () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=7adf3a153b451eea706144e62dab30a1")
    .then(x => x.text())
    .then(y => document.getElementById("temp").innerHTML = typeof y);

    return (
        <>
            <div className="searchWrap">
                <div className="searchbox">
                    <label htmlFor="searchID">Search City</label>
                    <input type="search"
                        placeholder="search....."
                        autoFocus
                        id="searchID"
                        className="searchClass"
                    />
                    <button className="searchButton" type="button">
                        Search
                    </button>
                </div>
            </div>
            <article id="temp">
                <div>
                    <i className={"wi wi-day-sunny"}>a</i>
                </div>
            </article>
        </>
    )
}

export default Weather;