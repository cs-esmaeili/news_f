'use client'
import { PiKeyReturnBold, PiMagnifyingGlassBold } from 'react-icons/pi';
import { TfiReload } from "react-icons/tfi";
import { useState, useEffect } from 'react';
import Delete from '@/components/dashboard/filemanager/Delete';
import Upload from '@/components/dashboard/filemanager/Upload';
// import Rename from '@/components/dashboard/filemanager/Rename';
// import Folder from '@/components/dashboard/filemanager/Folder';
import Files from '@/components/dashboard/filemanager/Files';
import Input from '@/components/dashboard/Input';

export default function FileManager({ fileTypes = null }) {


    const [path, setPath] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [refreshList, setRefreshList] = useState(false);

    // useEffect(() => {
    //     if (selectedFile != null && file != null && file.includes('.')) {
    //         selectedFile(baseUrl + file);
    //     }
    // }, [selectedfile]);



    return (
        <div className='flex flex-col grow max-w-full '>
            {/* <Row className={styles.headerContainer}>
                <Col className={styles.opetionContainer}>

                  
                   
                    <Rename path={path} file={file} reloadFileList={folderFileList} />
                    <Folder path={path} reloadFileList={folderFileList} />
                </Col>
                <Col>
                    <div className={styles.searchBar}>
                        <PiMagnifyingGlassBold className={styles.searchBarIcon} />
                        <input className={styles.searchInput} placeholder='search something...' />
                    </div>
                </Col>
            </Row> */}
            <div className='flex items-center bg-secondary rounded-xl m-1 p-2'>
                <div className='flex'>
                    <TfiReload className="text-red-400 text-xl" onClick={() => {
                        setRefreshList(!refreshList);
                        console.log("da");
                    }} />
                    <PiKeyReturnBold className="text-red-400 text-xl" onClick={() => {
                        setPath(prevItems => prevItems.slice(0, -1));
                    }} />
                    <Delete path={path} file={selectedFile} refreshList={() => setRefreshList(!refreshList)} />
                    <Upload path={path} refreshList={() => setRefreshList(!refreshList)} />
                </div>
                <div>
                    <span>
                        {path == "" ? "Home" : path.join(' > ')}
                    </span>
                </div>
                <div>
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
            // refreshList={() => setRefreshList(!refreshList)}
            />
        </div>
    )
}
