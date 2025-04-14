import {useContext, useState} from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import CityInput from "./components/CityInput.jsx";
import WeatherDisplay from "./components/WeatherDisplay.jsx";
import WeatherContext, {WeatherProvider} from "./Contexts/WeatherContext.jsx";
import CityName from "./components/CityName.jsx";

function App() {
    
    return (
        <WeatherProvider>
            <div className="bg-bg-2 text-text-color overflow-hidden min-h-screen min-w-screen flex flex-col items-center">
                <Header></Header>

                <CityInput></CityInput>
                
                <CityName></CityName>

                <WeatherDisplay></WeatherDisplay>

            </div>
        </WeatherProvider>
        
    
  )
}

export default App
