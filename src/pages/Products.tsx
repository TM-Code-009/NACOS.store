import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const Products = () => {
  const [search, setSearch] =
    useState("");

  const filteredProducts =
    products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div
      className="
      max-w-7xl
      mx-auto
      px-4
      sm:px-6
      lg:px-8
      py-12
      lg:py-16
      "
    >
      {/* Header */}
      <div
        className="
        text-center
        mb-10
        "
      >
        <span
          className="
          text-purple-400
          font-medium
          "
        >
          OUR COLLECTION
        </span>

        <h1
          className="
          text-3xl
          sm:text-4xl
          lg:text-5xl
          font-bold
          text-white
          mt-3
          "
        >
          All Products
        </h1>

        <p
          className="
          text-slate-400
          max-w-2xl
          mx-auto
          mt-4
          "
        >
          Browse our premium
          collection of carefully
          selected products.
        </p>
      </div>

      {/* Search */}
      <div
        className="
        max-w-2xl
        mx-auto
        mb-12
        "
      >
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="
          w-full
          bg-slate-800
          border
          border-slate-700
          text-white
          placeholder:text-slate-400
          p-4
          rounded-xl
          focus:outline-none
          focus:border-purple-500
          "
        />
      </div>

      {/* Products Grid */}
      {filteredProducts.length >
      0 ? (
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-8
          "
        >
          {filteredProducts.map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            )
          )}
        </div>
      ) : (
        <div
          className="
          text-center
          py-20
          "
        >
          <h2
            className="
            text-2xl
            font-semibold
            text-slate-300
            "
          >
            No products found
          </h2>

          <p
            className="
            text-slate-500
            mt-3
            "
          >
            Try another search
            term.
          </p>
        </div>
      )}
    </div>
  );
};

export default Products;