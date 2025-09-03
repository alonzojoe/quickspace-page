import { TESTIMONIALS_CONTENT } from "../constants";

const TestimonialsSection = () => {
  return (
    <section id="testimonials">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-xl mt-20 font-bold text-dark lg:text-4xl">
            {TESTIMONIALS_CONTENT.title}
          </h2>
          <p className="text-secondary my-5">{TESTIMONIALS_CONTENT.subTitle}</p>
          <div className="grid grid-cols-1 mt-10 mb-20 md:grid-cols-3 gap-10 text-center">
            {TESTIMONIALS_CONTENT.users.map((u, index) => (
              <div
                className="border border-white shadow-2xl p-20 flex flex-col items-center justify-center space-y-5"
                key={index}
              >
                <img
                  className="h-[88px] w-[88px] rounded-full"
                  src={u.icon}
                  alt={`user-${index + 1}`}
                />
                <p className="text-dark">{u.testimonial}</p>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <h3 className="text-xl font-bold">{u.name}</h3>
                  <p className="text-sm text-secondary">{u.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
