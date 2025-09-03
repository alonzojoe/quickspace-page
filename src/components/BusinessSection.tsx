import { BUSINESS_CONTENT } from "../constants";

const BusinessSection = () => {
  return (
    <section className="bg-primary mt-10">
      <div className="max-w-7xl mx-auto px-3 py-2 text-white">
        <div className="text-center mb-12">
          <h2 className="text-xl lg:text-4xl mt-20 font-bold">
            {BUSINESS_CONTENT.title}
          </h2>
          <p className="my-5">{BUSINESS_CONTENT.subTitle}</p>
          <div className="grid grid-cols-1 mt-10 mb-20 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {BUSINESS_CONTENT.items.map((b, index) => (
              <div
                className="flex flex-col items-center justify-center space-y-5"
                key={index}
              >
                <h3 className="font-bold text-[38px]">{b.title}</h3>
                <p>{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
