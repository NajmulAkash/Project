import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import Image from '../Image/logo.jpg'
function Navbar() {
    const [manu,setmanu]=useState(false);
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md'>
        <div className='flex justify-between h-16 items-center '>
            <div className='flex space-x-2'>
                <img src={Image}alt="Loading" className='w-12 h-12 rounded-full' />
                <h1 className='font-semibold text-xl cursor-pointer'><span className='text-green-500'>N</span>ajmul Akash
                <p className='text-sm'>Web-Developer</p>
                </h1>
            </div>
            <div>
                <ul className='hidden md:flex space-x-6 text-lg'>
                    <li className='cursor-pointer hover:scale-105 duration-200'>Home</li>
                    <li className='cursor-pointer hover:scale-105 duration-200'>About</li>
                    <li className='cursor-pointer hover:scale-105 duration-200'>Portfolio</li>
                    <li className='cursor-pointer hover:scale-105 duration-200'>Experiances</li>
                    <li className='cursor-pointer hover:scale-105 duration-200'>Contacts </li>
                </ul>
            </div>
            <div onClick={()=>setmanu(!manu)} className='md:hidden'>
                    {manu ? <IoIosClose className='w-7 h-7 bg-gray-300 rounded-full cursor-pointer'/> : <FiMenu  className='w-7 h-7 cursor-pointer '/> }
                </div>
        </div>
        {manu &&(
 <div className='h-30'>
               <ul className='md:hidden'>
                    <li className='cursor-pointer font-bold hover: scale-105 duration-200'>Home</li>
                    <li className='cursor-pointer font-bold hover: scale-105 duration-200'>About</li>
                    <li className='cursor-pointer font-bold hover: scale-105 duration-200'>Portfolio</li>
                    <li className='cursor-pointer font-bold hover: scale-105 duration-200'>Experiances</li>
                    <li className='cursor-pointer font-bold hover: scale-105 duration-200'>Contacts </li>
                </ul>
        </div>
        )    
        }
       
    </div>
    </>
  )
}

export default Navbar
