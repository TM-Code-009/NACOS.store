import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  const total = cart.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  return (
    <div
      className="
      max-w-7xl
      mx-auto
      px-4
      sm:px-6
      lg:px-8
      py-10
      min-h-screen
      "
    >
      <h1
        className="
        text-3xl
        sm:text-4xl
        lg:text-5xl
        font-bold
        text-white
        mb-10
        "
      >
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div
          className="
          bg-slate-800
          border
          border-slate-700
          rounded-3xl
          p-10
          text-center
          "
        >
          <h2
            className="
            text-2xl
            font-semibold
            text-slate-300
            "
          >
            Your cart is empty
          </h2>

          <Link
            to="/products"
            className="
            inline-block
            mt-6
            bg-purple-600
            hover:bg-purple-700
            transition
            px-8
            py-4
            rounded-xl
            text-white
            "
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="
                bg-slate-800
                border
                border-slate-700
                rounded-3xl
                p-4
                sm:p-6
                flex
                flex-col
                sm:flex-row
                justify-between
                gap-6
                "
              >
                <div
                  className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                  "
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                    w-full
                    sm:w-28
                    h-48
                    sm:h-28
                    object-cover
                    rounded-xl
                    "
                  />

                  <div>
                    <h2
                      className="
                      text-xl
                      font-semibold
                      text-white
                      "
                    >
                      {item.name}
                    </h2>

                    <p
                      className="
                      mt-2
                      text-purple-400
                      "
                    >
                      ₦
                      {item.price.toLocaleString()}
                    </p>

                    <div
                      className="
                      flex
                      items-center
                      gap-3
                      mt-4
                      "
                    >
                      <button
                        onClick={() =>
                          decreaseQuantity(
                            item.id
                          )
                        }
                        className="
                        w-10
                        h-10
                        rounded-lg
                        bg-slate-700
                        text-white
                        "
                      >
                        -
                      </button>

                      <span
                        className="
                        text-white
                        text-lg
                        "
                      >
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(
                            item.id
                          )
                        }
                        className="
                        w-10
                        h-10
                        rounded-lg
                        bg-slate-700
                        text-white
                        "
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className="
                  flex
                  flex-col
                  justify-between
                  "
                >
                  <p
                    className="
                    text-xl
                    font-bold
                    text-white
                    "
                  >
                    ₦
                    {(
                      item.price *
                      item.quantity
                    ).toLocaleString()}
                  </p>

                  <button
                    onClick={() =>
                      removeFromCart(
                        item.id
                      )
                    }
                    className="
                    mt-4
                    bg-red-600
                    hover:bg-red-700
                    transition
                    text-white
                    px-5
                    py-3
                    rounded-xl
                    "
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div
            className="
            mt-10
            bg-slate-800
            border
            border-slate-700
            rounded-3xl
            p-8
            "
          >
            <h2
              className="
              text-2xl
              sm:text-3xl
              font-bold
              text-white
              "
            >
              Total:
              <span className="text-purple-400 ml-3">
                ₦
                {total.toLocaleString()}
              </span>
            </h2>

            <Link
              to="/checkout"
              className="
              inline-block
              mt-6
              bg-purple-600
              hover:bg-purple-700
              transition
              text-white
              px-8
              py-4
              rounded-xl
              font-medium
              "
            >
              Proceed To Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;