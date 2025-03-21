import icon from "../assets/Images/Icon-192.png";

function NowWeather()
{
    return (
        <div className="
       
        w-full
        h-[40%]
        flex
        items-center
        justify-center
        ">
            <div className="w-[100px] h-[100px]">
                <img src={icon} alt="Sun icon"/>
            </div>
            
            <div className="flex flex-col items-center justify-center">
                <div className="
                ml-4 
                
                text-2xl
                sm:text-3xl
                md:text-3xl
                lg:text-6xl">
                    27 °C
                </div>
                
                <div className="
                flex 
                items-center 
                justify-center
                
                mt-2
                
                text-xs
                sm:text-sm
                md:text-sm
                lg:text-base
                ">
                    11 : 39 - Sunny
                </div>
                
            </div>
            
        </div>
    );
}

export default NowWeather;