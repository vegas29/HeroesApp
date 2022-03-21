import {useMemo} from 'react';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { heroImages } from '../../helpers/heroImages';
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {

    const {heroeId} = useParams();
    const navigate = useNavigate();
    
    const hero = useMemo(()=>getHeroById(heroeId), [heroeId]);

    const handleReturn = ()=>{
        navigate(-1);
    }

    if(!hero){
        return <Navigate to="/" />
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const imagenPath = `/assets/img/${id}.jpg`;

    return (
        <>
            <h1 className="text-center font-bold text-3xl mt-5">{superhero}</h1>

            <div className="flex flex-col md:flex-row w-full bg-white rounded-sm shadow-md mt-10 py-10 md:max-w-3xl md:mx-auto">
                <div className="px-5 md:grid md:grid-cols-2 md:gap-5 md:justify-center md:items-center md:w-full">
                    <div className="rounded-md overflow-hidden md:row-start-1 md:row-end-5">
                        {/* <img className="h-96 w-full object-cover mx-auto rounded-md hover:scale-105 transition-all cursor-pointer animate__animated animate__fadeInDown" src={imagenPath} alt={superhero}/> */}

                        <img className="h-96 w-full object-cover mx-auto rounded-md hover:scale-105 transition-all cursor-pointer animate__animated animate__fadeInDown" src={heroImages(`./${heroeId}.jpg`)} alt={superhero}/>
                    </div>{/*Imagen*/}
                    
                    <p className="font-semibold mt-5 text-lg md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:mt-20 animate__animated animate__fadeInRight">Name: <span className="font-normal">{alter_ego}</span></p>
                    
                    <p className="font-semibold mt-1 text-lg md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 animate__animated animate__fadeInRight">First Appearance: <span className="font-normal">{first_appearance}</span></p>

                    <p className="font-semibold mt-1 text-lg md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:mt-20 animate__animated animate__fadeInRight">Publisher: <span className="font-normal">{publisher}</span></p>

                    <p className="font-semibold mt-1 text-lg md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 animate__animated animate__fadeInRight">Characters: <span className="font-normal">{characters}</span></p>

                    <button
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white mt-5 py-2 rounded-sm font-semibold md:col-start-1 md:col-end-3 animate__animated animate__fadeIn"
                        onClick={handleReturn}
                    >
                        Volver
                    </button>
                </div> 

            </div>
        </>
    )
}
