import { Link } from "react-router-dom";


export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const imagePath = `assets/img/${id}.jpg`;

    return (
        <div className="flex flex-col justify-between bg-white shadow-md rounded-md gap-5 mx-5 h-96 md:h-max pb-5 md:w-92 hover:shadow-xl cursor-pointer hover:scale-110 transition-all duration-150 animate__animated animate__fadeIn">

            <div className="overflow-hidden rounded-t-lg grow">
                <img src={imagePath} className="object-cover grow w-full h-72 md:h-96 rounded-t-lg  hover:scale-110 cursor-pointer transition-all duration-150 hover:bg-black" alt={superhero}/>
            </div>

            <p className="text-center font-bold text-xl flex-none">{superhero}</p>

            <div className="flex flex-col px-5 flex-none md:h-56">
                <p className="text-md md:text-base font-semibold">
                    <span>
                        <i className="fa-solid fa-book text-gray-400 text-2xl mr-2"></i>
                    </span>
                    Publisher: 
                    <span className="ml-2 font-normal">
                        {publisher}
                    </span>
                </p>

                <p className="text-md md:text-base font-semibold">
                    <span>
                        <i className="fa-solid fa-user text-gray-400 text-2xl mr-2"></i>
                    </span>
                    Name: 
                    <span className="ml-2 font-normal">
                        {alter_ego}
                    </span>
                </p>

                <p className="text-md md:text-base font-semibold">
                    <span>
                        <i className="fa-solid fa-clock text-gray-400 text-2xl mr-2"></i>
                    </span>
                    First Appearance: 
                    <span className="ml-2 font-normal block">
                        {first_appearance}
                    </span>
                </p>

                {
                    (alter_ego !== characters)
                        && <p className="text-md md:text-base font-semibold">
                                <span>
                                    <i className="fa-solid fa-user-group text-gray-400 text-2xl mr-2"></i>
                                </span>
                                Characters  : 
                                <span className="ml-2 font-normal">
                                    {characters}
                                </span>
                            </p>
                }

                
                    
            </div>
            
            <div className="flex justify-end px-5">
                <Link 
                    to={`/hero/${id}`}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer rounded-md text-center font-semibold py-2"
                >
                    Más información
                </Link>
            </div>
            
        </div>
    )
}
