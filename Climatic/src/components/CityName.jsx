import {useContext} from "react";
import WeatherContext from "../Contexts/WeatherContext.jsx";

function CityName()
{
    const {city} = useContext(WeatherContext);
    
    return <div className="text-2xl mb-4 font-bold">{city}</div>
}

export default CityName;