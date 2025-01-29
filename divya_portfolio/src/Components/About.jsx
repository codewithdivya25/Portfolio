
import React from 'react'
import AboutImg from "../../src/assets/2-removebg-preview.png"
import { IoMdArrowRoundForward } from "react-icons/io";

const App = () => {
  return (
    <div  id="About" className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div>
            <h2 className='text-[3rem] md:text:4xl font-bold'>About</h2>
            <div className='md:flex flex-wrap flex-col  md:flex-row items-center'>
                <img  className=" bottom-[4px] md:h-80 "src={AboutImg} alt="" />
                <ul className=''>
                <div className='flex gap-3 py-4'> 
                <IoMdArrowRoundForward   size={40} className='mt-1' />
                        
                                    
                    <span className='w-96'>
                        <h1 className='text-2xl md:text-2xl font-semibold leading-normal'>fronted Developer</h1>
                        <p className='text-sm md:text-md leading-tight'>A front-end developer designs user interfaces and interactive features using HTML, CSS, and JavaScript.</p></span> 
                        </div>

                        <div className='flex gap-3 py-4'> 
                <IoMdArrowRoundForward   size={40} className='mt-1' />
                        
                                    
                    <span className='w-96'>
                        <h1 className='text-2xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                        <p className='text-sm md:text-md leading-tight'>A back-end developer manages servers, databases, and APIs to develop the functionality behind a website or app</p></span> 
                        </div>
                </ul>
            </div>
               
        </div>
    </div>
       
  )
}

export default App