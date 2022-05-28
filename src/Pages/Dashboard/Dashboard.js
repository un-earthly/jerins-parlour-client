import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side bg-white">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><NavLink to='/dashboard/my-treatment'>My Treatments</NavLink> </li>
                    <li> <NavLink to='/dashboard/my-bookings'>My Bookings</NavLink> </li>
                    <li><NavLink to='/dashboard/my-revirw'>My Review</NavLink></li>
                    <label for="my-drawer-2" class="drawer-overlay"></label>

                </ul>

            </div>
        </div>
    )
}
