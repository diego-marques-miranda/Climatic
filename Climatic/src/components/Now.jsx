import icon from '../assets/Images/Icon-192.png'
import {useContext, useState} from "react";
import WeatherContext from "../Contexts/WeatherContext.jsx";

function Now()
{
    const {IconSelector, currentWeather, getWeatherDescription} = useContext(WeatherContext);
    
    
    if (!currentWeather)
    {
        return (<div
            className="
            w-full
            h-[41%]
            bg-bg-2
            rounded-xl
            flex
            items-center
            justify-center
            mb-4
            "
        >
            <div className="
                w-1/2
                flex
                items-center
                justify-center
                gap-4 /* Adiciona um espaçamento menor entre o ícone e o texto */
                lg:gap-8
                text-neutral-500
                text-xl 
                font-bold
                
            ">
                Loading...
            </div>
        </div>)
    }

    const { temperature, is_day, weathercode, time } = currentWeather;

    const localDate = new Date(time);
    const localHours = localDate.getHours();
    const localMinutes = localDate.getMinutes();
   
    const description = getWeatherDescription(weathercode);

    function formatTime(hours, minutes) {
        const formattedHours = hours < 10 ? `0${hours}` : hours;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${formattedHours} : ${formattedMinutes}`;
    }
    
    return (
        <div
            className="
            w-full
            h-[41%]
            bg-bg-2
            rounded-xl
            flex
            items-center
            justify-center
            mb-4
            "
        >
            <div className="
                w-1/2
                flex
                items-center
                justify-center
                gap-4 /* Adiciona um espaçamento menor entre o ícone e o texto */
                lg:gap-8
            ">
                <img className="object-contain w-[114px] h-[114px] lg:h-[150px] lg:w-[150px]" src={IconSelector(weathercode, is_day)} alt=""/>
                <div className="flex flex-col justify-center items-start /* Alinha o texto à esquerda dentro do container */">
                    <p className="text-6xl lg:text-8xl">{Math.round(temperature)}°</p>
                    <p className="text-xl lg:text-3xl">{description}</p>
                    <p className="text-base lg:text-xl">{formatTime(localHours, localMinutes)}</p>
                </div>
            </div>
        </div>
    );
}

export default Now;