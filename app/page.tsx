import React from 'react'
import Header from '@/Components/Header';
import { AppProps } from 'next/app';
import Hero from '@/Components/Hero';
import ServiceCard from '@/Components/ServiceCards';
import Footer from '@/Components/Footer';


const Home = ({} :AppProps) => {
  return (

   <><Header /><div className="pt-24">
    <Hero/>
    <Footer/>
    </div></>
      
  )
  
}

export default Home;