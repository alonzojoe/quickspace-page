import { FEATURE_CONTENT } from "../constants";

const FeaturesSection = () => {
  return (
    <section id="features">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-xl mt-20 font-bold text-dark lg:text-4xl">
            {FEATURE_CONTENT.title}
          </h2>
          <p className="text-secondary my-5">{FEATURE_CONTENT.subTitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {FEATURE_CONTENT.featureItems.map((f, index) => (
            <div
              className="border p-20 border-white shadow-2xl flex flex-col items-center justify-center space-y-5"
              key={f.id}
            >
              <img
                className="h-[70px] w-[70px]"
                src={f.icon}
                alt={`icon-${index + 1}`}
              />
              <h3 className="font-bold text-xl">{f.title}</h3>
              <p className="text-secondary">{f.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-md text-secondary font-semibold my-12">
          {FEATURE_CONTENT.footer.first}{" "}
          <span className="text-primary">
            {FEATURE_CONTENT.footer.highlight}
          </span>{" "}
          {FEATURE_CONTENT.footer.second}
        </p>
      </div>
    </section>
  );
};

export default FeaturesSection;
