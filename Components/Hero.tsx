import { NextPage } from 'next';
import React from 'react'

import Image from 'next/image';

const Hero:NextPage = () =>{
  return (
    <div className="hero">
    <div className="flex-1 pt-36 padding-x ml-auto" >
        <h1 className=" font-extrabold text-8xl ">
       Reliable 
       Haulage
        </h1>
        <p className="padding-x pt-12 ml-4 font-bold text-2xl">Delivering Excellence</p>
        </div>
        <div className="flex-1 flex justify-end mt-[-250px]">
        <div className="pr-8">
          <Image
            src="/home.jpg"
            alt="home"
            width={1500} 
            height={2000}
          />
        </div>
        </div>
        <div className=" pl-3 mt-[-600px] "> 
          <Image 
          src="/home 2.jpg"
          alt="home 2"
          width={800}
          height={1000}/>
        
      </div>
      <div>
        <h2 className="font-extrabold text-6xl flex justify-center pt-36">
        Service Options
        </h2>
      </div>
        </div>
  )
}

export default Hero;