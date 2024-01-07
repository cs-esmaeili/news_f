import { createPost as RcreatePost, updatePost as RupdatePost } from '@/services/Post';
import { useModalContext } from '@/components/dashboard/Modal';
import Category from '@/app/dashboard/(main)/category/page';
import { useState, useEffect } from 'react';
import Input from '@/components/dashboard/Input';
import { RiCloseFill } from 'react-icons/ri';
import toast from 'react-hot-toast';

const PostDetails = ({ content, setContent }) => {

    const { isModalOpen, openModal, closeModal, setBody } = useModalContext();

    const [tags, setTags] = useState([]);
    const [category, setCategory] = useState(null);
    const [title, setTitle] = useState("");
    const [disc, setDisc] = useState("");

    const [readyToCreate, setReadyToCreate] = useState(false);

    const createPost = async () => {
        try {
            const { data } = await RcreatePost({ title, disc, metaTags: tags, category_id: category._id, body: content });
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

    const resetForm = () => {
        setContent([]);
        setTags([]);
        setCategory(null);
        setTitle("");
        setDisc("");
    }

    useEffect(() => {
        if (tags.length > 0 && category != null && title != "" && disc != "") {
            setReadyToCreate(true);
        } else {
            setReadyToCreate(false);
        }
    }, [tags, category, title, disc]);

    return (
        <div className='sticky z-10 top-0 flex flex-col bg-secondary  p-2 mb-2 rounded-md' >
            <div className='flex  gap-2 mb-2  justify-between flex-wrap  max-w-full'>
                <div className='grow'>
                    <Input placeholder={"Title"} color={"bg-primary"} onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <div className='grow'>
                    <Input placeholder={"Discription"} color={"bg-primary "} onChange={(e) => setDisc(e.target.value)} value={disc} />
                </div>
            </div>
            <Input placeholder={"Meta Tags"} color={"bg-primary"} onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    let temp = [...tags];
                    temp.push(e.target.value);
                    e.target.value = "";
                    setTags(temp);
                }
            }} />

            {tags.length > 0 &&
                <div className='flex flex-wrap gap-3 mt-2'>
                    {tags.map((tag, index) => {
                        return (
                            <div className='flex' onClick={() => {
                                console.log("click");
                                let temp = [...tags];
                                temp.splice(index, 1);
                                setTags(temp);
                            }}>
                                <div className='flex justify-center items-center p-2 bg-primary rounded-xl'>
                                    <div>{tag}</div>
                                    <RiCloseFill className='ml-1 text-red-400' />
                                </div>
                            </div>
                        );
                    })}
                </div>
            }
            <div className='flex mt-3 gap-2'>
                <button className={`w-full p-1 bg-accent rounded-md ${(!readyToCreate) && "opacity-50"}`}
                    onClick={() => {
                        if (readyToCreate) {
                            createPost();
                        }
                    }}>
                    Create Post
                </button>
                <button className='w-full p-1 bg-green-500 rounded-md '
                    onClick={() => {
                        setBody(<Category pickMode selectListener={(row) => {
                            setCategory(row);
                            closeModal();
                        }} />);
                        openModal();
                    }}>
                    {(category == null) ? "Select Category" : category.name}
                </button>
            </div>
        </div>
    );
};

export default PostDetails;