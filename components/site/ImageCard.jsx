import Image from "next/image";
import React from 'react';

const ImageCard = () => {
    return (
        <div className="flex flex-col grow relative bg-teal-300">
            <Image
                src="/test.jpg"
                alt="Picture of the author"
                fill
                objectFit="cover"
            />
            <div className="flex absolute bottom-0 left-0 right-0 p-2">
               this is test for some thing new
            </div>
        </div>
    );
};

export default ImageCard;