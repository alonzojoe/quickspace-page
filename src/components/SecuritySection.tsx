import { SECURITY_CONTENT } from "../constants";

const SecuritySection = () => {
  return (
    <section id="security">
      <div className="max-w-7xl mx-auto px-3 py-2 grid items-center grid-cols-1 gap-8 lg:grid-cols-2 mt-20">
        <div>
          <h2 className="text-center text-dark md:text-left text-2xl lg:text-3xl font-bold">
            {SECURITY_CONTENT.title}
          </h2>
          <p className="text-secondary mt-5">{SECURITY_CONTENT.description}</p>
          <div className="border-t border-neutral-500 my-12"></div>
        </div>
        <div className="bg-green-400">B</div>
      </div>
    </section>
  );
};

export default SecuritySection;
