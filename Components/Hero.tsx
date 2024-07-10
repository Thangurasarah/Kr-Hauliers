import { NextPage } from 'next';
import React from 'react'

import Image from 'next/image';
import ServiceCard from './ServiceCards';

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
      <div className="container mx-auto pt-12 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <ServiceCard
          title="Trucking Fleet Showcase"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
          imageUrl="/trucking fleet.jpg"
        />
        <ServiceCard
          title="Consultation Meeting"
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          imageUrl="/consultation.jpg"
        />
        <ServiceCard
          title="Quote Request Form"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          imageUrl="/quote.jpg"
        />
      </div>
    </div>
      <div>
        <h2 className="text-blue text-4xl font-extrabold flex justify-center">Why choose KR Hauliers Limited?</h2>
      </div>
        </div>
  )
}

export default Hero;