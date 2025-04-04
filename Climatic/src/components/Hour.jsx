import icon from '../assets/Images/Icon-192.png'
function Hour()
{
    return (
        <div className="w-full h-[16.666%] flex text-xl lg:text-2xl">
            <div className="flex justify-start items-center w-1/3">6pm</div>
            <div className="flex items-center justify-center w-1/3">
                <img src={icon} alt="" className="h-6 w-6 lg:h-9 lg:w-9"/>
            </div>
            <div className="flex justify-end items-center w-1/3">26°</div>
        </div>
    );
}

export default Hour;