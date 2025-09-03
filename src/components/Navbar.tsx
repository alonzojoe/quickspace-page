import { useState } from "react";
import { APP_LOGO } from "../constants";
import { TbMenuDeep, TbX } from "react-icons/tb";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };

  const Icon = toggle ? TbX : TbMenuDeep;

  return (
    <nav className="fixed top-4 right-0 left-0 z-100">
      <div className="bg-white/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <img src={APP_LOGO} alt="logo" height={10} width={211.55} />

        <ul className="hidden md:flex items-center text-secondary font-semibold text-md space-x-7">
          <li className="hover:text-dark">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-dark">
            <a href="#page">Page</a>
          </li>
          <li className="hover:text-dark">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="hover:text-dark">
            <a href="#blog">Blog</a>
          </li>
          <li className="hover:text-dark">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button className="hidden md:block bg-primary cursor-pointer hover:bg-lightPrimary text-white text-lg py-2 px-4 rounded-lg">
          Get Started Free
        </button>
        <div className="md:hidden">
          <Icon
            onClick={toggleMenu}
            className="text-dark cursor-pointer text-4xl"
          />
        </div>
      </div>

      <div
        className={`md:hidden grid transition-all ease-in-out duration-300 ${
          toggle
            ? "grid-rows-[1fr] opacity-100 translate-y-0 scale-100"
            : "grid-rows-[0fr] opacity-0 -translate-y-2 scale-95"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-4 bg-white/60 backdrop-blur-md border border-gray-300 rounded-xl mt-2 mx-2">
            <ul className="flex flex-col text-secondary font-semibold text-md space-y-4">
              <li className="hover:text-dark">
                <a href="#home">Home</a>
              </li>
              <li className="hover:text-dark">
                <a href="#page">Page</a>
              </li>
              <li className="hover:text-dark">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="hover:text-dark">
                <a href="#blog">Blog</a>
              </li>
              <li className="hover:text-dark">
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <button className="bg-primary hover:bg-lightPrimary cursor-pointer mt-4 text-white text-lg py-2 px-4 rounded-lg">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
