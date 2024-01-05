"use client";
import { useState } from 'react';
import { PiRectangleBold, PiTextAaFill } from "react-icons/pi";
import { VscLayoutSidebarLeft } from "react-icons/vsc";
import PostList from "@/components/dashboard/post/PostList";
import Input from '@/components/dashboard/Input';

const createPost = () => {



    const [content, setContent] = useState(
        [
            [{ type: "text", content: "this is text 1" }, { type: "image", content: "this is text 2" }],
            [{ type: "text", content: "this is text 3" }, { type: "text", content: "this is text 4" }],
            [{ type: "text", content: "this is text 5" }]
        ]
    );

    return (
        <div className='flex flex-col grow max-w-full p-2'>
            {/* header */}
            <div className='flex flex-col bg-secondary  p-2 mb-2 rounded-md'>
                <div className='flex flex-row gap-2 mb-2'>
                    <Input placeholder={"Title"} color={"bg-primary"} />
                    <Input placeholder={"Discription"} color={"bg-primary"} />
                    <button className='w-full bg-green-400 rounded-md'>test</button>
                </div>
                <Input placeholder={"Meta Tags"} color={"bg-primary"} />
            </div>

            {/* posts */}
            <PostList content={content} />

            {/* new Container */}
            <div className='border-2 border-dashed border-accent w-full h-fit flex items-center justify-center p-5'>
                <PiRectangleBold className='text-accent text-4xl mr-2' />
                <VscLayoutSidebarLeft className='text-accent text-4xl' />
            </div>
        </div>
    );
};

export default createPost;