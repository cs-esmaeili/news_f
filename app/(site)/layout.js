'use client'

import Header from '@/components/site/Header';
import Sidebar from '@/components/site/Sidebar';
import { useState } from 'react';
import '@/styles/globals.css';


export default function Layout({ children }) {

  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body className='bg-primary_s overflow-x-hidden'>
        <div className='relative flex flex-col grow w-full h-screen min-w-0 max-w-full items-center  overflow-x-hidden'>
          <Header open={open} setOpen={setOpen} />
          <Sidebar open={open} setOpen={setOpen} />
          <div className='absolute top-0 w-full h-[100px] bg-gradient-to-b from-primary_s to-transparent z-10'></div>
          {children}
        </div>
      </body>
    </html>
  )
}
