import { PiFolderFill } from "react-icons/pi";
import { BsImageFill, BsFileEarmarkFill } from "react-icons/bs";
import { BsPersonVideo2 } from "react-icons/bs";
import Filemanager from '@/app/dashboard/(main)/filemanager/page';
import { useModalContext } from '@/components/dashboard/Modal';
import { useEffect } from "react";
import ImageModal from "../Modals/ImageModal";

export default function Files({ files, baseUrl, selectedFile, setSelectedFile, setPath, fileTypes }) {

    const { isModalOpen, openModal, closeModal, setBody } = useModalContext();


    const File = (file, index) => {
        const { name, type } = file;
        let icon = null;
        if (selectedFile == null && index == 0) {
            setSelectedFile(name);
        }
        if (type == "folder") {
            icon = <PiFolderFill size={"3.5rem"} className="text-yellow-400" />;
        } else if (type == "image") {
            icon = <BsImageFill size={"3.5rem"} className="text-green-400" />;
        } else if (type == "video") {
            icon = <BsPersonVideo2 size={"3.5rem"} className="text-red-500" />;
        } else if (type == "file") {
            icon = <BsFileEarmarkFill size={"3.5rem"} />;
        }
        return (
            <div className={`flex cursor-pointer flex-col items-center h-max xl:w-1/12 lg:w-1/6 md:w-1/6 sm:w-1/4 w-1/2 ${(selectedFile == name) ? "bg-secondary rounded-lg" : ""}`} key={index}
                onClick={() => {
                    setSelectedFile(name);
                    if (type == 'image') {
                        setBody(<ImageModal baseUrl={baseUrl} image={name} hash={file.hash} size={file.size} />);
                        openModal();
                    }
                }}
                onDoubleClick={() => {
                    setPath(prevPath => [...prevPath, file]);
                }}
            >
                <div>
                    {icon}
                </div>
                <div className="block text-ellipsis overflow-hidden whitespace-nowrap w-full text-center">
                    {name}
                </div>
            </div>
        );
    }


    useEffect(() => {
    }, []);

    return (
        <div className='flex  grow flex-wrap   p-2 overflow-auto  xl:gap-10 lg:gap-8 '>
            {files && files.files.map((file, index) => {
                return File(file, index);
            })}
        </div>
    )
}
