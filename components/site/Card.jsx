import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineDateRange } from 'react-icons/md';

const Card = ({ image, blurHash, title, disc, category, date, url = '', roundMode = false }) => {
    return (
        <Link href={url}>
            <div className="relative flex flex-col w-full h-full gap-2">
                <div className={`relative w-full h-full ${roundMode ? 'rounded-2xl overflow-hidden' : ''}`}>
                    <Image
                        src={image}
                        alt="Picture of the author"
                        placeholder="blur"
                        fill
                        blurDataURL={blurHash}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="justify-center">
                    <div className="flex flex-wrap-reverse justify-between max-w-full mb-2">
                        <div className="bg-gray-700 rounded-xl px-2 py-1 bg-opacity-50">{category}</div>
                        <div className="flex items-center opacity-75">
                            <div>{date}</div>
                            <MdOutlineDateRange className="text-2xl" />
                        </div>
                    </div>
                    <div className='ml-1'>
                        <div className="text-pretty">{title}</div>
                        <div className="opacity-50">{disc}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
