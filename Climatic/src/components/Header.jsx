import icon from '../assets/Images/Icon-192.png'

function Header()
{
    return (
        <div className="
        flex 
        justify-center 
        items-center 
        p-8 
        min-w-screen 
        bg-bg-1
        font-montserrat
        shadow-md
        ">

            <div className="
                min-w-[40px] min-h-[40px]
                max-w-[120px] max-h-[120px] 
                sm:max-w-[80px] sm:max-h-[80px]
                md:max-w-[100px] md:max-h-[100px]
                lg:max-w-[120px] lg:max-h-[120px]
            ">
                <img src={icon} alt="Sun icon" className="w-full h-full" />
            </div>


            <h1 className="text-text-color mx-10 text-5xl lg:text-7xl">CLIMATIC</h1>
        </div>
        
    );
}

export default Header;