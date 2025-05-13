import TodayWeather from "./TodayWeather.jsx";
import Days from "./Days.jsx";
import {useContext} from "react";
import WeatherContext from "../Contexts/WeatherContext.jsx";

function WeatherDisplay()
{
    const {currentWeather} = useContext(WeatherContext)
    if (!currentWeather)
    {
        return (
            <div className="flex justify-center items-center flex-col lg:flex-row text-neutral-500 text-5xl font-bold bg-bg-1 h-[68vh] lg:h-[57vh] w-[86%] lg:w-[84%] rounded-xl p-8 shadow-xl" >

                Loading...

            </div>
        );
    }
    
    return (
        <div className="flex flex-col lg:flex-row bg-bg-1 h-[68vh] lg:h-[57vh] w-[86%] lg:w-[84%] rounded-xl p-8 shadow-xl" >
            
            <TodayWeather></TodayWeather>
            <Days></Days>


        </div>
    );
}

export default WeatherDisplay;