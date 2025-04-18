import {useContext, useState} from "react";
import WeatherContext from "../Contexts/WeatherContext.jsx";

function CityInput()
{
    const {city, updateCity} = useContext(WeatherContext);
    
    const [inputCity, setInputCity] = useState(city);
    
    function handleInputChange(e)
    {
        const value = e.target.value;
        setInputCity(value);
    }
    
    function submitCity(e)
    {
        if (e.key === 'Enter' && inputCity.trim() !== '')
        {
            updateCity(inputCity);

        }
    }
    
    return (
            <div className="
        bg-bg-1 
        px-4 
        py-3 
        m-10 
        rounded-xl 
        flex 
        justify-between
        items-center
        shadow-xl 
        hover:bg-bg-h-1 
        transition-colors 
        duration-300
        
        w-[50%]
        h-[5%]
        
        lg:w-[25%]
        lg:text-2xl
        
        "
            onKeyDown={(e) => submitCity(e)}    
            >
                <div className="flex items-center">
                    <input onChange={(e) => handleInputChange(e)} value={inputCity} className="focus:outline-none w-[80%]" type="text" placeholder="Enter a city..."/>
                </div>

                <div className="bg-slate-800 p-[6px] rounded-lg">
                    <svg onClick={() => updateCity(inputCity)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-text-color">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                
                
            </div>
        
        
    );
}

export default CityInput;

