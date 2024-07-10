import React from 'react'
import Header from '@/Components/Header';
import { AppProps } from 'next/app';
import Hero from '@/Components/Hero';
import ServiceCard from '@/Components/ServiceCards';


const Home = ({} :AppProps) => {
  return (

   <><Header /><div className="pt-24">
    <Hero/>
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ServiceCard
          title="Service 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
          imageUrl="/service1.jpg"
        />
        <ServiceCard
          title="Service 2"
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          imageUrl="/service2.jpg"
        />
        <ServiceCard
          title="Service 3"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          imageUrl="/service3.jpg"
        />
      </div>
    </div>
    </div></>
      
  )
  
}

export default Home;