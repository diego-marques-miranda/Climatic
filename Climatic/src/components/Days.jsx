import Day from "./Day.jsx";
import {useContext} from "react";
import WeatherContext from "../Contexts/WeatherContext.jsx";

function Days() {
    const {dailyForecast} = useContext(WeatherContext);
    
    if (!dailyForecast)
    {
        return (
            <div className="w-full h-[25%] mt-4 flex lg:h-full ">
                
            </div>
        );
        
    }
    
    const {temperature_2m_max, temperature_2m_min, precipitation_probability_max, uv_index_max, weathercode} = dailyForecast;
    
    const daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const today = date.getDay();

    return (
        <div className="w-full h-[25%] mt-4 flex lg:h-full">
            <Day day="Today" tempMax={temperature_2m_max[0]} tempMin={temperature_2m_min[0]} precipitationProb={precipitation_probability_max[0]} uvIndex={uv_index_max[0]} weathercode={weathercode[0]}></Day>
            <Day day={daysWeek[(today + 1) % 7]} tempMax={temperature_2m_max[1]} tempMin={temperature_2m_min[1]} precipitationProb={precipitation_probability_max[1]} uvIndex={uv_index_max[1]} weathercode={weathercode[1]}></Day>
            <Day day={daysWeek[(today + 2) % 7]} tempMax={temperature_2m_max[2]} tempMin={temperature_2m_min[2]} precipitationProb={precipitation_probability_max[2]} uvIndex={uv_index_max[2]} weathercode={weathercode[2]}></Day>
        </div>
    );
}

export default Days;