import React from 'react'

const navbar = () => {
  return (
    <div>
      <nav className="relative flex justify-center items-center h-16 bg-white ">
        <div className="absolute left-3">Logo</div>
        <ul className="absolute  flex space-x-12 text-xl text-gray-500 ">
          <li className="hover:bg-amber-400 hover:text-white px-2 py-1 rounded-2xl cursor-pointer">
            Home
          </li>
          <li className="hover:bg-amber-400 hover:text-white px-2 py-1 rounded-2xl cursor-pointer">
            Crop Genius
          </li>
          <li className="hover:bg-amber-400 hover:text-white px-2 py-1 rounded-2xl cursor-pointer">
            Shop
          </li>
          <li className="hover:bg-amber-400 hover:text-white px-2 py-1 rounded-2xl cursor-pointer">
            About
          </li>
          <li className="hover:bg-amber-400 hover:text-white px-2 py-1 rounded-2xl cursor-pointer">
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default navbar