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
          <div className='bg-secondary p-4 h-full '>
            <div className='flex items-center'>
              <Image className='rounded-full' src="/logo.jpg" alt="Site logo"
                width={50}
                height={50} />
              <span className='ml-3 font-bold'> WEB site Name </span>
            </div>

            <div className='flex items-center p-3 mt-8 mb-5 bg-siebar_item bg-opacity-30 rounded-md'>
              <Image className='rounded-full' src="/avatar.jpg" alt="Site logo"
                width={50}
                height={50} />
              <span className='ml-3'> WEB site Name </span>
            </div>
            <div>
              <div className='flex items-center mb-5 p-3 '>
                <FaHouseChimney className='text-2xl' />
                <span className='ml-3'>Home</span>
              </div>
              <div className='flex items-center mb-5 p-3 '>
                <FaHouseChimney className='text-2xl' />
                <span className='ml-3'>Home</span>
              </div>
              <div className='flex items-center mb-5 bg-siebar_item p-3 rounded-lg'>
                <FaHouseChimney className='text-2xl text-accent' />
                <span className='ml-3 text-accent'>Home</span>
              </div>
              <div className='flex items-center mb-5 p-3 '>
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
