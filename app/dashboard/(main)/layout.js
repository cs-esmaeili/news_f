'use client'

import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
import '@/styles/globals.css';


export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='bg-primary flex h-screen'>

          <Sidebar />
          <div className='flex grow flex-col h-screen'>
            <Header />
            <div>
              {children}
            </div>
          </div>

        </div>
      </body>
    </html>
  )
}
