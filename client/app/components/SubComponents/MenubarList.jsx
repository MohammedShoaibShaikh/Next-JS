import React from 'react'
const MenubarList = ({showMenubar, setShowMenubar}) => {
    const MenubarHide = () => {
        setShowMenubar(!showMenubar)
    }
  return (
    <div className={`fixed top-0 right-0 w-[70%] h-full border-r border-gray-900 bg-blue-600 transform ${
        showMenubar ? 'translate-x-0' : 'translate-x-full'
      } transition-all duration-400 ease-in-out`}
    >
        <div className='flex justify-between items-center h-24 mx-auto px-4 bg-blue-600'>
            <img src='/images/logo.png' alt='Logo Image' className='w-[200px] h-[100px] mx-auto my-10' />
            {showMenubar ? (<img src='/images/closeicon.png' alt='Close Icon' onClick={MenubarHide} />) : null}
        </div>
        <ul className='text-black'>
            <li className='p-4 hover:bg-blue-800 hover:text-white font-semibold rounded-sm cursor-pointer transition-colors'>Home</li>
            <li className='p-4 hover:bg-blue-800 hover:text-white font-semibold rounded-sm cursor-pointer transition-colors'>FreightAudit</li>
            <li className='p-4 hover:bg-blue-800 hover:text-white font-semibold rounded-sm cursor-pointer transition-colors'>Technology</li>
            <li className='p-4 hover:bg-blue-800 hover:text-white font-semibold rounded-sm cursor-pointer transition-colors'>Services</li>
            <li className='p-4 hover:bg-blue-800 hover:text-white font-semibold rounded-sm cursor-pointer transition-colors'>About</li>
            <li className='p-4 hover:bg-blue-800 hover:text-white font-semibold rounded-sm cursor-pointer transition-colors'>Contact</li>
        </ul>
    </div>
  )
}

export default MenubarList
