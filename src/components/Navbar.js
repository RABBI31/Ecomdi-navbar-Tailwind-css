import React from 'react'
import {Link } from 'react-router-dom'
import image1 from '../images/image2.png'
import './Navbar.css'

const Navbar = ({ toggle }) => {
    return (
        <div>
            <nav className='flex justify-between items-center bg-gray-900 h-16  text-black
            relative shadow-sm font-mon '  role='navigation' >
                <Link to='/' className='pl-8 sm'>
                <div className="logo sm:w-full">
                    <img src={image1} />
                </div>
                </Link>
                <div className='px-4 cursor-pointer  rounded' >
                <form class="w-full max-w-sm">
                    <div class="flex items-center border-b border-teal-500 py-2">
                     <input class="appearance-none bg-transparent border-none w-full text-black-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search" aria-label="Full name" />
                     <button class="flex-shrink-0 bg-yellow-300 hover:bg-teal-700 border-yellow-300 hover:border-teal-700 text-sm border-4 text-black py-1 px-2 rounded hidden md:block" type="button">
                      Search
                     </button>
    
                </div>
               </form>
                </div>


                <div className='px-4 cursor-pointer text-yellow-300 md:hidden lg:hidden' onClick={toggle} >
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">

                        <path strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                </div>
                
                <div className='px-4 cursor-pointer text-3xl text-yellow-300  hidden  md:block' >
                    <Link to='/profile' className='p-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        className="h-7 w-8 " viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
                <div className='px-4 cursor-pointer text-2xl text-yellow-300 hidden  md:block  ' >
                    <Link to='/profile' className='p-4'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-8 "
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                    </Link>

                </div>
                <div className='px-4 cursor-pointer hidden  md:block ' >
                    <button className=' flex-shrink-0 bg-yellow-300 hover:bg-teal-700 border-yellow-300 hover:border-teal-700 text-sm border-4 text-black py-1 px-2 rounded mr-8'>
                        Login
                    </button>
                </div>


                {/* <div className='pr-8 md:block hidden'>
                <Link to='/profile' className='p-4'>
                <div className='  text-yellow-500 text-2xl  px-4 cursor-pointer  ' >
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 "
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                </Link>
                <Link to='/cart' className='p-4'>
                <div className='text-yellow-500 text-2xl  px-4 cursor-pointer '>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                </div>
                </Link>
                <Link to='/login' className='p-4'>
                <div className=' '>
                    <button className='uppercase' style={{ background: "#F59E0B", borderColor: "#F59E0B" }}>
                        Login
                    </button>
                </div>
                </Link> */}

                {/* </div> */}
            </nav>
        </div>

    )
}

export default Navbar