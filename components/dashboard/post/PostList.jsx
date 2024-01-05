import React from 'react';
import { BsImageFill } from 'react-icons/bs';
import { PiTextAaFill } from 'react-icons/pi';
import { RiCloseFill } from 'react-icons/ri';
import { AiTwotoneVideoCamera } from 'react-icons/ai';

const PostList = ({ content }) => {
    return (
        <div className='flex flex-col'>

            <div className='flex gap-2 mb-2'>
                <div className='flex flex-col grow bg-secondary rounded-md p-2'>
                    <div className='flex grow justify-between items-center mb-3'>
                        <span>
                            Text Place
                        </span>
                        <div className='flex items-center gap-4'>
                            <PiTextAaFill className='text-yellow-400 text-3xl' />
                            <BsImageFill className='text-green-400 text-2xl opacity-50' />
                            <AiTwotoneVideoCamera className='text-blue-400 text-3xl opacity-50' />
                            <RiCloseFill className='text-red-400 text-3xl opacity-50' />
                        </div>
                    </div>
                    <div className='bg-primary rounded-sm p-1'>
                        haha
                    </div>
                </div>

                <div className='flex flex-col grow bg-secondary rounded-md p-2'>
                    <div className='flex grow justify-between items-center mb-3'>
                        <span>
                            Text Place
                        </span>
                        <div className='flex items-center gap-4'>
                            <PiTextAaFill className='text-yellow-400 text-3xl' />
                            <BsImageFill className='text-green-400 text-2xl' />
                            <AiTwotoneVideoCamera className='text-blue-400 text-3xl' />
                            <RiCloseFill className='text-red-400 text-3xl' />
                        </div>
                    </div>
                    <div className='bg-primary rounded-sm p-1'>
                        haha
                    </div>
                </div>
            </div>

            <div className='flex mb-2'>
                <div className='flex flex-col grow bg-secondary rounded-md p-2'>
                    <div className='flex grow justify-between items-center mb-3'>
                        <span>
                            Text Place
                        </span>
                        <div className='flex items-center gap-4'>
                            <PiTextAaFill className='text-yellow-400 text-3xl' />
                            <BsImageFill className='text-green-400 text-2xl' />
                            <AiTwotoneVideoCamera className='text-blue-400 text-3xl' />
                            <RiCloseFill className='text-red-400 text-3xl' />
                        </div>
                    </div>
                    <div className='bg-primary rounded-sm p-1'>
                        haha
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PostList;