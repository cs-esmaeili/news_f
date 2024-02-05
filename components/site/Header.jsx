import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <div className='flex absolute  z-20  min-h-[80px] lg:max-w-[1140px] h-fit p-2 w-screen items-center overflow-hidden px-5 gap-3'>
            <div className='relative w-[50px] h-[50px] rounded-md overflow-hidden'>
                <Image
                    src="/logo.jpg"
                    alt="Picture of the author"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className='flex grow gap-4'>
                <div>
                    Sport
                </div>
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
            <div className='flex '>
                search
            </div>
        </div>
    );
};

export default Header;