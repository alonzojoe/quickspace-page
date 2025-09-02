import { CHOOSE_APPLICATION_CONTENT } from "../constants";

const ApplicationSection = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-2">
        <div className="text-center mb-12">
          <h2 className="text-xl mt-20 font-bold text-dark lg:text-4xl">
            {CHOOSE_APPLICATION_CONTENT.title}
          </h2>
          <p className="text-secondary my-5">
            {CHOOSE_APPLICATION_CONTENT.subTitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          {CHOOSE_APPLICATION_CONTENT.items.map((c, index) => (
            <div
              className="border border-white shadow-2xl flex flex-col items-center justify-center p-10 space-y-5"
              key={index}
            >
              <img
                className="h-[60px] w-[60px]"
                src={c.icon}
                alt={`app-${index + 1}`}
              />
              <h3 className="font-bold text-xl">{c.title}</h3>
              <p className="text-secondary">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
