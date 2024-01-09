'use client'

import { BsImageFill } from 'react-icons/bs';
import { useState } from 'react';
import Image from 'next/image';
import { useModalContext } from '@/components/dashboard/Modal';
import Filemanager from '@/app/dashboard/(main)/filemanager/page';
import Input from '@/components/dashboard/Input';
import InputDatePicker from '@/components/dashboard/InputDatePicker';
import Roles from '@/components/dashboard/role/Roles';

export default function createUser() {

    const [role, setRole] = useState(null);
    const [image, setImage] = useState(null);
    const [userName, setUserName] = useState(null);
    const [fullName, setFullName] = useState(null);
    const [birthday, setBirthday] = useState(null);
    const [nationalCode, setNationalCode] = useState(null);
    const [shebaNumber, setShebaNumber] = useState(null);

    const [resetForm, setResetForm] = useState(false);

    const { isModalOpen, openModal, closeModal, setBody } = useModalContext();


    const createUser = () => {

    }

    const pickImage = () => {
        setBody(<Filemanager fileType={"image"} fileSelectListener={(selectedFile) => {
            const { baseUrl, file } = selectedFile;
            setImage({ url: baseUrl + file.name, blurHash: file.blurHash });
            closeModal();
        }} />);
        openModal();
    }


    return (
        <div className='flex flex-col grow max-w-full min-w-0'>
            <div className='flex gap-2 flex-wrap-reverse md:flex-nowrap  justify-center bg-secondary m-2 p-2 rounded-lg max-w-full overflow-hidden'>

                <div className='flex flex-col grow  gap-2 w-2/3 max-w-2/3'>
                    <Input onChange={(value) => setFullName(value)} value={fullName} icon={<BsImageFill />} placeholder={"Fullname"} color={"bg-primary"} />
                    <Input onChange={(value) => setUserName(value)} value={userName} icon={<BsImageFill />} placeholder={"Username"} color={"bg-primary"} />
                    <Input onChange={(value) => setNationalCode(value)} value={nationalCode} icon={<BsImageFill />} placeholder={"National_code"} color={"bg-primary"} />
                    <Input onChange={(value) => setShebaNumber(value)} value={shebaNumber} icon={<BsImageFill />} placeholder={"sheba_Number"} color={"bg-primary"} />
                    <div className='flex justify-between gap-2'>
                        <InputDatePicker icon={<BsImageFill className='' />} reset={resetForm} onChange={(time) => setBirthday(time)} />
                        <button className='bg-accent grow text-nowrap p-1 pl-3 pr-3 rounded-md' onClick={() => {
                            setBody(<Roles selectMode listener={(role) => {
                                const { name, _id } = role;
                                setRole({ name, _id });
                                closeModal();
                            }} />);
                            openModal();
                        }}>{role ? role.name : "Select Role"}</button>
                    </div>
                    <button className='bg-green-500 grow text-nowrap p-1 pl-3 pr-3 rounded-md'>Create User</button>
                </div>

                <div className='flex flex-col grow md:grow-0  w-1/3 justify-start bg-primary rounded-md p-2'>
                    <div className='w-fit'>User Image:</div>
                    <div className='flex grow relative justify-center text-center mt-3'>
                        {image &&
                            <Image
                                src={image.url}
                                alt="Picture of the author"
                                fill
                                objectFit="cover"
                                placeholder="blur"
                                blurDataURL={image.blurHash}
                                onClick={(e) => {
                                    pickImage();
                                }}
                            />
                        }
                        <BsImageFill className='text-green-400 text-8xl m-10' onClick={() => {
                            pickImage();
                        }} />
                    </div>
                </div>
            </div>
            <div className='flex m-2 p-2 rounded-lg'>

            </div>
        </div >
    )
}
