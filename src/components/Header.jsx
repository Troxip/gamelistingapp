import { useState } from "react";
import logo from "./../assets/images/logo.png";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";

export default function Header() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="flex items-center p-3">
      <img src={logo} alt="Game Logo" width={90} height={90} />
      <div className="flex items-center bg-slate-200 mx-5 p-2 rounded-full w-full">
        <HiOutlineMagnifyingGlass />
        <input
          type="search"
          className="bg-transparent px-2 outline-none"
          placeholder="Search Games"
        />
      </div>
      <div>
        {toggle ? (
          <HiMoon className="bg-slate-200 p-1 rounded-full text-[30px] text-black" />
        ) : (
          <HiSun className="bg-slate-200 p-1 rounded-full text-[30px] text-black" />
        )}
      </div>
    </div>
  );
}
