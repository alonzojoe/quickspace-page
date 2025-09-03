import { FOOTER_CONTENT } from "../constants";
import { LuPhone, LuMail } from "react-icons/lu";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-darkBlue text-white">
      <div className="max-w-7xl mx-auto px-3 flex justify-between flex-wrap gap-10 pt-20">
        <div className="flex flex-col space-y-7">
          <img
            className="w-[211px] h-[32px]"
            src={FOOTER_CONTENT.logo}
            alt="quickspace-logo"
          />
          <p>{FOOTER_CONTENT.description}</p>
          <div className="text-md flex flex-col space-y-3">
            <span className="flex items-center gap-4">
              <LuPhone className="text-lg" /> {FOOTER_CONTENT.phone}
            </span>
            <span className="flex items-center gap-4">
              <LuMail className="text-lg" /> {FOOTER_CONTENT.email}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="cursor-pointer">
              <img
                className="w-[169px] h-[53px]"
                src={FOOTER_CONTENT.playstore}
                alt="playstore"
              />
            </button>
            <button className="cursor-pointer">
              <img
                className="w-[169px] h-[53px]"
                src={FOOTER_CONTENT.appstore}
                alt="appstore"
              />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-5">
          {FOOTER_CONTENT.sections.map((s, index) => (
            <ul className="flex flex-col space-y-4" key={index}>
              <li className="font-bold text-md">{s.title}</li>
              {s.items.map((link, idx) => (
                <li className="text-neutral-400" key={idx}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-3 flex justify-between items-center gap-10 py-10">
        <span className="text-neutral-400">{FOOTER_CONTENT.reserved}</span>
        <div className="flex items-center gap-4 text-white text-lg">
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
