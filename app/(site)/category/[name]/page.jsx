import ImageCard from '@/components/site/ImageCard';
import BigImageCard from '@/components/site/BigImageCard';
import Card from '@/components/site/Card';
import Image from 'next/image';

const Category = ({ params }) => {

    const categoryName = params.name;

    return (
        <div className='flex flex-col w-full max-w-full items-center gap-3'>
            <div className='relative w-full h-max  rounded-md overflow-hidden'>
                <div className='absolute top-0 -z-10 w-full h-full'>
                    <Image
                        src="/big.png"
                        alt="Picture of the author"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className='mt-[80px] mb-[80px] flex  justify-center mx-2'>
                    <div className='flex flex-wrap gap-2 justify-center grow lg:max-w-[1140px]'>
                        <div className='flex  items-center'>
                            <div className='flex flex-col bg-secondary bg-opacity-50 rounded-md p-5 gap-3'>
                                <span className='text-4xl'>{categoryName}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-primary_s to-transparent' />
            </div>
            <div className='flex flex-col lg:max-w-[1140px] max-w-full gap-3 px-2'>
                <div className='flex my-3'>
                    <div className='border-l-4 border-accent_s pr-1'></div>
                    <span className='text-xl'>Lastest News</span>
                </div>

                <div className='flex flex-wrap justify-between gap-3'>
                    <div className='grow  w-full sm:w-1/3  md:w-1/5 relative  h-[320px]'>
                        <Card roundMode />
                    </div>
                    <div className='grow  w-full sm:w-1/3  md:w-1/5 relative  h-[320px]'>
                        <Card roundMode />
                    </div>
                    <div className='grow  w-full sm:w-1/3 md:w-1/5 relative  h-[320px]'>
                        <Card roundMode />
                    </div>
                    <div className='grow  w-full sm:w-1/3 md:w-1/5 relative  h-[320px]'>
                        <Card roundMode />
                    </div>
                </div>

                <div className='flex my-3'>
                    <div className='border-l-4 border-accent_s pr-1'></div>
                    <span className='text-xl'>Lastest News</span>
                </div>

                <div className='flex flex-wrap justify-between gap-3'>
                    <div className='grow  w-full sm:w-1/3  md:w-1/5 relative  h-[320px]'>
                        <Card roundMode />
                    </div>
                    <div className='grow  w-full sm:w-1/3  md:w-1/5 relative  h-[320px]'>
                        <Card roundMode />
                    </div>
                    <div className='grow  w-full sm:w-1/3 md:w-1/5 relative  h-[320px]'>
                        <Card roundMode />
                    </div>
                    <div className='grow  w-full sm:w-1/3 md:w-1/5 relative  h-[320px]'>
                        <Card roundMode />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Category;