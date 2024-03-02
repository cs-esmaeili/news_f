import ImageCard from '@/components/site/ImageCard';
import Card from '@/components/site/Card';
import Image from 'next/image';
import Slider from '@/components/site/Slider';
import { firstPage as RfirstPage } from '@/services/Site';

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
                                    <ImageCard text={value.title} image={value.body[0][0].content.url} url={`/post/${value.title}`} roundMode />
                                </div>
                            )
                        }
                    })}
                </div>

                <div className='flex-col'>
                    <div className='flex gap-3 mb-3 flex-wrap md:flex-nowrap'>
                        <div className='relative  w-full md:w-1/2 h-[264px] pl-0'>
                            <ImageCard image={"/img1.png"} />
                        </div>
                        <div className='relative   w-full  md:w-1/2  h-[264px] pl-0'>
                            <ImageCard image={"/img2.png"} />
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-between gap-3'>
                        <div className='grow  w-full sm:w-1/3  md:w-1/5 relative  h-[320px]'>
                            <Card />
                        </div>
                        <div className='grow  w-full sm:w-1/3  md:w-1/5 relative  h-[320px]'>
                            <Card />
                        </div>
                        <div className='grow  w-full sm:w-1/3 md:w-1/5 relative  h-[320px]'>
                            <Card />
                        </div>
                        <div className='grow  w-full sm:w-1/3 md:w-1/5 relative  h-[320px]'>
                            <Card />
                        </div>
                    </div>
                </div>


                <div className='flex my-3'>
                    <div className='border-l-4 border-accent_s pr-1'></div>
                    <span className='text-xl'>Lastest News</span>
                </div>

                <div className='flex flex-wrap justify-between gap-3'>
                    <div className='grow  w-full sm:w-1/3  md:w-1/5 relative  h-[320px]'>
                        <Card roundMode />
                    </div>
                    <div className='grow  w-full sm:w-1/3  md:w-1/5 relative  h-[320px]'>
                        <Card roundMode />
                    </div>
                    <div className='grow  w-full sm:w-1/3 md:w-1/5 relative  h-[320px]'>
                        <Card roundMode />
                    </div>
                    <div className='grow  w-full sm:w-1/3 md:w-1/5 relative  h-[320px]'>
                        <Card roundMode />
                    </div>
                </div>

                <div className='flex my-3'>
                    <div className='border-l-4 border-accent_s pr-1'></div>
                    <span className='text-xl'>Lastest News</span>
                </div>

                <div className='flex flex-wrap justify-between gap-3'>
                    <div className='grow  w-full sm:w-1/3  md:w-1/5 relative  h-[320px]'>
                        <Card roundMode />
                    </div>
                    <div className='grow  w-full sm:w-1/3  md:w-1/5 relative  h-[320px]'>
                        <Card roundMode />
                    </div>
                    <div className='grow  w-full sm:w-1/3 md:w-1/5 relative  h-[320px]'>
                        <Card roundMode />
                    </div>
                    <div className='grow  w-full sm:w-1/3 md:w-1/5 relative  h-[320px]'>
                        <Card roundMode />
                    </div>
                </div>

            </div>

        </div>
    );
};


export default page;