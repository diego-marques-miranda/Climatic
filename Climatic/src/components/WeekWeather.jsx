import DayWeather from "./DayWeather.jsx";

function WeekWeather()
{
   
    return (
        <div className=" 
        w-full 
        h-[70%]
        
        text-xs
        sm:text-base
        md:text-xl
        lg:text-2xl
        
        ">
            <DayWeather></DayWeather>
            <DayWeather></DayWeather>
            <DayWeather></DayWeather>
            <DayWeather></DayWeather>
            <DayWeather></DayWeather>
            <DayWeather></DayWeather>
            <DayWeather></DayWeather>
            
            
        </div>
    );
}

export default WeekWeather;