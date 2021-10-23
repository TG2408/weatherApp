import React, {useState, useEffect} from "react";
import styles from './style.module.css'
import './weather-icons.min.css'

const WeatherCard = ( { weatherInfo } ) => {

    const [weatherState, setWeatherState] = useState("");

    const {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset
    } = weatherInfo;

    useEffect(() => {
        if(weatherMood) {
            switch (weatherMood) {
                case "Sunny":
                    setWeatherState(`wi wi-day-sunny`);
                    break;
                case "Clouds":
                    setWeatherState(`wi wi-day-cloudy`);
                    break;
                case "Haze":
                    setWeatherState(`wi wi-day-haze`);
                break;
                case "Rainy":
                    setWeatherState("wi wi-day-thunderstorm")
                break;
                default:
                    setWeatherState(`wi wi-day-sunny`);
                    break;
            }

        }
    },[weatherMood])


    let sunsetTime = new Date(sunset*1000).toLocaleTimeString();
    console.log(new Date(sunset))
    return (
        <>
            <article className={styles.widget}>
                <div className={styles.weatherIcon}>
                    <i className={weatherState}></i>
                </div>
                
                <div className={styles.basicInfo}>
                    <div className={styles.weatherInfo}>
                        <span>{temp}&deg;</span>
                    </div>
                    <div className={styles.weatherConditions}>
                        {weatherMood}  
                    </div>
                    <div className={styles.place}>
                        {name}, {country}
                    </div>
                    <div className={styles.date}>
                        {new Date().toLocaleString()}
                    </div>
                </div>

                {/* Our 4 devided section */}
                <div className={styles.extraInfo}>
                    <div className={styles.sunset}>
                        <i className="wi wi-sunset"></i>    
                        <i>{sunsetTime} Sunset</i>
                    </div>
                    <div className={styles.humidity}>
                        <i className="wi wi-humidity"></i>    
                        <i>{humidity} %</i>
                    </div>
                    <div className={styles.pressure}>
                        <i className="wi wi-night-cloudy-windy"></i>    
                        <i>{pressure}</i>
                    </div>
                    <div className={styles.wind}> 
                        <i className="wi wi-wind-beaufort-0"></i>    
                        <i>{speed} km/h</i>
                    </div>
                </div>
            </article>
        </>
    )
}

export default WeatherCard;