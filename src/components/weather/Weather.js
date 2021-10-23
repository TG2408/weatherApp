//https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=7adf3a153b451eea706144e62dab30a1

import {useState, useEffect} from "react";
import styles from './style.module.css'
import './weather-icons.min.css'

const Weather = () => {
    // fetch("https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=7adf3a153b451eea706144e62dab30a1")
    // .then(x => x.text())
    // .then(y => document.getElementById("temp").innerHTML = typeof y);

    const [city,setCity] = useState('delhi');

    useEffect(() => {
        getWeather();
    })

    const getWeather = () => {
            
    }

    const handleChange = (e) => {
        setCity(e.target.value)
    }

    return (
        <>
            <h1> Weather App</h1>
            <div className={styles.searchWrap}>
                <div className={styles.searchBox}>
                    <label htmlFor="searchID">Search City</label>
                    <input type="search"
                        placeholder="search....."
                        autoFocus
                        id="searchID"
                        className={styles.searchInput}
                        value = {city}
                        onChange = {handleChange}
                    />
                    <button 
                        className={styles.searchButton} 
                        type="button"
                        onClick={getWeather}>
                        Search
                    </button>
                </div>
            </div>
            <article id="temp">
                <div>
                    <i className="wi wi-day-sunny"></i>
                </div>
            </article>
        </>
    )
}

export default Weather;