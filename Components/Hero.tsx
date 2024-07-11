"use client";


import { NextPage } from 'next';
import React, { useState } from 'react';
import Image from 'next/image';
import ServiceCard from './ServiceCards';

const Hero: NextPage = () => {
  const [showExperience, setShowExperience] = useState(false);
  const [showRealibilityAndEfficiency, setShowReliabilityAndEfficiency] = useState(false);
  const [showCustomerService, setShowCustomerService] = useState(false);


  const toggleExperience = () => {
    setShowExperience(!showExperience);
  }
    const toggleReliabilityAndEfficiency = () =>{
    setShowReliabilityAndEfficiency(!showRealibilityAndEfficiency);

  }
  const toggleCustomerService = () =>{
    setShowCustomerService(!showCustomerService)
  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x ml-auto">
        <h1 className="font-extrabold text-8xl">
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
      <div className="pl-3 mt-[-600px]">
        <Image
          src="/home 2.jpg"
          alt="home 2"
          width={800}
          height={1000} />
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
            description="Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Phasellus nec iaculis mauris."
            imageUrl="/trucking fleet.jpg"
          />
          <ServiceCard
            title="Consultation Meeting"
            description="Sed do eiusmod tempor incididunt ut
           labore et dolore magna aliqua. Ut enim ad minim veniam."
            imageUrl="/consultation.jpg"
          />
          <ServiceCard
            title="Quote Request Form"
            description="Duis aute irure dolor in reprehenderit 
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            imageUrl="/quote.jpg"
          />
        </div>
      </div>
      <div className="bg-blue-100 py-24 sm:py-32 mt-12">
        <div className="mx-auto grid max-w-7xl gap-y-32 gap-x-32 px-6
    lg:px-8 grid-cols-1 md:grid-cols-2">
          <div className="max-w-8xl mx-auto ">
            <h2 className="text-red-600 text-4xl font-extrabold
            flex justify-center ">
              Why choose KR Hauliers Limited?</h2>

            <p className='text-xl flex justify-center pt-8'>
              At KR Hauliers, we are dedicated to providing
              top-notch hauling services tailored to meet your
              needs. With a strong commitment to quality and customer satisfaction,
              we stand out as a reliable partner in the hauling industry.
            </p>

            <h3 className="pt-6 text-red-600 text-2xl text-underline
             font-semibold flex justify-center cursor-pointer underline">
              Experience and Expertise
            </h3>

        
              <p className="pt-6 flex justify-center text-xl">
                With over 20 years in the industry, our team of seasoned
                professionals brings a wealth of knowledge and expertise to every <br />
                project. Our drivers and operators are highly trained
                and certified, ensuring that your goods are in safe
                hands from start to finish.
              </p>
          

            <h3 className="pt-6 text-red-600 text-2xl font-semibold flex 
            justify-center cursor-pointer underline" 
            onClick={toggleReliabilityAndEfficiency}>
              Reliability and Efficiency</h3>

              {showRealibilityAndEfficiency &&(
                <p className="pt-6 flex justify-center text-xl">
              We understand the importance of timely
              deliveries and efficient service. Our state-of-the-art fleet
              and advanced tracking
              technologies allow us to manage logistics seamlessly
              , ensuring that your cargo arrives on time, every time.
            </p>
              )}
            <h3 className="pt-6 text-red-600 text-2xl font-semibold
            flex justify-center cursor-pointer underline" onClick={toggleCustomerService}>
              Customer Service</h3>

              {showCustomerService && ( 
            <p className="pt-6 flex justify-center text-xl " >
              Our dedicated customer service team is here to
              support you every step of the way. We believe in
              open communication and transparency, providing you
              with real-time updates and personalized support to ensure
              a smooth experience.
            </p>
              )}
          </div>
          <div className="border-l-2 pl-24 border-gray-400">
          <div className="max-w-8xl mx-auto">
          
            <h2 className="text-red-600 mt-2 text-4xl font-extrabold
            flex justify-center">Testimonials</h2>

            <p className='flex justify-items-center text-xl mt-8'>
              "Working with KR Hauliers has been a
               game-changer for our business.
               Their reliability and efficiency 
               are unmatched." - [Maisha Mabati]</p>

            <p className="mt-12 flex justify-items-center text-xl">
              "I was impressed with the professionalism 
              and efficiency of KR Hauliers.
               They exceeded my expectations
                and I highly recommend their services." - [Devki Steel]
            </p>

            <p className="mt-12 flex justify-items-center text-xl">
              "The team at KR Hauliers went above and beyond
               to ensure my cargo was
                delivered on time and in perfect condition.
                I will definitely be using their services again." - [Tononoka Rolling Mills]
            </p>

            <p className="mt-12 flex justify-items-center text-xl">
              "KR Hauliers provided me with top-notch service
                that was both reliable and cost-effective.
                 I am extremely satisfied with the results." - [Nucleus Cloud]
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
