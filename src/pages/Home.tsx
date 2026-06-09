import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import { products } from "../data/products";

const Home = () => {
  const featuredProducts =
    products.slice(0, 4);

  return (
    <>
      <Hero />

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
          flex
          flex-col
          md:flex-row
          md:items-end
          md:justify-between
          gap-4
          mb-12
          "
        >
          <div>
            <span
              className="
              text-purple-400
              font-medium
              "
            >
              FEATURED PRODUCTS
            </span>

            <h2
              className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-white
              mt-2
              "
            >
              Best Sellers
            </h2>

            <p
              className="
              mt-3
              text-slate-400
              max-w-2xl
              "
            >
              Explore our most popular
              premium products carefully
              selected for quality,
              elegance, and performance.
            </p>
          </div>
        </div>

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >
          {featuredProducts.map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            )
          )}
        </div>
      </section>

      <Testimonials />

      <Newsletter />
    </>
  );
};

export default Home;