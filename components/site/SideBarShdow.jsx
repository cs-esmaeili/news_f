'use client'

import React from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';

const SideBarShdow = () => {

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
            <div className={(searchParams.get('sideBar') === "true") ? " opacity-50 bg-black w-100% h-screen z-10 top-0 left-0 right-0 bottom-0 fixed cursor-pointer" : "hidden"} />
        </Link>
    );
};

export default SideBarShdow;