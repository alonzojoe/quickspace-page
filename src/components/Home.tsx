import { HERO_CONTENT } from "../constants";
import { FaArrowRight } from "react-icons/fa";
const Home = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="bg-red-0 max-w-7xl mx-auto px-3 py-2 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="bg-blue-0 flex flex-col">
          <h1 className="text-wrap text-4xl lg:text-7xl font-bold text-dark">
            {HERO_CONTENT.title}
          </h1>
          <p className="text-secondary my-8 text-md leading-7">
            {HERO_CONTENT.subTitlte}
          </p>
          <div className="flex items-center gap-4">
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
        <div className="bg-green-0">B</div>
      </div>
    </section>
  );
};

export default Home;
