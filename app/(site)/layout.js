import Footer from '@/components/site/Footer';
import Header from '@/components/site/Header';
import '@/styles/globals.css';


export default function Layout({ children }) {

  return (
    <html lang="en">
      <body>
        <div className='flex flex-col grow  bg-primaryflex-col h-screen min-w-0 max-w-full'>
          <Header />
          <div className="flex flex-col relative grow border-solid p-2 overflow-y-auto overflow-x-hidden items-center border-2 border-yellow-300">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
