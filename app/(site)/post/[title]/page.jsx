import ImageCard from '@/components/site/ImageCard';
import BigImageCard from '@/components/site/BigImageCard';
import Card from '@/components/site/Card';
import Image from 'next/image';
import { MdOutlineDateRange } from "react-icons/md";

const Post = ({ params }) => {

    const postTitle = params.title;

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
                <div className='mt-[80px] mb-[80px] flex flex-col   justify-center items-center mx-2'>
                    <div className='flex flex-wrap gap-2 justify-center grow lg:max-w-[1140px]'>
                        <div className='flex  items-center'>
                            <div className='flex flex-col bg-secondary bg-opacity-50 rounded-md p-5 gap-3'>
                                <span className='text-4xl'>{postTitle}</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:max-w-[1140px] max-w-full gap-3 px-2 w-full justify-between mt-[30px] items-center'>
                        <div className='bg-gray-700 rounded-xl px-2 py-1 bg-opacity-50'>
                            Sport
                        </div>
                        <div className='flex bg-gray-700 rounded-xl px-2 py-1 bg-opacity-50'>
                            <div>8/12/2023</div>
                            <MdOutlineDateRange className='text-2xl' />
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-primary_s to-transparent' />
            </div>
            <div className='flex flex-col lg:max-w-[1140px] max-w-full gap-3 px-2'>
                salam
            </div>

        </div>
    );
};

export default Post;