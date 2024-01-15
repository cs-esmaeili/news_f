import React from 'react';
import Image from "next/image";
import ImageCard from '@/components/site/ImageCard';
import PostCard from '@/components/site/PostCard';

const page = () => {
    return (
        <div className='flex flex-col max-w-full  lg:max-w-[1140px] gap-2'>
            <div className='top news flex gap-2 h-[450px] flex-wrap md:flex-nowrap'>
                <div className='flex  basis-full md:basis-1/2 bg-teal-300'>
                    <ImageCard />
                </div>
                <div className='flex flex-col gap-2 basis-full md:basis-1/2'>
                    <div className='row flex basis-1/2 gap-2'>
                        <div className='flex  basis-1/2'>
                            <ImageCard />
                        </div>
                        <div className='flex  basis-1/2'>
                            <ImageCard />
                        </div>
                    </div>
                    <div className='row flex basis-1/2 gap-2'>
                        <div className='flex  basis-1/2 '>
                            <ImageCard />
                        </div>
                        <div className='flex  basis-1/2 '>
                            <ImageCard />
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative flex flex-row-reverse md:flex-row h-[270px] md:h-[350px] bg-secondary gap-2 p-2'>
                <div className='flex  md:basis-1/2 z-0 md:relative'>
                    <Image
                        src="/test.jpg"
                        alt="Picture of the author"
                        fill
                        objectFit="cover"
                    />
                </div>
                <div className='flex z-10 md:z-0 flex-col basis-full w md:basis-1/2 justify-around'>
                    <span className='text-2xl'>Mission to the Moon: Who will win Russian and India's race to the lunar South Pole?</span>
                    <span>Two spacecraft – one built by India and the other by Russia – are hurtling on missions towards our Moon by very different routes. But does it matter which touches down first?</span>
                    <div className='flex justify-center'>
                        <button className='bg-accent w-1/4 rounded-sm h-9'>Read</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap gap-3 md:grid md:grid-cols-2 lg:grid-cols-4'>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
            <div className='flex flex-wrap gap-3 md:grid md:grid-cols-2 lg:grid-cols-4'>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
            <div className='flex flex-wrap gap-3 md:grid md:grid-cols-2 lg:grid-cols-3'>
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
            {/* <div className='flex flex-wrap h-[180px]'>
                <div className='w-full hidden lg:block lg:w-1/4'>
                    <PostCard />
                </div>
                <div className='flex w-full bg-red-400 lg:w-1/2'>
                    <ImageCard />
                </div>
                <div className='w-full hidden lg:block lg:w-1/4'>
                    <PostCard />
                </div>
            </div> */}
            <div className='flex flex-col gap-3'>

                <div className='flex row h-fit min-h-[150px] md:h-[230px]  bg-secondary'>
                    <div className='flex relative basis-[40%] h-full'>
                        <Image
                            src="/test.jpg"
                            alt="Picture of the author"
                            fill
                            objectFit="cover"
                        />
                    </div>
                    <div className='flex flex-col basis-[60%] justify-around md:justify-between ml-2 pb-2 overflow-hidden'>
                        <span className='text-lg md:text-2xl'>Mission to the Moon: Who will win Russian and India's race to the lunar South Pole?</span>
                        <span className='hidden md:block text-pretty'>Two spacecraft – one built by India and the other by Russia – are hurtling on missions towards our Moon by very different routes. But does it matter which touches down first?</span>
                        <div className='flex'>
                            <div className='w-1 mr-1 bg-accent'></div>
                            <span>Sport</span>
                        </div>
                    </div>
                </div>
                <div className='flex row h-fit min-h-[150px] md:h-[230px]  bg-secondary'>
                    <div className='flex relative basis-[40%] h-full'>
                        <Image
                            src="/test.jpg"
                            alt="Picture of the author"
                            fill
                            objectFit="cover"
                        />
                    </div>
                    <div className='flex flex-col basis-[60%] justify-around md:justify-between ml-2 pb-2 overflow-hidden'>
                        <span className='text-lg md:text-2xl'>Mission to the Moon: Who will win Russian and India's race to the lunar South Pole?</span>
                        <span className='hidden md:block text-pretty'>Two spacecraft – one built by India and the other by Russia – are hurtling on missions towards our Moon by very different routes. But does it matter which touches down first?</span>
                        <div className='flex'>
                            <div className='w-1 mr-1 bg-accent'></div>
                            <span>Sport</span>
                        </div>
                    </div>
                </div>
                <div className='flex row h-fit min-h-[150px] md:h-[230px]  bg-secondary'>
                    <div className='flex relative basis-[40%] h-full'>
                        <Image
                            src="/test.jpg"
                            alt="Picture of the author"
                            fill
                            objectFit="cover"
                        />
                    </div>
                    <div className='flex flex-col basis-[60%] justify-around md:justify-between ml-2 pb-2 overflow-hidden'>
                        <span className='text-lg md:text-2xl'>Mission to the Moon: Who will win Russian and India's race to the lunar South Pole?</span>
                        <span className='hidden md:block text-pretty'>Two spacecraft – one built by India and the other by Russia – are hurtling on missions towards our Moon by very different routes. But does it matter which touches down first?</span>
                        <div className='flex'>
                            <div className='w-1 mr-1 bg-accent'></div>
                            <span>Sport</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default page;