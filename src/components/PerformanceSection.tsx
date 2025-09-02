import { useState } from "react";
import { PERFORMANCE_CONTENT } from "../constants";
const PerformanceSection = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((p) => p !== index) : [...prev, index]
    );
  };

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
          <p className="text-secondary mt-7">
            {PERFORMANCE_CONTENT.description}
          </p>

          <div className="mt-10">
            {PERFORMANCE_CONTENT.items.map((f, index) => {
              const isOpen = openIndexes.includes(index);
              return (
                <div className="p-6 border-t border-neutral-300" key={index}>
                  <div
                    className="flex justify-between font-bold text-xl  items-center"
                    key={index}
                  >
                    <span className="text-dark">{f.title}</span>
                    <span
                      className="cursor-pointer text-primary"
                      onClick={() => toggleItem(index)}
                    >
                      {isOpen ? "-" : "+"}
                    </span>
                  </div>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] mt-5" : "grid-rows-[0fr] mt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p>{f.subTitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="border-t border-neutral-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
