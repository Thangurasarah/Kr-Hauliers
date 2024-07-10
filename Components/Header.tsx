import React from 'react'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0  bg-black shadow-md z-50 h-36">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex-shrink-0 flex items-center">
          <a href="/" className="text-2xl text-white font-bold">KR Hauliers</a>
        </div>
        <div className="flex-grow flex justify-center">
        <div className="hidden md:flex md:items-center md:space-x-4">
          <a href="/" className="text-xl text-white">Home</a>
          <a href="/about" className="text-white text-xl">About</a>
          <a href="/contact" className="text-white text-xl ">Contact</a>
          </div>
         </div>
      </div>
    </div>
    <div className="flex items-center md:items-center top-0 left-0 justify-end space-x-4">
              <a href="/login" className="text-white text-xl">Login</a>
              <a href="/signup" className="text-white text-xl">SignUp</a>
            </div>
    
  </header>
)
}

export default Header;
 

