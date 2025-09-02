import { SECURITY_CONTENT } from "../constants";

const SecuritySection = () => {
  return (
    <section id="security">
      <div className="max-w-7xl mx-auto px-3 py-2 grid items-center grid-cols-1 gap-10 lg:grid-cols-2 mt-20">
        <div>
          <h2 className="text-dark  text-xl lg:text-4xl font-bold">
            {SECURITY_CONTENT.title}
          </h2>
          <p className="text-secondary mt-5">{SECURITY_CONTENT.description}</p>
          <div className="border-t border-neutral-400 my-12"></div>

          {SECURITY_CONTENT.items.map((item, index) => (
            <div className="my-5" key={index}>
              <h3 className="font-bold text-xl text-dark">{item.title}</h3>
              <p className="text-md text-secondary mt-3">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center md:justify-center justify-end">
          <img
            className="w-[553px] xl:w-[753px]"
            src={SECURITY_CONTENT.ImageRight}
            alt="security-img"
          />
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
