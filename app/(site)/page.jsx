import ImageCard from '@/components/site/ImageCard';
import BigImageCard from '@/components/site/BigImageCard';
import Image from 'next/image';
import React from 'react';
import Card from '@/components/site/Card';

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
            <div className='flex flex-col lg:max-w-[1140px] max-w-full gap-3'>

                <div className='flex gap-4  w-full min-w-full overflow-auto justify-between'>

                    <div className='relative min-w-[170px]  w-[170px] h-[290px] pl-0'>
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

                    <div className='relative min-w-[170px]  w-[170px] h-[290px]'>
                        <ImageCard />
                    </div>
                </div>
                <div className='flex my-3'>
                    <div className='border-l-4 border-accent_s pr-1'></div>
                    <span className='text-xl'>Lastest News</span>
                </div>
                <div className='flex gap-3 justify-between'>
                    <div className='relative min-w-[170px]  w-[350px] h-[320px]'>
                        <Card />
                    </div>
                    <div className='relative min-w-[170px]  w-[350px] h-[320px]'>
                        <Card />
                    </div>
                    <div className='relative min-w-[170px]  w-[350px] h-[320px]'>
                        <Card />
                    </div>
                </div>
                <div className='flex my-3'>
                    <div className='border-l-4 border-accent_s pr-1'></div>
                    <span className='text-xl'>Lastest News</span>
                </div>
                <div className='flex gap-3 justify-between'>
                    <div className='relative min-w-[170px]  w-[350px] h-[320px]'>
                        <Card />
                    </div>
                    <div className='relative min-w-[170px]  w-[350px] h-[320px]'>
                        <Card />
                    </div>
                    <div className='relative min-w-[170px]  w-[350px] h-[320px]'>
                        <Card />
                    </div>
                </div>

                <div className='flex border border-accent_s p-3 gap-3'>
                    <div className='relative w-2/4 h-full  rounded-2xl overflow-hidden'>
                        <Image
                            src="/cardh.png"
                            alt="Picture of the author"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className='grow w-3/4'>
                        <div className=''>
                            Former NFL wide receiver Henry Ruggs III sentenced to 3-10 years in fatal DUI caseFormer NFL wide receiver Henry Ruggs III sentenced to 3-10 years in fatal DUI caseFormer NFL wide receiver Henry Ruggs III sentenced to 3-10 years in fatal DUI caseFormer NFL wide receiver Henry Ruggs III sentenced to 3-10 years in fatal DUI case
                        </div>
                        <div className='opacity-50'>
                            Lorem ipsum dolor sit amet consectetur. Est ut vitae senectus eu amet blandit in nunc vel. Sodales venenatis ut quis felis. Sit viverra mi tortor interdum est facilisis dignissim. Semper nulla in elementum elit velit amet in. Blandit dolor facilisis lacus ac tincidunt viverra egestas eu netus. Viverra enim elementum volutpat malesuada egestas.
                            Pulvinar sagittis montes tincidunt nunc id sed. Est eget augue amet in arcu at in ipsum interdum. Nisl venenatis ac sed arcu quis aliquet. Sit nibh feugiat sed consectetur imperdiet dolor tempor tempus ornare. Aliquam volutpat netus viverra enim.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default page;