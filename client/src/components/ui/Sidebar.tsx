import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { FaUsersGear } from "react-icons/fa6";
import { GoLog } from "react-icons/go";
import { HiPuzzle } from "react-icons/hi";
import { IoLogOutSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const Links = [
    {
      name: "LogOut",
      link: "/logout",
      icon: <IoLogOutSharp size={25} className="mr-4" />,
    },
    {
      name: "Permissions",
      link: "/dashboard/permissions",
      icon: <GoLog size={25} className="mr-4" />,
    },
    {
      name: "Roles",
      link: "/dashboard/roles",
      icon: <HiPuzzle size={25} className="mr-4" />,
    },
    {
      name: "Users",
      link: "/dashboard/users",
      icon: <FaUsersGear size={25} className="mr-4" />,
    },
  ];
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-around items-center p-4 bg-slate-900 text-white ">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
      </div>
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <BiFoodMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Auth <span className="font-bold">Flow</span>
        </h1>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen  bg-white text-black z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Auth <span className="font-bold">Flow</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4">
            {Links?.map((link, index) => (
              <li key={index} className="text-xl py-4 flex">
                <Link
                  to={link.link}
                  className="text-xl text-black hover:text-blue-400 duration-500 flex"
                >
                  {link.icon} {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
