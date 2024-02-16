'use client'
import { IoMenu } from "react-icons/io5";
import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation';

const SideBarButton = () => {

    const searchParams = useSearchParams();
    const pathName = usePathname();
    let sideBar = searchParams.get('sideBar');

    if (sideBar === null) {
        sideBar = 'true';
    } else {
        sideBar = (sideBar === 'true') ? 'false' : 'true';
    }
    const updatedParams = new URLSearchParams(searchParams.toString());
    updatedParams.set('sideBar', sideBar);
    const newUrl = `${pathName}?${updatedParams.toString()}`;

    return (
        <Link href={newUrl}>
            <IoMenu className='text-3xl' />
        </Link>
    );
};

export default SideBarButton;