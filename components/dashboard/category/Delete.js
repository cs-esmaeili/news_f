import { IoMdTrash } from 'react-icons/io';
import { deleteCategory as RdeleteCategory } from '@/services/Category';
import toast from 'react-hot-toast';
import { useState } from 'react';
import Input from '@/components/dashboard/Input';

export default function DeleteCategory({ row, categoryList, index, categorys }) {

    const [inputOpen, setInputOpen] = useState(false);

    const deleteCategory = async (newCategory_id) => {
        try {
            const { data } = await RdeleteCategory({ category_id: row._id, newCategory_id });
            const { message } = data;
            categoryList();
            toast.success(message);
        } catch (error) {
            if (error?.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Something is wrong!');
            }
        }
    }


    return (
        <div className='flex items-center'>
            <IoMdTrash className='text-xl text-blue-400' onClick={() => {
                setInputOpen(!inputOpen);
            }} />
            {inputOpen &&
                <Input
                    placeholder={"Rename to ..."}
                    color={"bg-primary"}
                    autoFocus
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            if (e.target.value == null || e.target.value == "") {
                                toast.error("شماره دسته بندی جایگزین را وارد کنید");
                            } else if (index + 1 == e.target.value) {
                                toast.error("باید دسته بندی جدیدی را انتخاب کنید");
                            } else {
                                for (let i = 0; i < categorys.length; i++) {
                                    if (i == e.target.value) {
                                        deleteCategory(categorys[i]._id);
                                        setInputOpen(false);
                                        e.target.value = "";
                                        categoryList();
                                    }
                                }
                            }

                        }
                    }}
                    onBlur={() => {
                        setInputOpen(false);
                    }}
                />
            }
        </div>
    )
}
