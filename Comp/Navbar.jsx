import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
function Navbar() {
    const [manu,setmanu]=useState(false);
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md'>
        <div className='flex justify-between h-16 items-center '>
            <div className='flex space-x-2'>
                <img src="" alt="Loading" className='w-12 h-12 rounded-full' />
                <h1 className='font-semibold text-xl cursor-pointer'><span className='text-green-500'>N</span>ajmul Akash
                <p className='text-sm'>Web-Developer</p>
                </h1>
            </div>
            <div>
                <ul className='hidden md:flex space-x-6 text-lg'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Portfolio</li>
                    <li className='cursor-pointer'>Experiances</li>
                    <li className='cursor-pointer'>Contacts </li>
                </ul>
                <div onClick={()=>setmanu(!manu)}>
                    {manu ? <FiMenu /> : <IoIosClose />}
                </div>
            </div>
        </div>
        <div className=''>
               <ul className='md:hidden'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Portfolio</li>
                    <li className='cursor-pointer'>Experiances</li>
                    <li className='cursor-pointer'>Contacts </li>
                </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar
