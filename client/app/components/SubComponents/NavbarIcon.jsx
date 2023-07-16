'use client'
import React, {useState} from 'react'
const NavbarIcon = () => {
    const [showIcon, setShowIcon] = useState(false)
    const handleClick = () => {
        setShowIcon(!showIcon)
    }
    const buttonWithSound = () => {
        const audio = new Audio('/audio/sunClick.wav')
        audio.play()
    }
  return (
    <div onClick={() => {handleClick(); buttonWithSound();}} className='hidden md:flex w-[30px] p-0 cursor-pointer'>
      {showIcon ? (<img src='/images/moonicon.png' alt='Moon Icon' />) : (<img src='/images/sunicon.png' alt='Sun Icon' />) }
    </div>
  )
}

export default NavbarIcon
