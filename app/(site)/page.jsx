import ImageCard from '@/components/site/ImageCard';
import Image from 'next/image';
import Slider from '@/components/site/Slider';
import { firstPage as RfirstPage } from '@/services/Site';
import Location4 from '@/components/site/sections/Location4';
import Location5 from '@/components/site/sections/Location5';

const getData = async () => {
    try {
        const { data } = await RfirstPage();
        return data;
    } catch (error) {
        if (error?.response?.data?.message) {
            console.log(error.response.data.message);
        } else {
            console.log(error);
        }
    }
}


const page = async () => {

    const data = await getData();
    function getLocationData(locationNumber) {
        return data.find(obj => obj.location === locationNumber).data;
    }

    return (
        <div className='flex flex-col w-full max-w-full items-center gap-3'>
            <div className='relative w-full h-max  rounded-md overflow-hidden'>
                <div className='absolute top-0 -z-10 w-full h-full bg-red-400'>
                    <Image
                        src="/big.png"
                        alt="Picture of the author"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className='mt-[80px] mb-5 flex  justify-center mx-2'>

                    <div className='flex flex-wrap gap-2 justify-center grow lg:max-w-[1140px]'>
                        <div className='flex  items-center'>
                            <div className='flex flex-col bg-secondary bg-opacity-50 rounded-md p-5 gap-3'>
                                <span className='text-4xl'>All Sport News</span>
                                <span>Lorem ipsum dolor sit amet consectetur. Lorem vel feugiat dolor nunc.</span>
                            </div>
                        </div>
                        <div className='flex '>
                            <Slider data={getLocationData(2)} />
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-primary_s to-transparent' />
            </div>
            <div className='flex flex-col lg:max-w-[1140px] max-w-full gap-3 px-2'>

                <div className='flex gap-4  w-full min-w-full overflow-auto justify-between'>
                    {getLocationData(3).map((value, index) => {
                        if (index <= 5) {
                            return (
                                <div className='relative min-w-[170px]  w-[170px] h-[290px] pl-0'>
                                    <ImageCard text={value.title} image={value.imageV.url} blurHash={value.imageV.blurHash} url={`/post/${value.title}`} roundMode />
                                </div>
                            )
                        }
                    })}
                </div>
                <Location4 data={getLocationData(4)} />
                <Location5 data={getLocationData(5)} sectionTitle={"section 5"} />
                <Location5 data={getLocationData(6)} sectionTitle={"section 6"} />

            </div>
        </div>
    );
};


export default page;