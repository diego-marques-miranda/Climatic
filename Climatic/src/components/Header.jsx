import icon from '../assets/Images/Icon-192.png'

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
            w-16 h-16
            lg:w-[110px] lg:h-[110px]
            " src={icon} alt=""/>
            <span className="ml-4 lg:ml-8">CLIMATIC</span>
        </div>
        
    );
}

export default Header;