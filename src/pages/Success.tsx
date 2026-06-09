import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-4
      "
    >
      <div
        className="
        bg-slate-800
        border
        border-slate-700
        rounded-3xl
        p-8
        sm:p-12
        text-center
        max-w-lg
        w-full
        shadow-2xl
        "
      >
        <div
          className="
          w-24
          h-24
          mx-auto
          rounded-full
          bg-green-500/20
          flex
          items-center
          justify-center
          "
        >
          <span
            className="
            text-green-400
            text-5xl
            "
          >
            ✓
          </span>
        </div>

        <h1
          className="
          text-3xl
          sm:text-4xl
          font-bold
          text-white
          mt-8
          "
        >
          Order Successful
        </h1>

        <p
          className="
          mt-4
          text-slate-400
          leading-relaxed
          "
        >
          Thank you for your purchase.
          Your order has been received and
          is being processed successfully.
        </p>

        <div
          className="
          flex
          flex-col
          sm:flex-row
          gap-4
          mt-8
          "
        >
          <Link
            to="/"
            className="
            flex-1
            bg-purple-600
            hover:bg-purple-700
            transition
            text-white
            py-4
            rounded-xl
            font-semibold
            "
          >
            Back Home
          </Link>

          <Link
            to="/products"
            className="
            flex-1
            border
            border-slate-600
            hover:border-purple-500
            text-white
            py-4
            rounded-xl
            transition
            "
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;