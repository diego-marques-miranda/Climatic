import Now from "./Now.jsx";
import Hours from "./Hours.jsx";

function TodayWeather()
{
   return (
       <div className=" w-full h-[75%] lg:h-full lg:w-[35%]">
           <Now></Now>
           <Hours></Hours>
       </div>
       ); 
}

export default TodayWeather;