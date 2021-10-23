//https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=7adf3a153b451eea706144e62dab30a1

import {useState, useEffect} from "react";
import styles from './style.module.css'
import './weather-icons.min.css'
import WeatherCard from "./WeatherCard";


const Weather = () => {
    // fetch("https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=7adf3a153b451eea706144e62dab30a1")
    // .then(x => x.text())
    // .then(y => document.getElementById("temp").innerHTML = typeof y);

    const [city,setCity] = useState('delhi');
    const [weatherInfo, setWeatherInfo] = useState({});

    useEffect(() => {
        getWeather();
    },[])

    const getWeather = async() => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7adf3a153b451eea706144e62dab30a1`

            const res = await fetch(url);
            const data = await res.json();

            const { temp, humidity, pressure } = data.main;
            const {main: weatherMood} = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset} = data.sys;
            
            const myWeatherInfo = {
                temp,
                humidity,
                pressure,
                weatherMood,
                name,
                speed,
                country,
                sunset
            }

            setWeatherInfo(myWeatherInfo);

        } catch (error) {
            console.log(error)
        }
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
            
            <WeatherCard weatherInfo={weatherInfo}/>
        </>
    )
}

export default Weather;