'use client'
import { useState, useEffect } from 'react';
import { BiSolidEdit } from 'react-icons/bi';
import Create from '@/components/dashboard/category/Create';
import { categoryList as RcategoryList } from '@/services/Category';
import toast from 'react-hot-toast';


export default function Category({ pickMode, selectedCategory }) {


    const [categorys, setCategorys] = useState(null);
    const [categorysCount, setCategorysCount] = useState(null);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);

    const [updateData, setUpdateData] = useState(null);



    const categoryList = async () => {
        try {
            const { data } = await RcategoryList({ page, perPage });
            const { categorysCount, categorys } = data;
            setCategorys(categorys);
            setCategorysCount(categorysCount);
            console.log(data);
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
    }, [page]);

    useEffect(() => {
        console.log(updateData);
    }, [updateData]);

    return (
        <div className='flex flex-col w-full'>
            <Create categoryList={categoryList} updateData={updateData} setUpdateData={(value) => setUpdateData(value)} />
            <div className='bg-cyan-400 grow'>
                table
            </div>
            {/* {categorys != null ?
                <Table
                    headers={['Id', 'Name', 'UpdatedAt', "Actions"]}
                    allowHeaders={['_id', 'name', 'updatedAt']}
                    rows={categorys}
                    selectMode={pickMode}
                    selectedRow={(row) => selectedCategory(row)}
                    special={(row) => {
                        return (
                            <td className={styles.col} style={{ display: "flex" }}>
                                <Delete row={row} categoryList={categoryList} />
                                <BiSolidEdit className={`${styles.icons} ${styles.blue}`} onClick={() => {
                                    setUpdateData(row);
                                }} />
                            </td>
                        )
                    }}
                />
                :
                null
            }
            <PaginationLayout page={page} perPage={perPage} count={categorysCount} setPage={(value) => { setPage(value); console.log(value) }} /> */}

        </div>

    )
}
