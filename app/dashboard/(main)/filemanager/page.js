'use client'
import { PiKeyReturnBold, PiMagnifyingGlassBold } from 'react-icons/pi';
import { TfiReload } from "react-icons/tfi";
import { useState, useEffect } from 'react';
import Delete from '@/components/dashboard/filemanager/Delete';
import Upload from '@/components/dashboard/filemanager/Upload';
import Rename from '@/components/dashboard/filemanager/Rename';
import Folder from '@/components/dashboard/filemanager/Folder';
import Files from '@/components/dashboard/filemanager/Files';
import Input from '@/components/dashboard/Input';

export default function FileManager({ fileTypes = null }) {


    const [path, setPath] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [refreshList, setRefreshList] = useState(false);




    return (
        <div className='flex flex-col grow max-w-full'>
            <div className='flex flex-wrap items-center bg-secondary rounded-xl m-1 p-2 '>
                <div className='flex items-center grow basis-8 mb-2 gap-3 justify-center'>
                    <TfiReload className="text-cyan-400 text-xl" onClick={() => {
                        setRefreshList(!refreshList);
                    }} />
                    <PiKeyReturnBold className="text-purple-400 text-xl" onClick={() => {
                        setPath(path.slice(0, -1));
                    }} />
                    <Delete path={path} file={selectedFile} refreshList={() => setRefreshList(!refreshList)} />
                    <Upload path={path} refreshList={() => setRefreshList(!refreshList)} />
                    <Rename path={path} file={selectedFile} refreshList={() => setRefreshList(!refreshList)} />
                    <Folder path={path} refreshList={() => setRefreshList(!refreshList)} />
                </div>
                <div className='flex grow basis-8 mb-2 justify-center mr-2 ml-2'>
                    <span>
                        {path == "" ? "Home" : "Home > " + path.join(' > ')}
                    </span>
                </div>
                <div className='flex grow basis-1 mb-2'>
                    <Input placeholder={"test"}
                        icon={<PiKeyReturnBold className='text-xl' />}
                        color={"bg-primary"} />
                </div>
            </div>
                <Files
                    selectedFile={selectedFile}
                    setSelectedFile={setSelectedFile}
                    setPath={setPath}
                    path={path}
                    fileTypes={fileTypes}
                    refreshList={refreshList}
                />
        </div>
    )
}
