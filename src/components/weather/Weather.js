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
            
            {/* OUR TEMP CARD */}
            <article className={styles.widget}>
                <div className={styles.weatherIcon}>
                    <i className="wi wi-day-sunny"></i>
                </div>
                
                <div className={styles.basicInfo}>
                    <div className={styles.weatherInfo}>
                        <span>25.5&deg;</span>
                    </div>
                    <div className={styles.weatherConditions}>
                        sunny    
                    </div>
                    <div className={styles.place}>
                        maharashtra
                    </div>
                    <div className={styles.date}>
                        {new Date().toLocaleString()}
                    </div>
                </div>

                {/* Our 4 devided section */}
                <div className={styles.extraInfo}>
                    <div className={styles.sunset}>
                        <i className="wi wi-day-sunny"></i>    
                        <i>15:26 PM Sunset</i>
                    </div>
                    <div className={styles.humidity}>
                        <i className="wi wi-day-sunny"></i>    
                        <i>90% Humidity</i>
                    </div>
                    <div className={styles.pressure}>
                        <i className="wi wi-day-sunny"></i>    
                        <i>60% pressure</i>
                    </div>
                    <div className={styles.wind}> 
                        <i className="wi wi-day-sunny"></i>    
                        <i>50 KM/H Speed</i>
                    </div>
                </div>
            </article>


            

        </>
    )
}

export default Weather;