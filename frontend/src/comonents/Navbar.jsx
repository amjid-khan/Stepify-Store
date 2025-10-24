import React, { useState } from "react";
import { ShoppingCart, User, Search, Menu, X, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [cartCount] = useState(3);
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      authMode === "login" ? "Logging in..." : "Registering...",
      formData
    );
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-sm py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <p className="hidden sm:block">
              🚚 Free Shipping on Orders Over PKR 5000
            </p>
            <div className="flex gap-4 text-xs sm:text-sm">
              <span>📞 +92 300 1234567</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-xl shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Stepify
              </div>
            </div>

            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for shoes..."
                  className="w-full px-4 py-2.5 pl-12 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
                <Search
                  className="absolute left-4 top-3 text-gray-400"
                  size={20}
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden sm:flex p-2 hover:bg-blue-50 rounded-full transition-all">
                <Heart size={22} className="text-blue-600" />
              </button>

              <button className="relative p-2 hover:bg-blue-50 rounded-full transition-all">
                <ShoppingCart size={22} className="text-blue-600" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <User size={18} />
                <span className="font-medium">Sign In</span>
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-blue-50 rounded-lg transition-all"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 mt-4 pt-4 border-t border-gray-100">
            <Link
              to="/"
              className={`relative text-gray-700 hover:text-blue-600 font-medium transition-colors pb-1 ${
                isActive("/")
                  ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600"
                  : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/men"
              className={`relative text-gray-700 hover:text-blue-600 font-medium transition-colors pb-1 ${
                isActive("/men")
                  ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600"
                  : ""
              }`}
            >
              Men
            </Link>
            <Link
              to="/women"
              className={`relative text-gray-700 hover:text-blue-600 font-medium transition-colors pb-1 ${
                isActive("/women")
                  ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600"
                  : ""
              }`}
            >
              Women
            </Link>
            <Link
              to="/kids"
              className={`relative text-gray-700 hover:text-blue-600 font-medium transition-colors pb-1 ${
                isActive("/kids")
                  ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600"
                  : ""
              }`}
            >
              Kids
            </Link>
            <Link
              to="/sale"
              className={`relative text-gray-700 hover:text-blue-600 font-medium transition-colors pb-1 ${
                isActive("/sale")
                  ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600"
                  : ""
              }`}
            >
              Sale
            </Link>
            <Link
              to="/new-arrivals"
              className={`relative text-gray-700 hover:text-blue-600 font-medium transition-colors pb-1 ${
                isActive("/new-arrivals")
                  ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600"
                  : ""
              }`}
            >
              New Arrivals
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for shoes..."
                  className="w-full px-4 py-2.5 pl-12 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search
                  className="absolute left-4 top-3 text-gray-400"
                  size={20}
                />
              </div>
              <Link
                to="/"
                className={`block font-medium py-2 ${
                  isActive("/")
                    ? "text-blue-600 border-l-4 border-blue-600 pl-3"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Home
              </Link>
              <Link
                to="/men"
                className={`block font-medium py-2 ${
                  isActive("/men")
                    ? "text-blue-600 border-l-4 border-blue-600 pl-3"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Men
              </Link>
              <Link
                to="/women"
                className={`block font-medium py-2 ${
                  isActive("/women")
                    ? "text-blue-600 border-l-4 border-blue-600 pl-3"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Women
              </Link>
              <Link
                to="/kids"
                className={`block font-medium py-2 ${
                  isActive("/kids")
                    ? "text-blue-600 border-l-4 border-blue-600 pl-3"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Kids
              </Link>
              <Link
                to="/sale"
                className={`block font-medium py-2 ${
                  isActive("/sale")
                    ? "text-blue-600 border-l-4 border-blue-600 pl-3"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Sale
              </Link>
              <Link
                to="/new-arrivals"
                className={`block font-medium py-2 ${
                  isActive("/new-arrivals")
                    ? "text-blue-600 border-l-4 border-blue-600 pl-3"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                New Arrivals
              </Link>

              <button
                onClick={() => {
                  setIsAuthModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-lg hover:shadow-lg transition-all"
              >
                <User size={18} />
                <span className="font-medium">Sign In</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {isAuthModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[100] p-4 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative my-8">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl"></div>

            <button
              onClick={() => setIsAuthModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1.5 hover:bg-gray-100 rounded-full transition-all"
            >
              <X size={20} />
            </button>

            <div className="p-8 pt-10">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-xl shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
                {authMode === "login" ? "Welcome Back!" : "Join Stepify"}
              </h2>
              <p className="text-gray-500 text-center mb-6 text-sm">
                {authMode === "login"
                  ? "Sign in to continue shopping"
                  : "Create your account to get started"}
              </p>

              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 px-4 py-3 rounded-xl font-medium hover:bg-blue-50 hover:border-blue-200 transition-all mb-6"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </button>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">or</span>
                </div>
              </div>

              <div className="space-y-4">
                {authMode === "register" && (
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    />
                  </div>
                )}

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>

                {authMode === "register" && (
                  <div>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm Password"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    />
                  </div>
                )}

                {authMode === "login" && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="mr-2 w-4 h-4 accent-blue-600"
                      />
                      <span className="text-gray-600">Remember me</span>
                    </label>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      Forgot password?
                    </button>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  {authMode === "login" ? "Sign In" : "Create Account"}
                </button>
              </div>

              <div className="mt-6 text-center text-sm">
                <span className="text-gray-600">
                  {authMode === "login"
                    ? "Don't have an account? "
                    : "Already have an account? "}
                </span>
                <button
                  onClick={() => {
                    setAuthMode(authMode === "login" ? "register" : "login");
                    setFormData({
                      email: "",
                      password: "",
                      name: "",
                      confirmPassword: "",
                    });
                  }}
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  {authMode === "login" ? "Sign Up" : "Sign In"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;