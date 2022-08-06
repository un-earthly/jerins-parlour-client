import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../firebase.init'

export default function Nav({ children }) {
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
                    <div class="dropdown dropdown-end">
                        <label tabindex="0">
                            <div className="avatar cursor-pointer">
                                <div className="w-12 rounded-full ring ring-accent ">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </div>
                        </label>
                        <ul tabindex="0" className="dropdown-content bg-base-100 shadow menu rounded-box w-32">

                            <li><Link className='w-full hover:text-accent duration-500' to='/dashboard'>Dashboard</Link></li>
                            <li> <div className="rounded-md w-full" onClick={() => signOut(auth)}>Sign Out</div></li>
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
            <div className="drawer-content flex flex-col">
                <div className="w-full p-4 navbar">
                    <div className="flex-none lg:hidden">
                        <label for="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <Link to="/" className="flex-1 px-2 mx-2"><img src="logo192.png" className='w-1/3 h-1/3 lg:w-32' alt="" /></Link>
                    <div className="flex-none hidden lg:block">

                        <ul className="menu menu-horizontal items-center justify-center space-x-5 py-10">
                            {navlinks}

                        </ul>
                    </div>
                </div>

                {children}

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
