
function CityInput()
{
    return (
        <div className="w-screen 
            flex 
            items-center 
            justify-center 
           
            ">
            
            <div className="bg-bg-1 
                   w-[30%]
                   h-12 
                   rounded-lg 
                   shadow-md
                   text-neutral-500
                   px-5
                   sm:text-base
                   md:text-lg
                   lg:text-xl
                   font-open
                   
                   flex
                   items-center
                   justify-between
                   
                   hover:bg-bg-h-1
                   transition-colors
                   duration-300
                   
                   
                   ">
                
                <input type="text"
                       className="
                       focus:outline-none

                   
                   "
                       placeholder="Enter a city..."
                />
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-text-color">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                
            </div>
            
            
        </div>
        
    );
}

export default CityInput;