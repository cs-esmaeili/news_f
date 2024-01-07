import React from 'react';
import { BsImageFill } from 'react-icons/bs';
import { PiTextAaFill } from 'react-icons/pi';
import { RiCloseFill } from 'react-icons/ri';
import { AiTwotoneVideoCamera } from 'react-icons/ai';
import { useModalContext } from '@/components/dashboard/Modal';
import Filemanager from '@/app/dashboard/(main)/filemanager/page';
import VideoJS from "@/components/dashboard/videoPlayer";
import Image from 'next/image';

const PostList = ({ content, setContent }) => {

    const { isModalOpen, openModal, closeModal, setBody } = useModalContext();

    const handleItemClick = (newType, newContent, parentIndex, childIndex) => {
        setContent(prevContent => {
            const temp = [...prevContent];
            temp[parentIndex] = [...temp[parentIndex]];
            temp[parentIndex][childIndex] = {
                type: newType,
                content: newContent
            };
            return temp;
        });
    };

    const renderPanelContent = (innerArray, childIndex, outerArray, parentIndex) => {
        if (innerArray.type == "Text") {
            return (
                <textarea placeholder='Text Area' type="text" value={content[parentIndex][childIndex].content} className='resize-none w-full min-w-0 bg-transparent' onChange={(e) => {
                    handleItemClick("Text", e.target.value, parentIndex, childIndex);
                }} />
            );
        } else if (innerArray.type == "Image") {
            const selectImage = () => {
                setBody(<Filemanager fileType={"image"} fileSelectListener={(selectedFile) => {
                    const { baseUrl, file } = selectedFile;
                    console.log(selectedFile);
                    handleItemClick("Image", { url: (baseUrl + file.name), blurHash: file.blurHash, size: file.size }, parentIndex, childIndex);
                    closeModal();
                }} />);
                openModal();
            }
            if (innerArray.content == "") {
                return (
                    <div className='flex grow justify-center items-center w-fit'>
                        <BsImageFill className={`text-green-400 text-8xl`} onClick={() => {
                            selectImage();
                        }} />
                    </div>
                );
            } else {
                return (
                    <div className='flex grow justify-center items-center w-fit'>
                        <Image
                            src={innerArray.content.url}
                            alt="Picture of the author"
                            width={innerArray.content.size.width}
                            height={innerArray.content.size.height}
                            placeholder="blur"
                            blurDataURL={innerArray.content.blurHash}
                            onClick={(e) => {
                                selectImage();
                            }}
                        />
                    </div>
                );
            }
        } else if (innerArray.type == "Video") {
            const selectVideo = () => {
                setBody(<Filemanager fileType={"video"} fileSelectListener={(selectedFile) => {
                    const { baseUrl, file } = selectedFile;
                    handleItemClick("Video", (baseUrl + file.name), parentIndex, childIndex);
                    closeModal();
                }} />);
                openModal();
            }
            if (innerArray.content == "") {
                return (
                    <div className='flex grow justify-center items-center w-fit'>
                        <AiTwotoneVideoCamera className={`text-blue-400 text-8xl`} onClick={() => {
                            selectVideo();
                        }} />
                    </div>
                );
            } else {
                return (
                    <div className='h-full bg-red-400 w-full'>
                        <VideoJS
                            options={{
                                autoplay: false,
                                controls: true,
                                responsive: true,
                                fluid: true,
                                sources: [
                                    {
                                        src: innerArray.content,
                                        type: "video/mp4",
                                    },
                                ],
                            }}
                        />
                    </div>
                );
            }
        }
    }
    const renderPanels = () => {
        return content.map((outerArray, parentIndex) => {
            return (
                <div className="flex gap-2 mb-2" key={parentIndex}>
                    {outerArray.map((innerArray, childIndex) => {
                        return (
                            <div className="flex flex-col grow bg-secondary rounded-md p-2 basis-0" key={childIndex}>
                                <div className="flex justify-between items-center mb-3 max-h-5 mt-2">
                                    <span>{innerArray.type} Place</span>
                                    <div className="flex items-center gap-4 ">
                                        <PiTextAaFill
                                            className={`text-yellow-400 text-3xl opacity-50 ${innerArray.type == "Text" && "!opacity-100"}`}
                                            onClick={() => handleItemClick("Text", "", parentIndex, childIndex)}
                                        />
                                        <BsImageFill
                                            className={`text-green-400 text-2xl opacity-50 ${innerArray.type == "Image" && "!opacity-100"}`}
                                            onClick={() => handleItemClick("Image", "", parentIndex, childIndex)}
                                        />
                                        <AiTwotoneVideoCamera
                                            className={`text-blue-400 text-3xl opacity-50 ${innerArray.type == "Video" && "!opacity-100"}`}
                                            onClick={() => handleItemClick("Video", "", parentIndex, childIndex)}
                                        />
                                        <RiCloseFill className="text-red-400 text-3xl" onClick={() => {
                                            const temp = [...content];
                                            if (temp[parentIndex].length == 1) {
                                                temp.splice(parentIndex, 1);
                                            } else {
                                                temp[parentIndex].splice(childIndex, 1);
                                            }
                                            setContent(temp);
                                        }} />
                                    </div>
                                </div>
                                <div className="flex bg-primary relative rounded-sm p-1  h-fit min-h-52  grow">
                                    {renderPanelContent(innerArray, childIndex, outerArray, parentIndex)}
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        });
    };

    return (
        <div className='flex flex-col'>
            {renderPanels()}
        </div>
    );
};

export default PostList;