import ImageCard from '@/components/site/ImageCard';
import BigImageCard from '@/components/site/BigImageCard';
import Card from '@/components/site/Card';
import Image from 'next/image';
import { getCategoryData as RgetCategoryData } from '@/services/Category';

const categorysData = async (params) => {
    try {
        const { data } = await RgetCategoryData({ name: params[0], page: params[1], perPage: 8 });
        console.log(data);
        return data;

    } catch (error) {
        if (error?.response?.data?.message) {
            console.log(error.response.data.message);
        } else {
            console.log(error);
        }
    }
}

const Category = async ({ params }) => {

    const { data } = params;
    const { category, postsCount, posts } = await categorysData(data);
    console.log(category);
    return (
        <div className='flex flex-col w-full max-w-full items-center gap-3'>
            <div className='relative w-full h-max  rounded-md overflow-hidden'>
                <div className='absolute top-0 -z-10 w-full h-full'>
                    <Image
                        src={category.image.url}
                        alt="Picture of the author"
                        placeholder="blur"
                        fill
                        blurDataURL={category.image.blurHash}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className='mt-[80px] mb-[80px] flex  justify-center mx-2'>
                    <div className='flex flex-wrap gap-2 justify-center grow lg:max-w-[1140px]'>
                        <div className='flex  items-center'>
                            <div className='flex flex-col bg-secondary bg-opacity-50 rounded-md p-5 gap-3'>
                                <span className='text-4xl'>{data}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-primary_s to-transparent' />
            </div>
            <div className='flex flex-col lg:max-w-[1140px] w-full max-w-full gap-3 px-2'>


                <div class=" grid grid-cols-4 gap-5 border-2  p-2">

                    <div className='h-[200px] relative border-2 border-purple-600'>
                        <Card image={"http://localhost:3000/storage/1.jpg"} blurHash={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAxUlEQVR4nAG6AEX/AFBIVAUaGx0mOBQHEEkuO3dTYzomMz4xOS4zRXFwlgA9L0oIFxYWJSIOJh0rQC52YH98YnYjFSsrJk85Ok4ADSYnCDkoFlU7KXlZTL2YM4pwP3iNJ114DjtJAAUpAAAeFAs/LhRQOi2AZVLHojKJZz+giXH78UeuoQADDwAAIhsNQjAYVz4rfGMrfmIrfGJJtZV9//BMqrtCU3sAABwaAyskEkw/F1ZFImlULoJrNIx3UselcIiRcoLLENA1zvHewucAAAAASUVORK5CYII="}/>
                    </div>

                    <div className='h-[200px]  relative border-2 border-purple-600'>
                        1
                    </div>

                    <div className='h-[200px]  relative border-2 border-purple-600'>
                        1
                    </div>
                    <div className='h-[200px] relative border-2 border-purple-600'>
                        1
                    </div>
                    <div className='h-[200px] relative border-2 border-purple-600'>
                        1
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Category;