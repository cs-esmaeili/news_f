import { useState, useEffect } from 'react';
import {
    renameFolder as RrenameFolder,
    renameFile as RrenameFile,
} from '@/services/Filemanager';
import { BiSolidEdit } from 'react-icons/bi';
import Input from '@/components/dashboard/Input';
import toast from 'react-hot-toast';

export default function Rename({ path, file, refreshList }) {

    const [inputOpen, setInputOpen] = useState(false);

    const renameFolder = async (newName) => {
        try {
            console.log({ location: path, oldName: file, newName });
            const { data } = await RrenameFolder({ location: path, oldName: file, newName });
            const { message } = data;
            toast.success(message);
            refreshList();
        } catch (error) {
            if (error?.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Something is wrong!');
            }
        }
    }
    const renameFile = async (newName) => {
        try {
            console.log({ location: path, oldName: file, newName });
            const { data } = await RrenameFile({ location: path, oldName: file, newName });
            const { message } = data;
            toast.success(message);
            refreshList();
        } catch (error) {
            if (error?.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Something is wrong!');
            }
        }
    }

    return (
        <div className='flex items-center'>
            <BiSolidEdit className='text-xl text-blue-400' onClick={() => {
                setInputOpen(!inputOpen);
            }} />
            {inputOpen &&
                <Input
                    placeholder={"Rename to ..."}
                    color={"bg-primary"}
                    autoFocus
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            if (file.includes(".")) {
                                renameFile(e.target.value);
                            } else {
                                renameFolder(e.target.value);
                            }
                            setInputOpen(false);
                            e.target.value = "";
                        }
                    }}
                    onBlur={() => {
                        setInputOpen(false);
                    }}
                />
            }
        </div>
    )
}
