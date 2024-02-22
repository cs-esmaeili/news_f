import Image from 'next/image';
import { MdOutlineDateRange } from "react-icons/md";


const Card = () => {
    return (
        <div className='relative flex flex-col w-full h-full gap-2'>
            <div className='relative w-full h-full  rounded-2xl overflow-hidden'>
                <Image
                    src="/cardh.png"
                    alt="Picture of the author"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div>
                <div className='flex justify-between'>
                    <div className='bg-gray-700 rounded-xl px-2 py-1 bg-opacity-50'>
                        Sport
                    </div>
                    <div className='flex items-center opacity-75'>
                        <div>8/12/2023 12:30AM</div>
                        <MdOutlineDateRange className='text-2xl' />
                    </div>
                </div>
                <div className='text-pretty'>
                    Former NFL wide receiver Henry Ruggs III sentenced to 3-10 years in fatal DUI case
                </div>
                <div className='opacity-50'>
                    Lorem ipsum dolor sit amet consectetur.
                </div>
            </div>
        </div>
    );
};

export default Card;