import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ setIsLoggedIn, setUser }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ username: "", password: "" });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = { username: "", password: "" };

    if (!formData.username) {
      nextErrors.username = "Username is required";
    } else if (formData.username.length < 3 || formData.username.length > 8) {
      nextErrors.username = "Username must be between 3 and 8 characters";
    }

    if (!formData.password) {
      nextErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      nextErrors.password = "Password must be at least 6 characters";
    }

    setErrors(nextErrors);

    if (!nextErrors.username && !nextErrors.password) {
      setIsLoggedIn(true);
      setUser(formData.username);
      navigate("/");
    }
  }

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
          <div className="w-full max-w-sm sm:max-w-md">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-xl rounded-xl px-6 sm:px-8 py-8 sm:py-10"
            >
              {/* Form Header */}
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#0c1c3a]">
                  Sign In
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Sign in to continue shopping
                </p>
              </div>

              {/* Username */}
              <div className="mb-4 sm:mb-6">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c1c3a] focus:border-transparent text-sm sm:text-base"
                />
                {errors.username && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.username}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="mb-4 sm:mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-10 sm:pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c1c3a] focus:border-transparent text-sm sm:text-base"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" />
                    ) : (
                      <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Forgot Password */}
              <div className="text-right mb-4 sm:mb-6">
                <a
                  href="#"
                  className="text-xs sm:text-sm text-[#0c1c3a] hover:opacity-80 transition-opacity"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full text-white font-semibold py-2.5 sm:py-3 px-4 rounded-lg bg-[#0c1c3a] hover:bg-opacity-90 transition-colors text-sm sm:text-base"
              >
                Sign In
              </button>

              {/* Social Login */}
              <div className="mt-6 sm:mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-xs sm:text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 flex justify-center space-x-4">
                <button
                  type="button"
                  className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full hover:bg-gray-50 transition-colors border border-gray-200"
                >
                  <FaFacebook className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full hover:bg-gray-50 transition-colors border border-gray-200"
                >
                  <FcGoogle className="h-6 w-6 sm:h-8 sm:w-8" />
                </button>
              </div>

              {/* Sign Up */}
              <p className="text-center text-xs sm:text-sm text-gray-600 mt-6 sm:mt-8">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-[#0c1c3a] hover:opacity-80 transition-opacity"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}