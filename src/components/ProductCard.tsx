import type { Product } from "../types/product";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

interface Props {
  product: Product;
}

const ProductCard = ({
  product,
}: Props) => {
  const addToCart =
    useCartStore(
      (state) => state.addToCart
    );

  return (
    <div
      className="
      bg-slate-800
      border
      border-slate-700
      rounded-3xl
      overflow-hidden
      shadow-lg
      hover:shadow-purple-500/20
      hover:-translate-y-2
      transition-all
      duration-300
      flex
      flex-col
      "
    >
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="
          w-full
          h-56
          sm:h-64
          lg:h-72
          object-cover
          hover:scale-105
          transition-transform
          duration-500
          "
        />
      </div>

      <div
        className="
        p-5
        flex
        flex-col
        flex-1
        "
      >
        <h3
          className="
          text-white
          text-lg
          sm:text-xl
          font-bold
          "
        >
          {product.name}
        </h3>

        <p
          className="
          text-purple-400
          text-xl
          font-semibold
          mt-2
          "
        >
          ₦{product.price.toLocaleString()}
        </p>

        <div className="flex-1" />

        <div
          className="
          mt-5
          flex
          flex-col
          sm:flex-row
          gap-3
          "
        >
          <Link
            to={`/product/${product.id}`}
            className="
            flex-1
            text-center
            border
            border-slate-600
            hover:border-purple-500
            text-slate-300
            hover:text-white
            py-3
            rounded-xl
            transition
            "
          >
            Details
          </Link>

          <button
            onClick={() =>
              addToCart({
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                quantity: 1,
              })
            }
            className="
            flex-1
            bg-purple-600
            hover:bg-purple-700
            text-white
            py-3
            rounded-xl
            transition
            font-medium
            "
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;