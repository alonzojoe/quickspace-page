import { PERFORMANCE_CONTENT } from "../constants";
const PerformanceSection = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-3 py-2 grid items-center grid-cols-1 lg:grid-cols-2 gap-10 mt-20">
        <div className="flex items-center justify-start lg:justify-center">
          <img
            className="w-[553px] xl:w-[753px]"
            src={PERFORMANCE_CONTENT.imageLeft}
            alt="performance-img"
          />
        </div>
        <div>
          <h2 className="text-dark text-xl lg:text-4xl font-bold">
            {PERFORMANCE_CONTENT.title}
          </h2>
          <p className="text-secondary mt-5">
            {PERFORMANCE_CONTENT.description}
          </p>

          <div className="mt-15">
            {PERFORMANCE_CONTENT.items.map((f, index) => (
              <div
                className="flex justify-between font-bold text-xl p-6 items-center border-t border-neutral-300"
                key={index}
              >
                <span className="text-dark">{f.title}</span>
                <span className="cursor-pointer text-primary">+</span>
              </div>
            ))}
            <div className="border-t border-neutral-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
