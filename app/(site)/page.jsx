import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className='w-full bg-red-200'>
            <div className='relative w-full h-[339px] lg:h-[677px] rounded-md overflow-hidden'>
                <Image
                    src="/big.png"
                    alt="Picture of the author"
                    fill
                    style={{ objectFit: "cover" }}
                />
                <div className='absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-primary_s to-transparent' />

                <div className='absolute inset-0 top-[80px] flex justify-center'>
                    <div className='flex grow lg:max-w-[1140px]'>
                        <div className='flex grow items-center'>
                            <div className='flex flex-col bg-secondary bg-opacity-50 rounded-md p-5 gap-3'>
                                <span className='text-4xl'>All Sport News</span>
                                <span>Lorem ipsum dolor sit amet consectetur. Lorem vel feugiat dolor nunc.</span>
                            </div>
                        </div>
                        <div className='flex grow'>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default page;