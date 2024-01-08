'use client'
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Table from '@/components/dashboard/Table';
import Pagination from '@/components/dashboard/Pagination';
import { postList as RpostList } from '@/services/Post';
import { BiSolidEdit } from 'react-icons/bi';

const postList = () => {

    const [posts, setPosts] = useState(null);
    const [postsCount, setPostsCount] = useState(null);
    const [activePage, setActivePage] = useState(1);
    const [perPage, setPerPage] = useState(30);

    const [editData, setEditData] = useState(null);



    const categoryList = async () => {
        try {
            const { data } = await RpostList({ page: activePage, perPage });
            const { postsCount, posts } = data;
            setPosts(posts);
            setPostsCount(postsCount);
        } catch (error) {
            if (error?.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Something is wrong!');
            }
        }
    }

    useEffect(() => {
        categoryList();
    }, [activePage]);


    return (
        <div className='flex grow flex-col overflow-hidden'>
            <div className='flex grow overflow-y-auto overflow-x-hidden m-3 mb-0'>
                {posts &&
                    <Table
                        headers={[
                            { name: 'Id', cssClass: "hidden xl:table-cell" },
                            { name: 'title', cssClass: "" },
                            { name: 'Category', cssClass: "" },
                            { name: 'UpdatedAt', cssClass: "hidden sm:table-cell" },
                            { name: 'Actions', cssClass: "" },
                        ]}
                        rowData={[
                            { name: '_id', cssClass: "hidden xl:table-cell" },
                            { name: 'title', cssClass: "" },
                            { name: 'categoryName', cssClass: "" },
                            { name: 'updatedAt', cssClass: "hidden sm:table-cell" },
                        ]}
                        rows={posts}
                        rowCountstart={(perPage * (activePage - 1))}
                        selectMode={true}
                        selectListener={(row, index) => {
                        }}
                        special={(row, index) => {
                            return (
                                <td className={`h-[1px]  p-0 pb-1`}>
                                    <div className="flex h-full items-center justify-center rounded-e-xl bg-secondary p-1 text-nowrap">
                                        <BiSolidEdit className='text-xl ml-4 text-blue-400' onClick={() => {
                                        }} />
                                    </div>
                                </td>
                            )
                        }}
                    />
                }
            </div>
            <div className='flex  justify-center items-center pt-3'>
                <Pagination activePage={activePage} perPage={perPage} count={postsCount} setActivePage={setActivePage} />
            </div>
        </div>
    );
};

export default postList;