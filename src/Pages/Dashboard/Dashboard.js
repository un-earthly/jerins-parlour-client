import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Dashboard() {
    return (
        <>
            <div className='flex w-full items-center justify-between bg-white p-3'>
                <Link to='/'><img src="logo192.png" className='w-1/2 lg:w-1/3 block ml-3' alt="" /></Link>
                <label for="my-drawer-2" class="drawer-overlay lg:hidden"><i className="bi bi-x text-5xl"></i></label>
            </div>
            <div class="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content bg-[#f4f7fc] p-10">
                    <Outlet />
                </div>
                <div class="drawer-side bg-white">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 text-base-content ">
                        <li><NavLink to='/dashboard/my-appointment'>My Appointments</NavLink> </li>
                        <li> <NavLink to='/dashboard/my-bookings'>My Bookings</NavLink> </li>
                        <li><NavLink to='/dashboard/my-review'>My Review</NavLink></li>
                    </ul>

                </div>
            </div>
        </>
    )
}
