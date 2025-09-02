import { BRAND_ITEMS } from "../constants";

const PartnersSection = () => {
  return (
    <section id="brands">
      <div className="mt-10 mb-12 max-w-7xl mx-auto px-3 py-2 flex flex-wrap items-center justify-center gap-10 md:gap-20">
        {BRAND_ITEMS.map((brand, index) => (
          <img
            className="w-[234px] h-[37px]"
            key={index}
            src={brand}
            alt={`Brand-${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
