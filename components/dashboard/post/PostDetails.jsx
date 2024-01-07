import React from 'react';
import Input from '@/components/dashboard/Input';

const PostDetails = () => {
    return (
        <div className='sticky z-10 top-0 flex flex-col bg-secondary  p-2 mb-2 rounded-md' >
            <div className='flex  gap-2 mb-2  justify-between flex-wrap  max-w-full'>
                <div className='grow'>
                    <Input placeholder={"Title"} color={"bg-primary"} />
                </div>
                <div className='grow'>
                    <Input placeholder={"Discription"} color={"bg-primary "} />
                </div>
                <div className='grow min-w-40'>
                    <button className='w-full h-full bg-green-400 rounded-md '>test</button>
                </div>
            </div>
            <Input placeholder={"Meta Tags"} color={"bg-primary"} />
        </div>
    );
};

export default PostDetails;