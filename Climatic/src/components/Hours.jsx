import Hour from "./Hour.jsx";
import {useContext} from "react";
import WeatherContext from "../Contexts/WeatherContext.jsx";

function Hours()
{
    const {hourlyForecast} = useContext(WeatherContext);

    if (!hourlyForecast || !Array.isArray(hourlyForecast?.time) || hourlyForecast.time.length === 0) {
        return <div className="w-full h-[52%] ">Loading...</div>;
    }
    
    const {time, temperature_2m, weathercode} = hourlyForecast;
    
    return (
        <div className="w-full h-[52%] ">
            <Hour time={time[0]} temperature={temperature_2m[0]} weathercode={weathercode[0]}></Hour>
            <Hour time={time[1]} temperature={temperature_2m[1]} weathercode={weathercode[1]}></Hour>
            <Hour time={time[2]} temperature={temperature_2m[2]} weathercode={weathercode[2]}></Hour>
            <Hour time={time[3]} temperature={temperature_2m[3]} weathercode={weathercode[3]}></Hour>
            <Hour time={time[4]} temperature={temperature_2m[4]} weathercode={weathercode[4]}></Hour>
            <Hour time={time[5]} temperature={temperature_2m[5]} weathercode={weathercode[5]}></Hour>

        </div>
    );
}

export default Hours;