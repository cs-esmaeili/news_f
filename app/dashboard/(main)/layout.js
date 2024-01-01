'use client'

import { useState, useEffect } from "react";
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
import { ModalProvider } from '@/components/dashboard/Modal';
import { Toaster } from 'react-hot-toast';
import '@/styles/globals.css';


export default function Layout({ children }) {

  const [open, setOpen] = useState(false);

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <html lang="en">
      <body>
        <div className='bg-primary flex h-screen w-full max-w-full overflow-hidden'>
          <ModalProvider>
            <Toaster position="top-center" />
            <Sidebar open={open} setOpen={setOpen} />
            {/* <div className={open ? "opacity-50 bg-black w-100% h-screen z-20 top-0 left-0 right-0 bottom-0 fixed cursor-pointer" : "hidden"}
              onClick={() => setOpen(!open)} /> */}
            <div className='flex grow flex-col h-screen min-w-0 max-w-full'>
              <Header open={open} setOpen={setOpen} />
              <div className="flex relative grow border-solid border-yellow-400 border-2  overflow-hidden">
                {children}
              </div>
            </div>
          </ModalProvider>
        </div>
      </body>
    </html>
  )
}
