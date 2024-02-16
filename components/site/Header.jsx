import Image from 'next/image';
import React from 'react';
import SideBarButton from './SideBarButton';

const Header = () => {
    return (
        <div className='flex sticky top-0   z-20  min-h-[80px] lg:max-w-[1140px] h-fit p-2 w-screen items-center overflow-hidden px-5 gap-3'>
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
            <div className='hidden md:flex'>
                search
            </div>
            <div className='flex md:hidden ml-auto'>
                <SideBarButton />
            </div>
        </div>
    );
};

export default Header;