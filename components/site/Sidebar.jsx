'use client'

import { PiFolderFill } from "react-icons/pi";
import { usePathname } from 'next/navigation';
import { MdSpaceDashboard } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdPostAdd } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { BsShieldLockFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import SideBarShdow from "./SideBarShdow";

const Sidebar = ({ open, setOpen }) => {

  const pathname = usePathname();

  const items = [
    { name: "Dashboard", url: "/dashboard", icon: <MdSpaceDashboard className="text-2xl" /> },
    { name: "File Manager", url: "/dashboard/filemanager", icon: <PiFolderFill className="text-2xl" /> },
    { name: "Category", url: "/dashboard/category", icon: <BiSolidCategoryAlt className="text-2xl" /> },
    { name: "Create Post", url: "/dashboard/post/createPost", icon: <MdPostAdd className="text-2xl" /> },
    { name: "Post List", url: "/dashboard/post/postList", icon: <HiOutlineClipboardDocumentList className="text-2xl" /> },
    { name: "Permissions", url: "/dashboard/role", icon: <BsShieldLockFill className="text-2xl" /> },
    { name: "Users", url: "/dashboard/user", icon: <FaUserPlus className="text-2xl" /> },
  ];

  return (
    <>
      <SideBarShdow open={open} setOpen={setOpen} />
      <div
        className={
          open
            ? "fixed bottom-0 right-0  top-0 z-30 h-full min-w-max bg-primary_s p-7 duration-500 ease-in"
            : "fixed  right-[-100%] h-full z-30 min-w-max bg-primary_s p-7 duration-500 ease-in"
        }
      >
        <div className="flex items-center justify-center mb-5 ">
          <Image
            className="rounded-md"
            src="/logo.jpg"
            alt="Site logo"
            width={60}
            height={60}
          />
          <span className="ml-3 font-bold"> WEB site Name </span>
        </div>

        <div>
          {items.map((item, index) => {
            const { url, icon, name } = item;
            return (
              <Link href={url} key={index}>
                <div className={(pathname == url) ?
                  "bg-siebar_item mb-5 flex items-center rounded-lg bg-active_background p-3 text-accent"
                  :
                  "mb-5 flex items-center p-3 text-dactive"
                }>
                  {icon}
                  <span className="ml-3">{name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;