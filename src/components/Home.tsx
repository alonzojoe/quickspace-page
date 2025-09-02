import { HERO_CONTENT } from "../constants";
import { FaArrowRight } from "react-icons/fa";
import HeroImg from "../assets/images/hero.png";

const Home = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="bg-red-0 max-w-7xl mx-auto px-3 py-2 grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="bg-blue-0 flex flex-col">
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
        </div>
        <div className="flex items-center justify-center">
          <img className="w-400px xl:w-553px" src={HeroImg} alt="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
