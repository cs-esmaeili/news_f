"use client";
import { useState, useEffect } from 'react';
import PostList from "@/components/dashboard/post/PostList";
import AddPanel from '@/components/dashboard/post/AddPanel';
import PostDetails from '@/components/dashboard/post/PostDetails';

const createPost = () => {



    const [content, setContent] = useState(
        [
            // [{ type: "Text", content: "this is text 1" }, { type: "Image", content: "" }],
            // [{ type: "Video", content: "" }, { type: "Text", content: "this is text 4" }],
            // [{ type: "Text", content: "this is text 5" }]
        ]
    );

    return (
        <div className='relative flex flex-col grow max-w-full p-2 overflow-y-auto overflow-x-hidden'>
            <PostDetails content={content} setContent={setContent} />
            <PostList content={content} setContent={setContent} />
            <AddPanel content={content} setContent={setContent} />
        </div>
    );
};

export default createPost;