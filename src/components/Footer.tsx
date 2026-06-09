import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="
      bg-slate-950
      border-t
      border-slate-800
      mt-20
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        py-12
        "
      >
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10
          "
        >
          {/* Brand */}
          <div>
            <h2
              className="
              text-2xl
              font-bold
              text-purple-400
              "
            >
              NACOS STORE
            </h2>

            <p
              className="
              mt-4
              text-slate-400
              leading-relaxed
              "
            >
              Premium shopping experience
              designed for customers who
              appreciate luxury, quality,
              and style.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3
              className="
              font-semibold
              text-white
              mb-4
              "
            >
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="
                  text-slate-400
                  hover:text-purple-400
                  transition
                  "
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="
                  text-slate-400
                  hover:text-purple-400
                  transition
                  "
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="
                  text-slate-400
                  hover:text-purple-400
                  transition
                  "
                >
                  Cart
                </Link>
              </li>

              <li>
                <Link
                  to="/checkout"
                  className="
                  text-slate-400
                  hover:text-purple-400
                  transition
                  "
                >
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3
              className="
              font-semibold
              text-white
              mb-4
              "
            >
              Support
            </h3>

            <ul className="space-y-3">
              <li className="text-slate-400">
                Help Center
              </li>

              <li className="text-slate-400">
                FAQs
              </li>

              <li className="text-slate-400">
                Shipping
              </li>

              <li className="text-slate-400">
                Returns
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="
              font-semibold
              text-white
              mb-4
              "
            >
              Contact
            </h3>

            <div className="space-y-3">
              <p className="text-slate-400">
                support@nacosstore.com
              </p>

              <p className="text-slate-400">
                Lagos, Nigeria
              </p>

              <p className="text-slate-400">
                +234 800 123 4567
              </p>
            </div>
          </div>
        </div>

        <div
          className="
          border-t
          border-slate-800
          mt-10
          pt-6
          text-center
          text-slate-500
          text-sm
          "
        >
          © 2026 NACOS STORE.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;