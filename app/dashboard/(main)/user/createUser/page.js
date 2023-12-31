'use client'

import { BsImageFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useModalContext } from '@/components/dashboard/Modal';
import Filemanager from '@/app/dashboard/(main)/filemanager/page';
import Input from '@/components/dashboard/Input';
import InputDatePicker from '@/components/dashboard/InputDatePicker';
import Roles from '@/components/dashboard/role/Roles';
import { registerPure } from '@/services/User';
import toast from 'react-hot-toast';


export default function createUser() {

    const [role, setRole] = useState(null);
    const [image, setImage] = useState(null);
    const [userName, setUserName] = useState("");
    const [fullName, setFullName] = useState("");
    const [birthday, setBirthday] = useState(null);
    const [nationalCode, setNationalCode] = useState("");
    const [shebaNumber, setShebaNumber] = useState("");

    const [createStatus, setCreateStatus] = useState(false);


    const { isModalOpen, openModal, closeModal, setBody } = useModalContext();

    const resetForm = () => {
        setRole(null);
        setImage(null);
        setUserName("");
        setFullName("");
        setBirthday(null);
        setNationalCode("");
        setShebaNumber("");
    }

    const createUser = async () => {
        try {
            let response = await registerPure({
                userName,
                role_id: role._id,
                data: {
                    image,
                    fullName,
                    nationalCode,
                    birthday,
                    shebaNumber
                }
            });
            let { data } = response;
            const { message } = data;
            toast.success(message);
            resetForm();
        } catch (error) {
            console.log(error);
            if (error?.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Something is wrong!');
            }
        }
    }

    const pickImage = () => {
        setBody(<Filemanager fileType={"image"} fileSelectListener={(selectedFile) => {
            const { baseUrl, file } = selectedFile;
            setImage({ url: baseUrl + file.name, blurHash: file.blurHash });
            closeModal();
        }} />);
        openModal();
    }

    useEffect(() => {
        if (role != null &&
            image != null &&
            userName != "" &&
            fullName != "" &&
            birthday != null &&
            nationalCode != "" &&
            shebaNumber != ""
        ) {
            setCreateStatus(true);
        } else {
            setCreateStatus(false);
        }
    }, [role, image, userName, fullName, birthday, nationalCode, shebaNumber]);

    return (
        <div className='flex flex-col grow max-w-full min-w-0'>
            <div className='flex gap-2 flex-wrap-reverse md:flex-nowrap  justify-center bg-secondary m-2 p-2 rounded-lg max-w-full overflow-hidden'>

                <div className='flex flex-col grow  gap-2 w-2/3 max-w-2/3'>
                    <Input onChange={(e) => setFullName(e.target.value)} value={fullName} icon={<BsImageFill />} placeholder={"Fullname"} color={"bg-primary"} />
                    <Input onChange={(e) => setUserName(e.target.value)} value={userName} icon={<BsImageFill />} placeholder={"Username"} color={"bg-primary"} />
                    <Input onChange={(e) => setNationalCode(e.target.value)} value={nationalCode} icon={<BsImageFill />} placeholder={"National_code"} color={"bg-primary"} />
                    <Input onChange={(e) => setShebaNumber(e.target.value)} value={shebaNumber} icon={<BsImageFill />} placeholder={"sheba_Number"} color={"bg-primary"} />
                    <div className='flex justify-between gap-2'>
                        <InputDatePicker icon={<BsImageFill className='' />} reset={birthday} onChange={(time) => setBirthday(time)} />
                        <button className='bg-accent grow text-nowrap p-1 pl-3 pr-3 rounded-md' onClick={() => {
                            setBody(<Roles selectMode listener={(role) => {
                                const { name, _id } = role;
                                setRole({ name, _id });
                                closeModal();
                            }} />);
                            openModal();
                        }}>{role ? role.name : "Select Role"}</button>
                    </div>
                    <button className={`bg-green-500 grow text-nowrap p-1 pl-3 pr-3 rounded-md ${!createStatus && "opacity-50"}`}
                        onClick={() => {
                            if (createStatus) {
                                createUser();
                            }
                        }}
                    >
                        Create User
                    </button>
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
