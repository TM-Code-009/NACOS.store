const testimonials = [
  {
    name: "John Doe",
    role: "Verified Buyer",
    review:
      "Amazing products and fast delivery. The quality exceeded my expectations.",
  },
  {
    name: "Sarah Johnson",
    role: "Fashion Enthusiast",
    review:
      "Premium quality and excellent customer service. Highly recommended.",
  },
  {
    name: "David Smith",
    role: "Tech Lover",
    review:
      "One of the best online shopping experiences I've had. Everything was seamless.",
  },
];

const Testimonials = () => {
  return (
    <section
      className="
      max-w-7xl
      mx-auto
      px-4
      sm:px-6
      lg:px-8
      py-16
      lg:py-20
      "
    >
      <div className="text-center mb-12">
        <span
          className="
          text-purple-400
          font-medium
          "
        >
          TESTIMONIALS
        </span>

        <h2
          className="
          text-3xl
          sm:text-4xl
          lg:text-5xl
          font-bold
          text-white
          mt-3
          "
        >
          What Customers Say
        </h2>

        <p
          className="
          mt-4
          text-slate-400
          max-w-2xl
          mx-auto
          "
        >
          Trusted by thousands of customers
          who love our premium products and
          shopping experience.
        </p>
      </div>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
        "
      >
        {testimonials.map(
          (testimonial) => (
            <div
              key={testimonial.name}
              className="
              bg-slate-800
              border
              border-slate-700
              rounded-3xl
              p-8
              hover:border-purple-500
              transition
              "
            >
              <div className="mb-6">
                <span
                  className="
                  text-4xl
                  text-purple-400
                  "
                >
                  "
                </span>
              </div>

              <p
                className="
                text-slate-300
                leading-relaxed
                "
              >
                {testimonial.review}
              </p>

              <div className="mt-6">
                <h3
                  className="
                  text-white
                  font-bold
                  "
                >
                  {testimonial.name}
                </h3>

                <p
                  className="
                  text-sm
                  text-slate-500
                  "
                >
                  {testimonial.role}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Testimonials;