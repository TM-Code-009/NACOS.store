import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

import {
  Link,
} from "react-router-dom";

import {
  useState,
} from "react";

const Navbar = () => {
  const [open, setOpen] =
    useState(false);

  return (
    <nav
      className="
      bg-slate-900
      border-b
      border-slate-800
      sticky
      top-0
      z-50
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        py-4
        flex
        justify-between
        items-center
        "
      >
        <Link
          to="/"
          className="
          text-purple-400
          text-2xl
          font-bold
          "
        >
          NACOS STORE
        </Link>

        <div
          className="
          hidden
          md:flex
          gap-8
          "
        >
          <Link to="/">
            Home
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/cart">
            Cart
          </Link>

          <Link to="/login">
            Login
          </Link>
        </div>

        <button
          onClick={() =>
            setOpen(!open)
          }
          className="
          md:hidden
          text-white
          "
        >
          {open ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </button>
      </div>

      {open && (
        <div
          className="
          md:hidden
          flex
          flex-col
          gap-4
          p-4
          bg-slate-800
          "
        >
          <Link to="/">
            Home
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/cart">
            Cart
          </Link>

          <Link to="/login">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;