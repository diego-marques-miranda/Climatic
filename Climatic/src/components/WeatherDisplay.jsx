import NowWeather from "./NowWeather.jsx";
import WeekWeather from "./WeekWeather.jsx";

function WeatherDisplay()
{
    
    return (
        <div className="
        w-[90%]
        h-[90%]
        mt-8
        p-8
        
        flex
        
        bg-bg-1 
        rounded-xl
        shadow-xl
        ">
            
            <div className="
            bg-bg-3
            h-full
            w-[40%]
            rounded-xl
            p-4
            
            ">
                <NowWeather></NowWeather>
                <WeekWeather></WeekWeather>

            </div>
            
            
        </div>
    );
}

export default WeatherDisplay;