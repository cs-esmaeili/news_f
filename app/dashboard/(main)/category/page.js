'use client'
import { useState, useEffect } from 'react';
import { BiSolidEdit } from 'react-icons/bi';
import Create from '@/components/dashboard/category/Create';
import Delete from '@/components/dashboard/category/Delete';
import { categoryList as RcategoryList } from '@/services/Category';
import toast from 'react-hot-toast';
import Table from '@/components/dashboard/Table';
import Pagination from '@/components/dashboard/Pagination';


export default function Category({ pickMode, selectedCategory }) {


    const [categorys, setCategorys] = useState(null);
    const [categorysCount, setCategorysCount] = useState(null);
    const [activePage, setActivePage] = useState(1);
    const [perPage, setPerPage] = useState(5);

    const [updateData, setUpdateData] = useState(null);



    const categoryList = async () => {
        try {
            const { data } = await RcategoryList({ page: activePage, perPage });
            const { categorysCount, categorys } = data;
            setCategorys(categorys);
            setCategorysCount(categorysCount);
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

    useEffect(() => {
        console.log(updateData);
    }, [updateData]);

    return (
        <div className='flex flex-col w-full'>
            <div>
                <Create categoryList={categoryList} updateData={updateData} setUpdateData={(value) => setUpdateData(value)} />
            </div>
            <div className='flex grow w-full p-2 overflow-x-scroll'>
                {categorys &&
                    <Table
                        headers={[
                            { name: 'Id', cssClass: "hidden lg:table-cell" },
                            { name: 'Name', cssClass: "" },
                            { name: 'UpdatedAt', cssClass: "hidden sm:table-cell" },
                            { name: 'Actions', cssClass: "" },
                        ]}
                        allowHeaders={[
                            { name: '_id', cssClass: "hidden lg:table-cell" },
                            { name: 'name', cssClass: "" },
                            { name: 'updatedAt', cssClass: "hidden sm:table-cell" }
                        ]}
                        rows={categorys}
                        selectMode={true}
                        selectListener={(row, index) => { console.log(row) }}
                        special={(row, index) => {
                            return (
                                <td className="h-[1px]  p-0 pb-1">
                                    <div className="flex h-full items-center justify-center rounded-e-xl bg-secondary p-1 text-nowrap">
                                        <Delete row={row} index={index} categoryList={categoryList} categorys={categorys} />
                                    </div>
                                </td>
                            )
                        }}
                    />
                }
            </div>
            <Pagination activePage={activePage} perPage={perPage} count={categorysCount} setActivePage={setActivePage} />

        </div>

    )
}
