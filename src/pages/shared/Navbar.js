import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
    const menuItems = <>
        {/* <li><NavLink className='rounded-lg' to='/'>Home</NavLink></li> */}
        <li><NavLink className={({ isActive }) => isActive ? 'rounded-lg bg-black text-white' : 'rounded-lg bg-black text-white opacity-70'} to='/single-rooms'>Single</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'rounded-lg bg-black text-white' : 'rounded-lg bg-black text-white opacity-70'} to='/double-rooms'>Double</NavLink> </li>
        <li><NavLink className={({ isActive }) => isActive ? 'rounded-lg bg-black text-white' : 'rounded-lg bg-black text-white opacity-70'} to='/vip-rooms'>Vip</NavLink> </li>
        <li><NavLink className={({ isActive }) => isActive ? 'rounded-lg bg-black text-white' : 'rounded-lg bg-black text-white opacity-70'} to='/contact'>Contact</NavLink> </li>
    </>


    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">

                <div class="w-full navbar bg-[#d5e8f5] px-20 justify-between">
                    <Link to='/' class=" px-2 mx-2 text-2xl">Super Home</Link>

                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal gap-x-2">
                            {menuItems}

                        </ul>
                    </div>
                </div>
                {
                    children
                }
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {menuItems}

                </ul>

            </div>
        </div>
    );
};

export default Navbar;