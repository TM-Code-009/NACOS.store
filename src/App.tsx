// import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BiCreditCard, BiPhone } from "react-icons/bi";
import { FiAlertTriangle } from "react-icons/fi";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Success from "./pages/Success";

function App() {
  return (
     <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 flex items-center justify-center px-6">

      <div className="max-w-2xl w-full rounded-3xl border border-red-500/30 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">

        {/* Top Bar */}
        <div className="bg-red-600 py-5 text-center">
          <FiAlertTriangle className="mx-auto text-white mb-2" size={40} />
          <h1 className="text-3xl font-bold text-white">
            Website Temporarily Suspended
          </h1>
        </div>

        <div className="p-10 space-y-8">

          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              Outstanding Project Payment
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              This website has been temporarily suspended because the agreed
              payment for the development of this project has not yet been
              completed.
            </p>

            <p className="text-gray-400">
              Full access will be restored immediately after payment has been
              received.
            </p>
          </div>

          <div className="rounded-2xl bg-red-500/10 border border-red-500/30 p-6">

            <div className="flex items-center gap-3 text-red-400 mb-4">
              <BiCreditCard />
              <span className="font-semibold text-lg">
                Payment Required
              </span>
            </div>

            <p className="text-gray-300">
              Please contact the developer to complete the outstanding balance.
            </p>

          </div>

          <div className="flex justify-center">
            <a
              href="tel:+2348133372011"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl text-white font-semibold"
            >
              <BiPhone size={18} />
              Contact Developer
            </a>
          </div>

        </div>

      </div>

    </div>
    // <BrowserRouter>

    //   <Navbar />

    //   <Routes>
    //     <Route
    //       path="/"
    //       element={<Home />}
    //     />

    //     <Route
    //       path="/products"
    //       element={<Products />}
    //     />

    //     <Route
    //       path="/product/:id"
    //       element={
    //         <ProductDetails />
    //       }
    //     />

    //     <Route
    //       path="/cart"
    //       element={<Cart />}
    //     />

    //     <Route
    //       path="/checkout"
    //       element={<Checkout />}
    //     />

    //     <Route
    //       path="/login"
    //       element={<Login />}
    //     />

    //     <Route
    //       path="/register"
    //       element={<Register />}
    //     />

    //     <Route
    //       path="/success"
    //       element={<Success />}
    //     />
    //   </Routes>

    //   <Footer />

    // </BrowserRouter>
  );
}

export default App;