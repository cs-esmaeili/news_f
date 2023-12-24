'use client'

import '@/styles/globals.css';
import Image from 'next/image';
import { FaHouseChimney } from "react-icons/fa6";


export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='bg-primary flex h-screen'>

          {/* sidebar */}
          <div className='bg-secondary p-7 h-full '>

            <div className='flex items-center justify-center'>
              <Image className='rounded-md' src="/logo.jpg" alt="Site logo"
                width={60}
                height={60} />
              <span className='ml-3 font-bold'> WEB site Name </span>
            </div>

            <div className='flex items-center p-3 mt-8 mb-5 bg-secondary_dark rounded-md'>
              <Image className='rounded-full' src="/avatar.jpg" alt="Site logo"
                width={45}
                height={45} />
              <span className='ml-3'> Javad Esmaeili </span>
            </div>
            <div>
              <div className='flex items-center mb-5 p-3 text-dactive '>
                <FaHouseChimney className='text-2xl' />
                <span className='ml-3'>Home</span>
              </div>
              <div className='flex items-center mb-5 p-3 text-dactive '>
                <FaHouseChimney className='text-2xl' />
                <span className='ml-3'>Home</span>
              </div>
              <div className='flex items-center text-accent bg-active_background mb-5 bg-siebar_item p-3 rounded-lg'>
                <FaHouseChimney className='text-2xl' />
                <span className='ml-3'>Home</span>
              </div>
              <div className='flex items-center mb-5 p-3 text-dactive '>
                <FaHouseChimney className='text-2xl' />
                <span className='ml-3'>Home</span>
              </div>
            </div>
          </div>


          {/* Main Content */}
          <div className=''>
            <div>
              header
            </div>
            <div>
              {children}
            </div>
          </div>

        </div>
      </body>
    </html>
  )
}
