import Image from 'next/image';
import { IoMenu } from "react-icons/io5";

const Header = ({ open, setOpen }) => {

    return (
        <div className="flex fixed top-0  z-30  min-h-[80px] lg:max-w-[1140px] h-fit p-2 w-screen items-center overflow-hidden px-5 gap-3">
            <div className='relative w-[50px] h-[50px] rounded-md overflow-hidden'>
                <Image
                    src="/logo.jpg"
                    alt="Picture of the author"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className='hidden md:flex grow gap-4 '>
                <div>
                    Videos
                </div>
                <div>
                    HotNews
                </div>
                <div>
                    Broken
                </div>
            </div>
            <div className=' md:hidden'>
                Won News
            </div>
            <div className='hidden md:flex'>
                search
            </div>
            <div className='flex md:hidden ml-auto' onClick={() => setOpen(true)}>
                <IoMenu className='text-3xl' />
            </div>
        </div>
    );
};

export default Header;