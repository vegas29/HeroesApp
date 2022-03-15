import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-5 shadow-lg text-white text-xl">
            
            <div className="container mx-auto flex flex-col md:flex-row items-center  gap-5 ">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Asociaciones
                </Link>

                <div className="flex flex-col md:flex-row gap-5">
                    <NavLink 
                        className="hover:bg-blue-600 py-2 px-3 hover:px-3 hover:py-2 hover:rounded-lg text-center" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="hover:bg-blue-600 py-2 px-3 hover:px-3 hover:py-2 hover:rounded-lg text-center" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>

                <div className="flex md:justify-end md:w-full ">
                    <ul className="">
                        <NavLink 
                            activeClassName="active"
                            className="hover:bg-blue-600 py-2 px-3 hover:px-3 hover:py-2 hover:rounded-lg" 
                            exact
                            to="/login"
                        >
                            <i class="fa-solid fa-right-from-bracket"></i>
                        </NavLink>
                    </ul>
                </div>
            </div>
            
        </nav>
    )
}