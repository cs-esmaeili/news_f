import Image from 'next/image';

const ImageCard = ({ image = "/card.png", roundMode = false }) => {
    return (
        <div className='relative flex flex-col w-full h-full'>
            <div className={`relative w-full h-full ${(roundMode) && "rounded-2xl overflow-hidden"}`}>
                <Image
                    src={image}
                    alt="Picture of the author"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className='flex z-10 flex-col absolute bottom-0 m-5 text-center'>
                <span>
                    LifeStraws New
                    Go Series Water
                    Filter Botteles
                </span>
            </div>
            <div className='absolute  bottom-0 h-2/4 w-full bg-gradient-to-t from-black to-transparent' />
        </div>
    );
};

export default ImageCard;