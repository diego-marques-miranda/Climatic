import TodayWeather from "./TodayWeather.jsx";
import Days from "./Days.jsx";

function WeatherDisplay()
{
    return (
        <div className="flex flex-col lg:flex-row bg-bg-1 h-[68vh] lg:h-[57vh] w-[86%] lg:w-[84%] rounded-xl p-8 shadow-xl" >
            
            <TodayWeather></TodayWeather>
            <Days></Days>


        </div>
    );
}

export default WeatherDisplay;