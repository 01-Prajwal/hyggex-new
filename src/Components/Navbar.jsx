import React from 'react'

import logo from '../assets/Component 40.png'


const Navbar = () => {
    return (
        <>
            <div className="flex justify-around flex-col sm:flex-row h-20 w-[100%] items-center">


                <img src={logo} alt="" className='w-36 h-8' />
                <div className=" flex justify-between  w-[100%] sm:w-[36%] items-center h-14">
                    <span>Home</span>
                    <span>Flashcard</span>
                    <span>Contact</span>
                    <span>FAQ</span>

                    <button class="h-10 w-32 bg-gradient-to-r from-blue-900 to-blue-500 text-white  rounded-3xl">
                        Login
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar