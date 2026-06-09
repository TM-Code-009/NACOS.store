import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="
      relative
      overflow-hidden
      min-h-[85vh]
      flex
      items-center
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-purple-950
      py-20
      "
    >
      {/* Background Glow */}
      <div
        className="
        absolute
        top-10
        left-0
        sm:left-10
        w-48
        h-48
        sm:w-72
        sm:h-72
        bg-purple-600/20
        rounded-full
        blur-3xl
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        sm:right-10
        w-56
        h-56
        sm:w-80
        sm:h-80
        bg-indigo-500/20
        rounded-full
        blur-3xl
        "
      />

      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        w-full
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-12
        lg:gap-16
        items-center
        relative
        z-10
        "
      >
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <span
            className="
            inline-block
            bg-purple-500/20
            text-purple-300
            px-4
            py-2
            rounded-full
            text-xs
            sm:text-sm
            font-medium
            mb-6
            "
          >
            Premium Collection 2026
          </span>

          <h1
            className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-extrabold
            text-white
            leading-tight
            "
          >
            Discover
            <span className="text-purple-400">
              {" "}Luxury
            </span>
            <br />
            Shopping
          </h1>

          <p
            className="
            mt-6
            text-base
            sm:text-lg
            lg:text-xl
            text-slate-300
            max-w-xl
            mx-auto
            lg:mx-0
            "
          >
            Explore carefully curated products
            crafted for modern lifestyles.
            Experience elegance, quality,
            and sophistication in every purchase.
          </p>

          {/* Buttons */}
          <div
            className="
            flex
            flex-col
            sm:flex-row
            gap-4
            mt-8
            justify-center
            lg:justify-start
            "
          >
            <Link
              to="/products"
              className="
              px-8
              py-4
              bg-purple-600
              hover:bg-purple-700
              transition
              rounded-full
              font-semibold
              text-white
              text-center
              "
            >
              Shop Now
            </Link>

            <Link
              to="/products"
              className="
              px-8
              py-4
              border
              border-slate-700
              hover:border-purple-500
              hover:bg-slate-800
              transition
              rounded-full
              text-white
              text-center
              "
            >
              Explore Collection
            </Link>
          </div>

          {/* Stats */}
          <div
            className="
            flex
            flex-wrap
            justify-center
            lg:justify-start
            gap-8
            sm:gap-12
            mt-12
            "
          >
            <div>
              <h3
                className="
                text-2xl
                sm:text-3xl
                font-bold
                text-white
                "
              >
                500+
              </h3>

              <p className="text-slate-400 text-sm sm:text-base">
                Products
              </p>
            </div>

            <div>
              <h3
                className="
                text-2xl
                sm:text-3xl
                font-bold
                text-white
                "
              >
                10K+
              </h3>

              <p className="text-slate-400 text-sm sm:text-base">
                Customers
              </p>
            </div>

            <div>
              <h3
                className="
                text-2xl
                sm:text-3xl
                font-bold
                text-white
                "
              >
                4.9★
              </h3>

              <p className="text-slate-400 text-sm sm:text-base">
                Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div
          className="
          flex
          justify-center
          order-first
          lg:order-last
          "
        >
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
            alt="Luxury Product"
            className="
            w-full
            max-w-xs
            sm:max-w-sm
            md:max-w-md
            lg:max-w-lg
            rounded-3xl
            shadow-2xl
            border
            border-slate-700
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;