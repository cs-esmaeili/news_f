'use client'
import { PiKeyReturnBold, PiMagnifyingGlassBold } from 'react-icons/pi';
import { TfiReload } from "react-icons/tfi";
import { useState, useEffect } from 'react';
import { folderFileList as RfolderFileList } from '@/services/Filemanager';
// import Delete from '@/components/dashboard/filemanager/Delete';
// import Upload from '@/components/dashboard/filemanager/Upload';
// import Rename from '@/components/dashboard/filemanager/Rename';
// import Folder from '@/components/dashboard/filemanager/Folder';
import Files from '@/components/dashboard/filemanager/Files';
import { useModalContext } from '@/components/dashboard/Modal';

export default function FileManager({ selectedFile = null, fileTypes = null }) {


    const [path, setPath] = useState([]);
    const [content, setContent] = useState(null);
    const [baseUrl, setBaseUrl] = useState(null);
    const [status, setStatus] = useState(false);

    const { isModalOpen, openModal, closeModal, setBody } = useModalContext();


    const [file, setfile] = useState(null);

    const folderFileList = async () => {
        try {
            setBaseUrl(null);
            setContent(null);

            setStatus(true);

            const { data } = await RfolderFileList({ location: path });
            const { content, baseUrl } = data;
            setContent(content);
            setBaseUrl(baseUrl);
            if (content.folders.length == 0 && content.files.length == 0) {
                setStatus('مسیر خالی میباشد');
            } else {
                setStatus(false);
            }
        } catch (error) {
            console.log(error);
            if (error?.response?.data?.message) {
                setStatus(error.response.data.message);
            } else {
                setStatus('Something is wrong!');
            }
        }
    }

    useEffect(() => {
        folderFileList();
    }, [path]);

    useEffect(() => {
        if (selectedFile != null && file != null && file.includes('.')) {
            selectedFile(baseUrl + file);
        }
    }, [file]);

    const statusElement = () => {
        if (status === true) {
            return (
                <div className="relative flex justify-center items-center h-full">
                    <div className="w-12 h-12 rounded-full border-8 border-solid border-accent border-t-transparent animate-spin"></div>
                </div>
            )
        } else if (typeof status === 'string') {
            return (
                <div className='flex content-center justify-center '>
                    <span>{status}</span>
                </div>
            )
        }
    }

    return (
        <>
            {/* <div className='flex  grow flex-col overflow-auto '>
                <div>salam</div>
                <div>salam</div>
                <div>salam</div>
                <div>salam</div>
                <div>salam</div>
                <div>salam</div>
                <div>salam</div>
                <div>salam</div>
                <div>salam</div>
                <div>salam</div>
                <div>salam</div>
                <div>salam</div>
                <div>salam</div>
                <div>salam</div>
                <div>salam</div>
                <div>salam</div>
                <div>bb</div>
            </div> */}
            {/* <Row className={styles.headerContainer}>
                <Col className={styles.opetionContainer}>
                    <TfiReload className={`${styles.icons}`} onClick={() => {
                        folderFileList();
                    }} />
                    <PiKeyReturnBold className={`${styles.icons}`} onClick={() => {
                        setPath(prevItems => prevItems.slice(0, -1));
                    }} />

                    <Delete path={path} file={file} reloadFileList={folderFileList} />
                    <Upload path={path} reloadFileList={folderFileList} />
                    <Rename path={path} file={file} reloadFileList={folderFileList} />
                    <Folder path={path} reloadFileList={folderFileList} />
                </Col>
                <Col>
                    <span className={styles.floationPanelFirstRow}>
                        {path == "" ? "Home" : path.join(' > ')}
                    </span>
                </Col>
                <Col>
                    <div className={styles.searchBar}>
                        <PiMagnifyingGlassBold className={styles.searchBarIcon} />
                        <input className={styles.searchInput} placeholder='search something...' />
                    </div>
                </Col>
            </Row> */}
            {/* <div className='flex absolute top-0 bottom-0 left-0 right-0 grow items-center z-0 justify-center'>
                {statusElement()}
            </div> */}
            <Files files={content}
                baseUrl={baseUrl}
                file={file}
                setFile={setfile} setPath={setPath}
                selectedFile={selectedFile}
                fileTypes={fileTypes}
            />
        </>
    )
}
