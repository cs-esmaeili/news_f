import { PiFolderFill } from "react-icons/pi";
import { BsImageFill, BsFileEarmarkFill } from "react-icons/bs";
import { AiTwotoneVideoCamera } from "react-icons/ai";
import Image from 'next/image';
import Filemanager from '@/app/dashboard/(main)/filemanager/page';

export default function Files({ files, baseUrl, file, setFile, setPath, selectedFile, fileTypes }) {



    const isImageFileName = (fileName) => {
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg'];
        const extension = fileName.toLowerCase().substring(fileName.lastIndexOf('.'));

        return imageExtensions.includes(extension);
    }
    const isVideoFileName = (fileName) => {
        const videoExtensions = ['.mp4', '.mov', '.avi', '.mkv', '.wmv'];
        const extension = fileName.toLowerCase().substring(fileName.lastIndexOf('.'));

        return videoExtensions.includes(extension);
    };

    const fileIcon = (tempfile) => {
        if (isImageFileName(tempfile)) {
            return (<BsImageFill size={"3.5rem"} />);
        } else if (isVideoFileName(tempfile)) {
            return (<AiTwotoneVideoCamera size={"3.5rem"} />);
        } else {
            return (<BsFileEarmarkFill size={"3.5rem"} />);
        }
    }

    const Folders = (folder, index) => {
        return (
            <div className="flex flex-col items-center h-max xl:w-1/12 lg:w-1/6 md:w-1/6 sm:w-1/4  w-1/2 " key={index}
                onClick={() => {
                    setFile(folder);
                }}
                onDoubleClick={() => {
                    setPath(prevPath => [...prevPath, folder]);
                }}
            >
                <div>
                    <PiFolderFill size={"3.5rem"} />
                </div>
                <div className="block text-ellipsis overflow-hidden whitespace-nowrap w-full text-center">
                    {folder}
                </div>
            </div>
        );
    }

    const Files = (tempfile, index) => {
        return (
            <div key={index}
                onClick={() => {
                    setFile(tempfile);
                }}
                onDoubleClick={() => {
                    const loadImageModal = (loading) => {
                        const element = (
                            <Container>
                                <Row>
                                    {(loading) ?
                                        <div  >
                                            <Spinner animation="border" variant="warning" />
                                        </div>
                                        : null}
                                    <Image
                                        onLoad={() => {
                                            loadImageModal(false);
                                        }}
                                        loader={() => (baseUrl + tempfile)}
                                        src={baseUrl + tempfile}
                                        alt="Picture of the author"
                                        width={500}
                                        height={500} />
                                </Row>
                            </Container>
                        );
                        cModalUpdater({
                            status: true,
                            status: true,
                            title: "image",
                            body: element,
                            footer: (selectedFile != null) ? <Button onClick={() => {
                                cModalUpdater({
                                    status: true,
                                    title: null,
                                    body: <Filemanager selectedFile={selectedFile} />,
                                });
                            }}>Back</Button> : null,
                        });
                    }

                    if (isImageFileName(tempfile)) {
                        loadImageModal(true);
                    }
                }}>
                <div>
                    {fileIcon(tempfile)}
                </div>
                <span >
                    {tempfile.substring(tempfile.length - 10, tempfile.length)}
                </span>
            </div>
        );
    }
    return (
        <div className='flex  grow flex-wrap   p-2 overflow-auto  xl:gap-10 lg:gap-8 '>
            {files && files.folders.map((folder, index) => {
                if (file == null && index == 0) {
                    setFile(folder);
                }
                return Folders(folder, index);
            })}
            {files && files.files.map((file, index) => {
                if (file == null && index == 0) {
                    setFile(file);
                }

                if (fileTypes == null) {
                    return Files(file, index);
                } else if (fileTypes == "image" && !isImageFileName(file)) {
                    return null;
                } else if (fileTypes == "video" && !isVideoFileName(file)) {
                    return null;
                } else {
                    return Files(file, index);
                }
            })}
        </div>
    )
}
