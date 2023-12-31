import { useState, useEffect } from 'react';
import { useModalContext } from '@/components/dashboard/Modal';
import Filemanager from '@/app/dashboard/(main)/filemanager/page';
import { createCategory as RcreateCategory, updateCategory as RupdateCategory } from '@/services/Category';
import toast from 'react-hot-toast';
import Image from 'next/image';

export default function CreateCategory({ categoryList, updateData, setUpdateData }) {

    const { isModalOpen, openModal, closeModal, setBody } = useModalContext();

    const [editMode, setEditMode] = useState(false);
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");

    const [createStatus, setCreateStatus] = useState(false);




    const createCategory = async () => {
        try {
            const { data } = await RcreateCategory({ name, image: image.url });
            const { message } = data;
            toast.success(message);
            setImage(null);
            setName("");
            categoryList();
        } catch (error) {
            if (error?.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Something is wrong!');
            }
        }
    }

    const updateCategory = async (category_id) => {
        try {
            const { data } = await RupdateCategory({ category_id: updateData._id, name, image });
            const { message } = data;
            toast.success(message);
            setUpdateData(null);
            categoryList();
        } catch (error) {
            if (error?.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Something is wrong!');
            }
        }
    }

    useEffect(() => {
        if (updateData != null) {
            setImage(updateData.image);
            setName(updateData.name);
        } else {
            setImage(null);
            setName("");
        }
    }, [updateData]);
    useEffect(() => {
        if (!editMode && name != "" && image != null) {
            setCreateStatus(true);
        } else {
            setCreateStatus(false);
        }
    }, [editMode, image, name]);

    return (
        <div className='flex  relative bg-secondary h-[15rem] p-4'>
            <div className='relative w-full bg-primary rounded-lg'>
                {image &&
                    <Image
                        src={image.url}
                        alt="Picture of the author"
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={image.blurHash}
                        onClick={(e) => { e.stopPropagation(); }}
                    />
                }

                <div className='flex flex-col items-center max-h-fit  absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <div className='mb-2'>
                        <input
                            placeholder={"Category"}
                            className='outline-0 bg-transparent border-solid border-2 border-l-0 border-t-0 border-r-0 text-center rounded-xl'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div className='mt-2 w-full'>
                        <div className='flex mb-2'>
                            {editMode &&
                                <button className='bg-green-500 rounded-md p-1 w-full'>Done</button>
                            }
                            <button className={`${(createStatus) ? "bg-green-400 text-black" : "bg-blue-500 text-white"}  rounded-md p-1 w-full ${editMode && "ml-2"}`}
                                onClick={(e) => {
                                    if (createStatus) {
                                        createCategory();
                                    } else {
                                        setBody(<Filemanager fileType={"image"} fileSelectListener={(selectedFile) => {
                                            const { baseUrl, file } = selectedFile;
                                            setImage({ url: baseUrl + file.name, blurHash: file.blurHash });
                                            closeModal();
                                        }} />);
                                        openModal();
                                    }
                                }}>
                                {(createStatus) ? "Create" : "Select"}
                            </button>
                        </div>
                        {editMode &&
                            <div>
                                <button className='bg-red-500 rounded-md p-1 w-full'>Cancel Edit</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
