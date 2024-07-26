import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";
import { GoFileSubmodule } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";

export const Navigation = () => {
  return (
    <div className="container block h-screen w-60 bg-dark">
      <div className="pl-6 pt-20 pr-6 space-y-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col p-3 rounded-xl ${isActive ? 'bg-pink' : 'bg-dark border border-solid border-white'}`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center">
              <div
                className={`flex w-8 h-8 justify-center items-center ${isActive ? 'bg-white text-pink rounded-full' : 'text-white'}`}
              >
                <AiFillHome className="text-2xl" />
              </div>
              <div className="text-white text-lg font-medium ml-7">
                <p>Home</p>
              </div>
            </div>
          )}
        </NavLink>

        <NavLink
          to="/category"
          className={({ isActive }) =>
            `flex flex-col p-3 rounded-xl ${isActive ? 'bg-pink' : 'bg-dark border border-solid border-white'}`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center">
              <div
                className={`flex w-8 h-8 justify-center items-center ${isActive ? 'bg-white text-pink rounded-full' : 'text-white'}`}
              >
                <BiSolidCategory className="text-2xl" />
              </div>
              <div className="text-white text-lg font-medium ml-7">
                <p>Categories</p>
              </div>
            </div>
          )}
        </NavLink>

        <NavLink
          to="/favorite"
          className={({ isActive }) =>
            `flex flex-col p-3 rounded-xl ${isActive ? 'bg-pink' : 'bg-dark border border-solid border-white'}`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center">
              <div
                className={`flex w-8 h-8 justify-center items-center ${isActive ? 'bg-white text-pink rounded-full' : 'text-white'}`}
              >
                <MdFavorite className="text-2xl" />
              </div>
              <div className="text-white text-lg font-medium ml-7">
                <p>Favorite</p>
              </div>
            </div>
          )}
        </NavLink>

        <NavLink
          to="/library"
          className={({ isActive }) =>
            `flex flex-col p-3 rounded-xl ${isActive ? 'bg-pink' : 'bg-dark border border-solid border-white'}`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center">
              <div
                className={`flex w-8 h-8 justify-center items-center ${isActive ? 'bg-white text-pink rounded-full' : 'text-white'}`}
              >
                <GoFileSubmodule className="text-2xl" />
              </div>
              <div className="text-white text-lg font-medium ml-7">
                <p>My Library</p>
              </div>
            </div>
          )}
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex flex-col p-3 rounded-xl ${isActive ? 'bg-pink' : 'bg-dark border border-solid border-gray border-opacity-10'}`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center">
              <div
                className={`flex w-8 h-8 justify-center items-center ${isActive ? 'bg-white text-pink rounded-full' : 'text-white'}`}
              >
                <IoMdSettings className="text-2xl" />
              </div>
              <div className="text-white text-lg font-medium ml-7">
                <p>Settings</p>
              </div>
            </div>
          )}
        </NavLink>
      </div>
    </div>
  );
};
