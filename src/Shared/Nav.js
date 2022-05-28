import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../firebase.init'

export default function Nav() {
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return 'Loading...'
    }
    const navlinks = < >
        <Link to='/' >Home</Link>
        <Link to='/portfolio' >Our Portfolio</Link>
        <Link to='/team' >Our Team</Link>
        <Link to='/contact' >Contact Us</Link>
        {
            user ?
                <>
                    <div className="dropdown">
                        <label tabindex="0">
                            <div className="avatar cursor-pointer">
                                <div className="w-12 rounded-full ring ring-accent ">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </div>
                        </label>
                        <ul tabindex="0" className="dropdown-content menu p-2 rounded-box w-32 space-y-4">

                            <Link to='/dashboard' className='p-0 hover:text-accent duration-500'>Dashboard</Link>
                            <div className="rounded-md" onClick={() => signOut(auth)}>Sign Out</div>
                        </ul>
                    </div>

                </>
                :
                <Link to='/login' className='btn-accent py-3 px-8 rounded-md block' >Login</Link>
        }
    </ >

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col lg:px-20">
                <div className="w-full navbar">
                    <div className="flex-none lg:hidden">
                        <label for="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2"><img src="logo192.png" className='w-1/2 h-1/2 lg:w-40' alt="" /></div>
                    <div className="flex-none hidden lg:block">

                        <ul className="menu menu-horizontal items-center justify-center space-x-5 py-10">
                            {navlinks}

                        </ul>
                    </div>
                </div>
                <div className="hero-content lg:justify-between flex-col lg:flex-row-reverse">
                    <div className="lg:w-1/2 flex items-center justify-center">
                        <img src="https://raw.githubusercontent.com/ProgrammingHero1/jerins-parlour/main/Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept%201.png" className="w-full lg:w-2/3 rounded-lg" alt='treatment' />
                    </div>
                    <div className="lg:w-1/2 space-y-8">
                        <span><h1 className="lg:text-5xl text-3xl text-neutral font-bold">BEAUTY SALON</h1>
                            <h1 className="lg:text-5xl text-3xl text-neutral font-bold"> FOR EVERY WOMEN</h1></span>
                        <p className="text-secondary capitalize lg:pr-16">We Are one of the famous salons situated all over the <strong>globe</strong> and has been carrying out their services with pride.we offer different types of beauty services like makeup, haircut, pedicure, manicure, and others.</p>
                        <button className="btn btn-accent text-white">Get an Appointment</button>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label for="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    <label for="my-drawer-3" className="btn btn-square btn-ghost">
                        <i className="bi bi-x text-5xl"></i>
                    </label>
                    {navlinks}

                </ul>

            </div>
        </div>
    )
}
