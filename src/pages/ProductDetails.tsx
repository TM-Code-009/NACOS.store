import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCartStore } from "../store/cartStore";

const ProductDetails = () => {
  const { id } = useParams();

  const addToCart =
    useCartStore(
      (state) => state.addToCart
    );

  const product =
    products.find(
      (item) =>
        item.id === Number(id)
    );

  if (!product) {
    return (
      <div
        className="
        min-h-screen
        flex
        justify-center
        items-center
        "
      >
        <h1
          className="
          text-3xl
          font-bold
          text-white
          "
        >
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div
      className="
      max-w-7xl
      mx-auto
      px-4
      sm:px-6
      lg:px-8
      py-12
      lg:py-20
      "
    >
      <div
        className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-10
        lg:gap-16
        items-center
        "
      >
        {/* Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="
            w-full
            rounded-3xl
            border
            border-slate-700
            shadow-2xl
            "
          />
        </div>

        {/* Content */}
        <div>
          <span
            className="
            text-purple-400
            font-medium
            "
          >
            PREMIUM PRODUCT
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
            {product.name}
          </h1>

          <p
            className="
            text-purple-400
            text-2xl
            sm:text-3xl
            font-bold
            mt-5
            "
          >
            ₦
            {product.price.toLocaleString()}
          </p>

          <p
            className="
            mt-8
            text-slate-300
            leading-relaxed
            text-base
            sm:text-lg
            "
          >
            {product.description}
          </p>

          <button
            onClick={() =>
              addToCart({
                id: product.id,
                image:
                  product.image,
                name:
                  product.name,
                price:
                  product.price,
                quantity: 1,
              })
            }
            className="
            mt-10
            w-full
            sm:w-auto
            bg-purple-600
            hover:bg-purple-700
            transition
            text-white
            px-8
            py-4
            rounded-xl
            font-semibold
            "
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;