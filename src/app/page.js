"use client";
import { useEffect, useState } from 'react';
import '@lottiefiles/lottie-player';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[url('/vistabg.png')] bg-cover bg-center text-center justify-between">
     
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className='flex flex-row text-white items-center'>
          <Image
            src="/vistalogo.png"
            width={100}
            height={100}
            alt="Vista Logo"
          />
          <h1 className='text-6xl px-4'>VISTA</h1>
        </div>
      
        {isClient && (
          <lottie-player
            src="https://lottie.host/421207fa-2501-40ff-9638-c1442baddfed/8oztSEOJZW.json"
            background="#FFFFFF" 
            speed="1"
            style={{ width: '400px', height: '400px' }}
            loop
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        )}
        
        <h1 className="text-white text-4xl font-bold mt-4">
          Under Construction
        </h1>
        <p className="text-white text-lg mt-2 max-w-lg">
          We are working hard to provide you with the best service.
        </p>
      </div>


      <footer className="bg-navy text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center items-center md:text-left">
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-teal-400 mt-1" />
              <p className="text-sm">
                Kemalpaşa Mah. Mahmut Esat Bey Cad. Batuhan Sok. No:1A <br />
                İnegöl - Bursa
              </p>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <FaPhoneAlt className="text-teal-400" />
              <a href="tel:+905060561626" className="text-sm hover:text-teal-400">
                +90 506 056 16 26
              </a>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <FaEnvelope className="text-teal-400" />
              <a href="mailto:export@vistaturk.com" className="text-sm hover:text-teal-400">
                export@vistaturk.com
              </a>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Vista. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
