import icon from '../assets/Images/Icon-192.png'
import {useContext} from "react";
import WeatherContext from "../Contexts/WeatherContext.jsx";
function Hour(props)
{
    const {IconSelector} = useContext(WeatherContext);
    const date = new Date(props.time);
    const hours = date.getHours();
    const isDay = hours <= 18 && hours >= 6;
    
    return (
        <div className="w-full h-[16.666%] flex text-xl lg:text-2xl">
            <div className="flex justify-start items-center w-1/3">{hours} : 00</div>
            <div className="flex items-center justify-center w-1/3">
                <img src={IconSelector(props.weathercode, isDay)} alt="" className="h-6 w-6 lg:h-9 lg:w-9"/>
            </div>
            <div className="flex justify-end items-center w-1/3">{Math.round(props.temperature)} °</div>
        </div>
    );
}

export default Hour;