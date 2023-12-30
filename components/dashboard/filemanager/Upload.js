import { PiUploadBold } from 'react-icons/pi';
import { saveFile as RsaveFile, } from '@/services/Filemanager';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import ProgressBar from '@/components/dashboard/ProgressBar';

export default function UploadFile({ path, refreshList }) {

    const [persent, setPersent] = useState(0);
    const fileInputRef = useRef(null);

    const saveFile = async (event) => {
        try {
            let formData = new FormData();
            formData.append("location", JSON.stringify(path));
            for (let i = 0; i < event.target.files.length; i++) {
                const file = event.target.files[i];
                formData.append("files[]", file);
            }
            setPersent(0);
            const { data } = await RsaveFile(formData, (persent) => {
                setPersent(persent);
            });
            setPersent(0);
            const { message } = data;
            refreshList();
            toast.success(message);

        } catch (error) {
            console.log(error);
            if (error?.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Something is wrong!');
            }
            setPersent(0);
        }
    }

    return (
        <div className='flex text-center'>
            <PiUploadBold className='text-green-400 text-xl' onClick={() => {
                fileInputRef.current.click();
            }} />
            <input
                id="file"
                type="file"
                accept="image/*, video/*"
                aria-describedby="file"
                multiple
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={saveFile}
            />
            <div className={persent != 0 ? 'w-40 ml-1 mr-2' : "hidden"}>
                <ProgressBar progress={persent} />
            </div>
        </div>

    )
}
