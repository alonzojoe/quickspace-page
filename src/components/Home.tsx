import { HERO_CONTENT } from "../constants";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import HeroImg from "../assets/images/hero.png";
import Elipse from "../assets/images/Ellipse 95.png";
import Vector from "../assets/images/Vector.png";
const Home = () => {
  return (
    <section id="home" className="pt-36 lg:pt-42">
      <div className="bg-red-0 max-w-7xl mx-auto px-3 py-2 grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="bg-blue-0 flex flex-col relative">
          <img
            src={Elipse}
            className="w-5 h-5 absolute -top-10 left-15"
            alt="elipse"
          />
          <img
            src={Vector}
            className="w-12 h-[63px] absolute -top-20 right-10"
            alt="vector"
          />
          <h1 className="text-center md:text-left text-wrap text-4xl lg:text-7xl font-bold text-dark">
            {HERO_CONTENT.title}
          </h1>
          <p className="text-center md:text-left text-secondary my-8 text-md leading-7">
            {HERO_CONTENT.subTitlte}
          </p>
          <div className="flex justify-center md:justify-start items-center gap-4">
            <a
              href="#"
              className="bg-primary text-sm hover:bg-lightPrimary text-white py-4 px-7 rounded-lg"
            >
              Discover More
            </a>
            <a
              href="#"
              className="bg-white text-dark py-4 px-7 text-sm flex items-center gap-3"
            >
              Expore Service <FaArrowRight />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center md:justify-start items-center gap-4">
            {HERO_CONTENT.items.map((item, index) => (
              <span
                className="flex text-secondary items-center gap-2"
                key={index}
              >
                <FaCheck className="text-primary" /> {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-end md:justify-center">
          <img className="w-[553px] xl:w-[753px]" src={HeroImg} alt="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
