import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="
      min-h-screen
      flex
      justify-center
      items-center
      px-4
      sm:px-6
      py-10
      "
    >
      <form
        className="
        w-full
        max-w-md
        bg-slate-800
        border
        border-slate-700
        rounded-3xl
        p-6
        sm:p-8
        lg:p-10
        shadow-xl
        "
      >
        <div className="text-center">
          <h1
            className="
            text-3xl
            sm:text-4xl
            font-bold
            text-white
            "
          >
            Welcome Back
          </h1>

          <p
            className="
            text-slate-400
            mt-3
            "
          >
            Login to continue shopping
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="
            w-full
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
            type="password"
            placeholder="Password"
            className="
            w-full
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
        </div>

        <div
          className="
          flex
          justify-end
          mt-3
          "
        >
          <Link
            to="/forgot-password"
            className="
            text-sm
            text-purple-400
            hover:text-purple-300
            "
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="
          w-full
          mt-6
          bg-purple-600
          hover:bg-purple-700
          transition
          text-white
          py-4
          rounded-xl
          font-semibold
          "
        >
          Login
        </button>

        <p
          className="
          mt-6
          text-center
          text-slate-300
          "
        >
          Don't have an account?

          <Link
            to="/register"
            className="
            ml-2
            text-purple-400
            hover:text-purple-300
            font-medium
            "
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;