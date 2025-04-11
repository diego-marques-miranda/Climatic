import icon from '../assets/Images/Icon-192.png'
import {useContext} from "react";
import WeatherContext from "../Contexts/WeatherContext.jsx";
function Day(props)
{
    const {IconSelector} = useContext(WeatherContext);

    function uvIntensity(uvIndex) {
        if (uvIndex > 0 && uvIndex <= 2) {
            return "Low";
        } else if (uvIndex >= 2.99 && uvIndex <= 6.99) {
            return "Average";
        } else if (uvIndex >= 7) {
            return "High";
        } 
    }
    
    return (
        <div className="h-full w-1/3 flex flex-col justify-center items-center ">
            <div className="flex justify-start h-1/4 ">
                <p className=" text-xl lg:text-4xl">
                    {props.day}
                </p>
            </div>
            
            

            <div className=" flex flex-col items-center space-y-2 lg:space-y-8 justify-center my-6 h-1/2">
                <img src={IconSelector(props.weathercode, true)} alt="" className="w-12 h-12 lg:w-[150px] lg:h-[150px]"/>
                <div className="flex items-center">
                    <div className="h-[14px] w-[14px] lg:h-8 lg:w-8 mr-2 bg-blue-700 rounded-full"></div>
                    <p className="text-sm lg:text-lg">{props.precipitationProb} %</p>
                </div>

                <div className="flex items-center">
                    <div className="h-[14px] w-[14px] lg:h-8 lg:w-8 mr-2 bg-yellow-300 rounded-full"></div>
                    <p className="text-sm lg:text-lg">UV {uvIntensity(props.uvIndex)}</p>
                </div>
            </div>
            
            
            
            <div className="pl-2 flex h-1/4 items-end text-base lg:text-3xl lg:mb-7">

                {Math.round(props.tempMax)} ° - {Math.round(props.tempMin)} °
            </div>
        </div>
    );
}

export default Day;