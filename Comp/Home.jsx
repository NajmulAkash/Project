import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { BsEmojiExpressionlessFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
function Home() {
  return (
    <>
  <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
    <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-20 space-y-2'>
        <span className='text-xl'>Welcome To My Feed</span>
       <div className='flex space-x-1 md:text-'>
        <div className='flex space-x-1 text-2xl md:text-4xl'>
        <h1>Hello, I'm a</h1>
        <span className='text-red-700 font-bold'>Developer</span>
        </div>
       </div>
       <br />
        <p className="text-sm md:text-md text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, culpa quam. Itaque, quaerat quas commodi perferendis a dolores quis debitis eveniet esse maxime accusantium, necessitatibus facilis impedit placeat, excepturi omnis.</p>
        <br />
        {/*social media icon*/}
        <div className='space-y-2'>
          <h1 className='font-bold'>Available on</h1>
         <ul className='flex space-x-5'>
          <li> <FaFacebookF  className='text-2xl cursor-pointer'/></li>
         <li> <FaYoutube className='text-2xl cursor-pointer' /></li>
         <li> <FaTelegram className='text-2xl cursor-pointer' /></li>
         <li><FaLinkedin  className='text-2xl cursor-pointer'/></li>
         </ul>
        </div>
        <div>
          <h1 className='font-bold'>Currently working on</h1>
         <div className='flex space-x-5'>
         <DiMongodb />
         <BsEmojiExpressionlessFill />
         <FaReact />
         <FaNodeJs />
         </div>
        </div>
        </div>
        <div className='md:w-1/2'>Right</div>
    </div>
  </div>
    </>
  )
}

export default Home
