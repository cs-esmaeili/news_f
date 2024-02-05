import Footer from '@/components/site/Footer';
import Header from '@/components/site/Header';
import '@/styles/globals.css';


export default function Layout({ children }) {

  return (
    <html lang="en">
      <body className='bg-primary_s'>
        <div className='relative flex flex-col grow w-full  min-w-0 max-w-full items-center'>
          <Header />
          <div className='absolute top-0 w-full h-1/4 bg-gradient-to-b from-primary_s to-transparent z-10'></div>
          {children}
        </div>
      </body>
    </html>
  )
}
