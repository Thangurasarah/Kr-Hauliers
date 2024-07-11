import React from 'react'
import type { NextPage } from "next";
import AboutUs from '@/app/Pages/About';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="top-0 left-0 right-0  bg-black shadow-md z-50 h-36">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex-shrink-0 flex px-20 items-center">
          <a href="/" className="text-2xl text-white font-bold">KR Hauliers</a>
        </div>
        <div className="flex-grow mt-28 flex justify-center">
        <div className="hidden md:flex md:items-center md:space-x-4">
          {''}
          <Link href="/" className="  text-3xl text-white hover:text-blue-300 hover:underline">Home</Link>
          {''}
          <Link href="/About" className=" text-white text-3xl hover:text-blue-300 hover:underline">About</Link>
          {''}
          <Link href="/contact" className=" text-white text-3xl hover:text-blue-300 hover:underline ">Contact</Link>
          </div>
         </div>
      </div>
    </div>
    <div className="flex items-center md:items-center mt-10 px-4 justify-end space-x-4">
              <a href="/login" className="text-white text-2xl underline">Login</a>
              <a href="/signup" className="text-white text-2xl underline">SignUp</a>
            </div>
    
  </header>
)
}

export default Header;
 

