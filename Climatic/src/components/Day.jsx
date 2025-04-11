import {useContext} from "react";
import WeatherContext from "../Contexts/WeatherContext.jsx";
import icon from "../assets/Images/Icon-192.png"

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
        <div className="h-full w-1/3 flex  flex-col justify-center items-center ">
            <div className="flex justify-start h-1/4 ">
                <p className=" text-xl lg:text-4xl">
                    {props.day}
                </p>
            </div>
            
            

            <div className=" flex flex-col items-center space-y-2 lg:space-y-8 justify-center my-6 h-1/2">
                <img src={IconSelector(props.weathercode, true)} alt="" className="w-12 h-12 lg:w-[150px] lg:h-[150px]"/>
                <div className="flex items-center">
                    <div className="h-[14px] w-[14px] lg:h-7 lg:w-7 mr-3 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Image-Saturation--Streamline-Core">
                            <desc>Image Saturation Streamline Icon: https://streamlinehq.com</desc>
                            <g id="image-saturation">
                                <path id="Vector (Stroke)" fill="#8fbffa" d="M6.46466 0.224519c0.29286 -0.2927327 0.77411 -0.2958739 1.06698 -0.003141 0.26708 0.26998 0.52494 0.549121 0.77832 0.831932 0.4616 0.51522 1.0786 1.2397 1.69734 2.07465 0.6171 0.83265 1.2468 1.78968 1.7249 2.76936 0.4731 0.96941 0.8275 2.02053 0.8275 3.02575 0 0.01386 -0.0004 0.02771 -0.0012 0.04154 -0.0781 1.40809 -0.7106 2.72799 -1.7592 3.67129C9.72104 13.6059 8.08624 14 6.99982 14c-1.08641 0 -2.72123 -0.3941 -3.79952 -1.3641 -1.04858 -0.9433 -1.68109 -2.2632 -1.75921 -3.67129 -0.00076 -0.01383 -0.00115 -0.02768 -0.00115 -0.04154 0 -1.00522 0.35443 -2.05634 0.82753 -3.02575 0.47811 -0.97968 1.10778 -1.93671 1.72484 -2.76936 0.61877 -0.83495 1.23577 -1.55943 1.69737 -2.07465 0.2523 -0.281605 0.50857 -0.560377 0.77498 -0.828791Z" stroke-width="1">
                                </path>
                                <path id="Vector (Stroke)_2" fill="#2859c5" d="M8.30996 1.05308c0.4616 0.51521 1.07861 1.23969 1.69734 2.07465 0.6171 0.83264 1.2468 1.78968 1.7249 2.76935 0.4731 0.96942 0.8275 2.02053 0.8275 3.02576 0 0.01385 -0.0004 0.02771 -0.0012 0.04154 -0.0781 1.40812 -0.7106 2.72792 -1.7592 3.67122 -1.07825 0.9701 -2.71306 1.3642 -3.79948 1.3642V0.00315857c0.19297 -0.00036087 0.38581 0.07204093 0.53182 0.21798543 0.26708 0.269981 0.52494 0.549121 0.77832 0.831936Z" stroke-width="1">
                                </path>
                            </g>
                        </svg>
                    </div>
                    <p className="text-sm lg:text-lg">{props.precipitationProb} %</p>
                </div>

                <div className="flex items-center">
                    <img src={icon} className="h-[14px] w-[14px] lg:h-7 lg:w-7 mr-2 "></img>
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