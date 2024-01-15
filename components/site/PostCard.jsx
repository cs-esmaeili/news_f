import React from 'react';
import Image from "next/image";

const PostCard = () => {
    return (
        <div className='flex flex-col gap-2 bg-secondary grow'>
            <div className='flex flex-col relative h-[180px]'>
                <Image
                    src="/test.jpg"
                    alt="Picture of the author"
                    fill
                    objectFit="cover"
                />
            </div>
            <div className='flex  pl-2 pr-2 pb-2'>
                Moisés Caicedo could be on the brink of record-breaking $141 million dssssssss transfer – but to which club?
            </div>
            <div className='flex justify-between  pl-2 pr-2 pb-2'>
                <div className='flex'>
                    <div className='w-1 mr-1 bg-accent'></div>
                    <span>Sport</span>
                </div>
                <div>1379/11/01 11:03</div>
            </div>
        </div>
    );
};

export default PostCard;