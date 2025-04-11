import icon from '../assets/Icons/clearSky-Day.svg'

function Header()
{
    return (
        <div className="flex 
        justify-center 
        items-center 
        w-full 
        h-[15vh] 
        lg:h-[20vh]
        bg-bg-1 
        font-montserrat
        text-5xl
        lg:text-[96px]
        
        shadow-xl
        ">
            <img className="
            w-18 h-18
            lg:w-[120px] lg:h-[120px]
            " src={icon} alt=""/>
            <span className="ml-4 lg:ml-8">CLIMATIC</span>
        </div>
        
    );
}

export default Header;