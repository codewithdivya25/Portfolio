import React, { useState } from 'react'
import{RiCloseLine,RiMenu2Line} from "@remixicon/react"


const Navbar = () => {
  const [menu,openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true)
  return (
    <nav className='flex flex-wrap justify-between md:items-center text-white px-12 p:y pt-6 md:px-20'>
    <span className='text-[2.5rem] font-bold trackin-wide  '>Portfolio</span>
    <ul className={`${ menu ? "block" : "hiden" }mx-24 mt-4 font-bold  px-4 rounded-xl bg-opacity-30 md:border-none
    text-center md:bg-transprent md:static md:mx-0 md:flex gap-10`}>

      <a href="#Home">
        <li className='text-[1.5rem] transition duration-300 p-1 md:p-0'>Home</li>
        </a>
        <a href="#About">
        <li className='text-[1.5rem] transition duration-300 p-1 md:p-0'>About</li>
        </a>
        <a href="#Projects">
        <li className='text-[1.5rem] transition duration-300 p-1 md:p-0'>Projects</li>
        </a>
        <a href="#Contact">
        <li className='text-[1.5rem] transition duration-300 p-1 md:p-0'>Contact</li>
        </a>
    </ul>
  
    {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
        />
      )}
</nav> 
  )
}

export default Navbar 
