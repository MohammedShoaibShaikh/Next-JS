'use client'
import React, { useState, useEffect } from 'react'
import NavbarIcon from './NavbarIcon'
import MenubarList from './MenubarList'
const NavbarList = () => {
  const [showMenubar, setShowMenubar] = useState(false)

  const handleClick = () => {
    setShowMenubar(!showMenubar)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMenubar(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      console.log('cleanup')
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <img src='/images/logo.png' alt='Logo Image' />
        <ul className='hidden md:flex text-black'>
            <li className='p-4 hover:bg-blue-800 hover:text-white font-semibold rounded-sm cursor-pointer'>Home</li>
            <li className='p-4 hover:bg-blue-800 hover:text-white font-semibold rounded-sm cursor-pointer'>FreightAudit</li>
            <li className='p-4 hover:bg-blue-800 hover:text-white font-semibold rounded-sm cursor-pointer'>Technology</li>
            <li className='p-4 hover:bg-blue-800 hover:text-white font-semibold rounded-sm cursor-pointer'>Services</li>
            <li className='p-4 hover:bg-blue-800 hover:text-white font-semibold rounded-sm cursor-pointer'>About</li>
            <li className='p-4 hover:bg-blue-800 hover:text-white font-semibold rounded-sm cursor-pointer'>Contact</li>
        </ul>
        <NavbarIcon />
        <div className='block md:hidden' onClick={handleClick}>
            {!showMenubar ? (<img src='/images/menubar.png' alt='Side Bar'/>) : null }      
        </div>
        {showMenubar && <MenubarList showMenubar={showMenubar} setShowMenubar={setShowMenubar}/>}
    </div>
  )
}

export default NavbarList
