import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {

    const handleLogout = () =>{
        //TODO: por hacer
        console.log('logout');
    }
    
    return (
        <nav className="bg-blue-500 p-5 shadow-lg text-white text-xl">
            
            <div className="container mx-auto flex flex-col md:flex-row items-center  gap-5 ">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Asociaciones
                </Link>

                <div className="flex flex-col md:flex-row gap-5 items-center">
                    <NavLink 
                        className={ ({isActive}) => "hover:bg-blue-600 py-2 px-3 hover:px-3 hover:py-2 hover:rounded-lg text-center " + (isActive ? 'font-bold bg-blue-700 rounded-md' : '')} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => "hover:bg-blue-600 py-2 px-3 hover:px-3 hover:py-2 hover:rounded-lg text-center " + (isActive ? 'font-bold bg-blue-700 rounded-md' : '')}  
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>

                <div className="flex gap-2 md:justify-end md:w-full">
                    <ul className="flex items-center gap-5">
                        <span className="font-semibold">
                            Bienvenido Alejandro
                        </span>
                        <button
                            className="hover:bg-blue-600 py-2 px-3 hover:px-3 hover:py-2 hover:rounded-lg"
                            onClick={handleLogout}
                        >
                            <i className="fa-solid fa-right-from-bracket"></i>
                        </button>
                    </ul>
                </div>
            </div>
            
        </nav>
    )
}