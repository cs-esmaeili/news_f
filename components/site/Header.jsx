import Image from 'next/image';
import React from 'react';
import { SlMenu } from "react-icons/sl";
import Input from '@/components/site/Input';
import { LuSearch } from "react-icons/lu";

const Header = () => {
    return (
        <div className='flex bg-secondary min-h-[80px] h-fit p-2 w-screen items-center overflow-hidden'>
            <div className='relative min-w-12 min-h-12'>
                <Image
                    src="/logo.jpg"
                    alt="Picture of the author"
                    fill
                    objectFit="cover"
                />
            </div>
            <div className='flex grow  flex-wrap gap-2 items-center'>
                <div className='flex grow justify-around'>
                    <div>
                        Sport
                    </div>
                    <div>
                        Sport
                    </div>
                    <div>
                        Sport
                    </div>
                    <div>
                        Sport
                    </div>
                    <div>
                        Sport
                    </div>
                </div>
                <div className='bg-primary '>
                    <Input icon={<LuSearch />} color={"bg-primary"} placeholder={"search something..."} />
                </div>
            </div>
        </div>
    );
};

export default Header;