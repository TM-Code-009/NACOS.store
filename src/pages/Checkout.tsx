import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div
      className="
      max-w-5xl
      mx-auto
      px-4
      sm:px-6
      lg:px-8
      py-16
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
        Checkout
      </h1>

      <div
        className="
        bg-slate-800
        border
        border-slate-700
        rounded-3xl
        p-6
        sm:p-8
        "
      >
        <form
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          "
        >
          <input
            type="text"
            placeholder="Full Name"
            className="
            bg-slate-900
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

          <input
            type="email"
            placeholder="Email Address"
            className="
            bg-slate-900
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

          <input
            type="tel"
            placeholder="Phone Number"
            className="
            bg-slate-900
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

          <input
            type="text"
            placeholder="City"
            className="
            bg-slate-900
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

          <textarea
            rows={5}
            placeholder="Delivery Address"
            className="
            md:col-span-2
            bg-slate-900
            border
            border-slate-700
            text-white
            placeholder:text-slate-400
            p-4
            rounded-xl
            focus:outline-none
            focus:border-purple-500
            resize-none
            "
          />

          <Link
            to="/success"
            className="
            md:col-span-2
            bg-purple-600
            hover:bg-purple-700
            transition
            text-white
            text-center
            py-4
            rounded-xl
            font-semibold
            "
          >
            Place Order
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Checkout;