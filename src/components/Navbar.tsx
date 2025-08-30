import Logo from "../assets/images/logo.png";
import { TfiMenu } from "react-icons/tfi";
const Navbar = () => {
  return (
    <nav className="fixed top-4 right-0 left-0 z-100">
      <div className="bg-white/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <img src={Logo} alt="logo" height={10} width={211.55} />

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
        <button className="hidden md:block bg-primary text-white text-lg py-2 px-4 rounded-lg">
          Get Started Free
        </button>
        <div className="md:hidden">
          <TfiMenu className="text-dark cursor-pointer text-3xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
