import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import CityInput from "./components/CityInput.jsx";
import WeatherDisplay from "./components/WeatherDisplay.jsx";

function App() {

    return (
    
        <div className="bg-bg-2 text-text-color overflow-hidden min-h-screen min-w-screen flex flex-col items-center">
            <Header></Header>
           
            <div className="flex flex-col h-full p-8 justify-center items-center">
                <CityInput></CityInput>

                <WeatherDisplay></WeatherDisplay>
            </div>
            
            
           
           
           
        </div> 
    
  )
}

export default App
