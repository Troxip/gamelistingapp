import { useContext } from "react";
import logo from "./../assets/images/logo.png";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center p-3">
      <img src={logo} alt="Game Logo" width={90} height={90} />
      <div className="flex items-center bg-slate-200 mx-5 p-2 rounded-full w-full">
        <HiOutlineMagnifyingGlass />
        <input
          type="search"
          className="bg-transparent dark:bg-cyan-500 px-2 outline-none"
          placeholder="Search Games"
        />
      </div>
      <div className="cursor-pointer">
        {theme === "light" ? (
          <HiMoon
            className="bg-slate-200 p-1 rounded-full text-[30px] text-black"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiSun
            className="bg-slate-200 p-1 rounded-full text-[30px] text-black"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
}
