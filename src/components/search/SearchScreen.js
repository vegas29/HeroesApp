import {useMemo} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from "../hooks/useForm";
import {getHeroesByName} from '../../selectors/getHeroesByName';
import {HeroCard} from '../hero/HeroCard';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);
  const [{searchText}, handleInputChange, reset] = useForm({
    searchText:q
  });

  const heroesFiltered = useMemo(()=>getHeroesByName(q), [q]);   


  const handleSubmit = (e)=>{
    e.preventDefault();

    if(searchText.trim() === ''){
      alert('El nombre del heroe es necesario');
      return;
    }

    navigate(`?q=${searchText}`);

    reset();
  }

  return (
    <>
        <h1 className="text-center font-bold mt-10 text-2xl"> Busquedas </h1>
        
        <div className="bg-white shadow-md rounded-md">
          <div className="text-center py-7 md:py-10 md:w-5/12 mx-auto px-5">
            <form
              onSubmit={handleSubmit}
            >
              <span className="font-semibold text-md my-2 block">
                Inserte el nombre del héroe
              </span>

              <input
                type="text"
                placeholder="Buscar un héroe"
                className="w-full px-5 rounded-md shadow-sm h-12 bg-gray-100"
                autoComplete="false"
                name="searchText"
                value={searchText}
                onChange={handleInputChange}
              />

              <input
                type="submit"
                value="Buscar"
                className="w-full  bg-blue-500 hover:bg-blue-600 text-white cursor-pointer mt-5 py-2 rounded-md text-md font-semibold"
              />
            </form>
            
          </div>
        </div>

        {/* Resultados */}

        <h2 className="text-center font-bold mt-10 text-2xl">Resultados</h2>

        {
          (q === '')
            ? 
            <div className="bg-white text-gray-400 text-center text-2xl font-bold shadow-lg rounded-lg w-full md:w-5/12 mx-auto py-10 mt-5">
                Busca un heroe, para que se muestre aquí
            </div>
            : (heroesFiltered.length === 0)
              && <div className="bg-red-600 text-white text-center text-2xl font-bold shadow-lg rounded-lg w-full md:w-5/12 mx-auto py-10 mt-5">
                    No hay resultados de {q}
                 </div>
        }

        <div className="text-center py-7 md:py-10 md:max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-5">

          
          {
            heroesFiltered.map(heroes => (
              <HeroCard
                key={heroes.id}
                {...heroes}
              />
            ))
          }
        </div>
    </>
  )
}
