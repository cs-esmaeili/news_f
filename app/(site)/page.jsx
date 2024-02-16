import ImageCard from '@/components/site/ImageCard';
import BigImageCard from '@/components/site/BigImageCard';
import Image from 'next/image';
import React from 'react';

const page = () => {

    return (
        <div className='flex flex-col w-full max-w-full items-center gap-3'>
            <div className='relative w-full h-max  rounded-md overflow-hidden'>
                <div className='absolute top-0 -z-10 w-full h-full bg-red-400'>
                    <Image
                        src="/big.png"
                        alt="Picture of the author"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className='mt-[80px] mb-5 flex  justify-center'>

                    <div className='flex flex-wrap gap-2 justify-center grow lg:max-w-[1140px]'>
                        <div className='flex  items-center'>
                            <div className='flex flex-col bg-secondary bg-opacity-50 rounded-md p-5 gap-3'>
                                <span className='text-4xl'>All Sport News</span>
                                <span>Lorem ipsum dolor sit amet consectetur. Lorem vel feugiat dolor nunc.</span>
                            </div>
                        </div>
                        <div className='flex '>
                            <BigImageCard />
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-primary_s to-transparent' />
            </div>

            <div className='lg:max-w-[1140px] max-w-full'>

                <div className='flex gap-4 px-2 w-full min-w-full overflow-auto'>

                    <div className='relative min-w-[170px]  w-[170px] h-[290px]'>
                        <ImageCard />
                    </div>

                    <div className='relative min-w-[170px]  w-[170px] h-[290px]'>
                        <ImageCard />
                    </div>

                    <div className='relative min-w-[170px]  w-[170px] h-[290px]'>
                        <ImageCard />
                    </div>

                    <div className='relative min-w-[170px]  w-[170px] h-[290px]'>
                        <ImageCard />
                    </div>

                    <div className='relative min-w-[170px]  w-[170px] h-[290px]'>
                        <ImageCard />
                    </div>
                </div>
            </div>
            <div className='lg:max-w-[1140px] max-w-full'>

                <div className='flex gap-4 px-2 w-full min-w-full overflow-auto'>

                    <div className='relative min-w-[170px]  w-[170px] h-[290px]'>
                        <ImageCard />
                    </div>

                    <div className='relative min-w-[170px]  w-[170px] h-[290px]'>
                        <ImageCard />
                    </div>

                    <div className='relative min-w-[170px]  w-[170px] h-[290px]'>
                        <ImageCard />
                    </div>

                    <div className='relative min-w-[170px]  w-[170px] h-[290px]'>
                        <ImageCard />
                    </div>

                    <div className='relative min-w-[170px]  w-[170px] h-[290px]'>
                        <ImageCard />
                    </div>
                </div>
            </div>
            <div className='lg:max-w-[1140px] max-w-full'>

                <div className='flex gap-4 px-2 w-full min-w-full overflow-auto'>

                    <div className='relative min-w-[170px]  w-[170px] h-[290px]'>
                        <ImageCard />
                    </div>

                    <div className='relative min-w-[170px]  w-[170px] h-[290px]'>
                        <ImageCard />
                    </div>

                    <div className='relative min-w-[170px]  w-[170px] h-[290px]'>
                        <ImageCard />
                    </div>

                    <div className='relative min-w-[170px]  w-[170px] h-[290px]'>
                        <ImageCard />
                    </div>

                    <div className='relative min-w-[170px]  w-[170px] h-[290px]'>
                        <ImageCard />
                    </div>
                </div>
            </div>
            <div className='lg:max-w-[1140px] max-w-full'>

                <div className='flex gap-4 px-2 w-full min-w-full overflow-auto'>

                    <div className='relative min-w-[170px]  w-[170px] h-[290px]'>
                        <ImageCard />
                    </div>

                    <div className='relative min-w-[170px]  w-[170px] h-[290px]'>
                        <ImageCard />
                    </div>

                    <div className='relative min-w-[170px]  w-[170px] h-[290px]'>
                        <ImageCard />
                    </div>

                    <div className='relative min-w-[170px]  w-[170px] h-[290px]'>
                        <ImageCard />
                    </div>

                    <div className='relative min-w-[170px]  w-[170px] h-[290px]'>
                        <ImageCard />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default page;