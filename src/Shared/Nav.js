import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    const navlinks = < >
        <Link to='/' >Home</Link>
        <Link to='/' >Our Portfolio</Link>
        <Link to='/' >Our Team</Link>
        <Link to='/' >Contact Us</Link>
        <Link to='/login' className='btn btn-accent px-16 block' >Login</Link>
    </ >

    return (
        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col px-20">
                <div class="w-full navbar">
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div class="flex-1 px-2 mx-2"><img src="logo192.png" className='w-1/2 h-1/2 lg:w-40' alt="" /></div>
                    <div class="flex-none hidden lg:block">

                        <ul class="menu menu-horizontal items-center justify-center space-x-5 py-10">
                            {navlinks}

                        </ul>
                    </div>
                </div>
                <div class="hero-content lg:justify-between flex-col lg:flex-row-reverse">
                    <div className="lg:w-1/2 flex items-center justify-center">
                        <img src="https://raw.githubusercontent.com/ProgrammingHero1/jerins-parlour/main/Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept%201.png" class="w-full lg:w-2/3 rounded-lg" />
                    </div>
                    <div className="lg:w-1/2 space-y-8">
                        <span><h1 class="lg:text-5xl text-3xl text-neutral font-bold">BEAUTY SALON</h1>
                            <h1 class="lg:text-5xl text-3xl text-neutral font-bold"> FOR EVERY WOMEN</h1></span>
                        <p class="text-secondary capitalize lg:pr-16">We Are one of the famous salons situated all over the <strong>globe</strong> and has been carrying out their services with pride.we offer different types of beauty services like makeup, haircut, pedicure, manicure, and others.</p>
                        <button class="btn btn-accent text-white">Get an Appointment</button>
                    </div>
                </div>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    <label for="my-drawer-3" class="btn btn-square btn-ghost">
                        <i className="bi bi-x text-5xl"></i>
                    </label>
                    {navlinks}

                </ul>

            </div>
        </div>
    )
}
