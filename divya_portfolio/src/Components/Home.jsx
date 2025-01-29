import React from 'react'
import HomeImg from "../../src/assets/1.png"
import TextChange from '../TextChange'



const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-[2rem] md:text:6xl font-bold flex leadind-normal tracking-tighter'>
          <TextChange/>
        </h1>
        <p className='text-[1rem] md:text-2xl tracking-tight'> A Full Stack Developer with a passion for building modern, efficient,
             and user-friendly web applications. 
            I have experience working with technologies like HTML, CSS, JavaScript, Node.js, Express, React.js, and MongoDB.</p>
            <button className='mt-10 md:md-10 text-white   px-3  text:sm md:text-lg md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Contact Me</button>
 </div>
 <div>
    <img className='' src={HomeImg} alt="" />
 </div>
    </div>
  )
}

export default Home