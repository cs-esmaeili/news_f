'use client'

import Image from 'next/image';
import { firstPage, updateFirstPage } from '@/services/Site';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useModalContext } from '@/components/dashboard/Modal';
import Filemanager from '@/app/dashboard/(main)/filemanager/page';
import Input from '@/components/dashboard/Input';

export default function Dashboard() {

    const [firstPageData, setFirstPageData] = useState(null);
    const { openModal, closeModal } = useModalContext();

    const getData = async () => {
        try {
            const { data } = await firstPage();
            setFirstPageData(data);
        } catch (error) {
            if (error?.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Something is wrong!');
            }
        }
    }

    const updateData = async (location, idata, customData) => {
        try {
            const { data } = await updateFirstPage({ location, data: idata, customData });
            const { message } = data;
            toast.success(message);
            getData();
        } catch (error) {
            if (error?.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Something is wrong!');
            }
        }
    }

    function getLocationData(locationNumber, needCustomData = false) {
        if (needCustomData) {
            return firstPageData.find(obj => obj.location === locationNumber).customData;
        }
        return firstPageData.find(obj => obj.location === locationNumber).data;
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='flex flex-col  grow overflow-hidden  p-3 gap-3'>
            {firstPageData &&
                <>
                    <div className='relative w-full h-max  rounded-md overflow-hidden' onClick={(e) => {
                        openModal(<Filemanager fileType={"image"} fileSelectListener={(selectedFile) => {
                            const { baseUrl, file } = selectedFile;
                            const url = baseUrl + file.name;
                            const blurHash = file.blurHash;
                            updateData(1, [],
                                {
                                    "textArea": getLocationData(1, true).textArea,
                                    "image": {
                                        "url": url,
                                        "blurHash": blurHash
                                    }
                                }
                            );
                            closeModal();
                        }} />);
                    }}>
                        <div className='w-full h-[300px]' >
                            <Image
                                src={getLocationData(1, true).image.url}
                                alt="Picture of the author"
                                placeholder="blur"
                                fill
                                blurDataURL={getLocationData(1, true).image.blurHash}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    <div className='flex flex-col'>

                        <div className='flex gap-3'>
                            <div className='flex w-1/2 justify-center items-center'>
                                <div className='flex flex-col bg-secondary bg-opacity-50 rounded-md p-5 gap-3'>
                                    <span className='text-4xl' onClick={() => {
                                        console.log("title");
                                    }}>{getLocationData(1, true).textArea.title}</span>
                                    <span onClick={() => {
                                        console.log("disc");
                                    }}>{getLocationData(1, true).textArea.disc}</span>
                                </div>
                            </div>
                            <div className='flex flex-col w-1/2 justify-around'>
                                <Input placeholder={"Title"} onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        updateData(1, [],
                                            {
                                                "textArea": {
                                                    "title": e.target.value,
                                                    "disc": getLocationData(1, true).textArea.disc
                                                },
                                                "image": getLocationData(1, true).image
                                            }
                                        );
                                        e.target.value = "";
                                    }
                                }} />
                                <Input placeholder={"disc"} onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        updateData(1, [],
                                            {
                                                "textArea": {
                                                    "disc": e.target.value,
                                                    "title": getLocationData(1, true).textArea.title
                                                },
                                                "image": getLocationData(1, true).image
                                            }
                                        );
                                        e.target.value = "";
                                    }
                                }} />
                            </div>
                        </div>


                    </div>
                </>
            }
        </div>
    )
}
