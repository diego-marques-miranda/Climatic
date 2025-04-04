import icon from '../assets/Images/Icon-192.png'

function Now()
{
    return (
        <div
            className="
            w-full
            h-[41%]
            bg-bg-2
            rounded-xl
            flex
            items-center
            justify-center
            mb-4
            "
        >
            <div className="
                w-1/2
                flex
                items-center
                justify-center
                gap-4 /* Adiciona um espaçamento menor entre o ícone e o texto */
                lg:gap-8
            ">
                <img className="w-[114px] h-[114px] lg:h-[150px] lg:w-[150px]" src={icon} alt=""/>
                <div className="flex flex-col justify-center items-start /* Alinha o texto à esquerda dentro do container */">
                    <p className="text-6xl lg:text-8xl">27°</p>
                    <p className="text-xl lg:text-3xl">Sunny</p>
                    <p className="text-base lg:text-xl">5:42pm</p>
                </div>
            </div>
        </div>
    );
}

export default Now;