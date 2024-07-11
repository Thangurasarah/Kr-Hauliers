import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className=" bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="flex flex-col items-center md:items-start">
        <span>
            <Image src="/logo.png"
            alt="logo"
            width={80}
            height={80}
            />
        </span>
        <h1 className="text-2xl font-extrabold ">KR Hauliers</h1>  
        </div>
        <div className="flex flex-col items-center md:items-start">   
          <h4 className="text-2xl font-bold mb-4">Quick Links</h4>
          <a href="#" className="mb-2 text-xl hover:underline">Home</a>
          <a href="#" className="mb-2 text-xl hover:underline">About Us</a>
          <a href="#" className="mb-2 text-xl hover:underline">Services</a>
          <a href="#" className="mb-2 text-xl hover:underline">Contact</a>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-2xl font-bold mb-4">Contact Us</h4>
          <p className="mb-2 text-xl">KR Hauliers Limited</p>
          <p className="mb-2 text-xl">1234 Main Street</p>
          <p className="mb-2 text-xl">City, State, 12345</p>
          <p className="mb-2 text-xl">Phone: (123) 456-7890</p>
          <p className="mb-2 text-xl">Email: info@krhauliers.com</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-2xl font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
           
            <a href="#" className="hover:underline">
              <Image src="/twitter.png" alt="Twitter" width={35} height={35} />
            </a>
            <a href="#" className="hover:underline">
              <Image src="/linkedin.png" alt="LinkedIn" width={35} height={35} />
            </a>
            <a href="#" className="hover:underline">
              <Image src="/instagram.png" alt="Instagram" width={35} height={35} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xl mt-8">
        <p>&copy; 2024 KR Hauliers Limited. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
