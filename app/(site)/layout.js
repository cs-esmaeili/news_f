import Footer from '@/components/site/Footer';
import Header from '@/components/site/Header';
import Sidebar from '@/components/site/Sidebar';
import '@/styles/globals.css';


export default function Layout({ children }) {

  return (
    <html lang="en">
      <body className='bg-primary_s overflow-x-hidden'>
        <div className='relative flex flex-col grow w-full h-screen bg-red-500  min-w-0 max-w-full items-center  overflow-x-hidden'>
          <Header />
          <Sidebar />
          <div className='absolute top-0 w-full h-[100px] bg-gradient-to-b from-primary_s to-transparent z-10'></div>
          {children}
        </div>
      </body>
    </html>
  )
}
