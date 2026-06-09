const Newsletter = () => {
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
      <div
        className="
        bg-gradient-to-r
        from-purple-700
        via-purple-600
        to-indigo-700
        rounded-3xl
        p-6
        sm:p-8
        lg:p-12
        text-center
        shadow-2xl
        "
      >
        <h2
          className="
          text-3xl
          sm:text-4xl
          lg:text-5xl
          font-bold
          text-white
          "
        >
          Join Our Newsletter
        </h2>

        <p
          className="
          mt-4
          text-purple-100
          text-base
          sm:text-lg
          max-w-2xl
          mx-auto
          "
        >
          Subscribe to receive exclusive
          offers, product updates, and
          premium shopping experiences.
        </p>

        <div
          className="
          mt-8
          flex
          flex-col
          md:flex-row
          gap-4
          justify-center
          items-center
          max-w-2xl
          mx-auto
          "
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="
            w-full
            bg-white
            text-slate-900
            px-5
            py-4
            rounded-xl
            outline-none
            "
          />

          <button
            className="
            w-full
            md:w-auto
            bg-slate-950
            hover:bg-black
            transition
            text-white
            font-semibold
            px-8
            py-4
            rounded-xl
            whitespace-nowrap
            "
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;