export default function Footer() {
  return (
    <footer className="w-full bg-[#0c1c3a] text-white py-8 sm:py-10 lg:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {/* Logo Section */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3 sm:mb-4">HS-Store</h2>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <i className="fa-brands fa-facebook text-lg sm:text-xl"></i>
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <i className="fa-brands fa-twitter text-lg sm:text-xl"></i>
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <i className="fa-brands fa-instagram text-lg sm:text-xl"></i>
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <i className="fa-brands fa-youtube text-lg sm:text-xl"></i>
            </a>
          </div>
        </div>

        {/* Support */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors text-sm sm:text-base">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors text-sm sm:text-base">
                Return & Exchange
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors text-sm sm:text-base">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors text-sm sm:text-base">
                Size Chart
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors text-sm sm:text-base">
                Cookies Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors text-sm sm:text-base">
                Terms & Condition
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors text-sm sm:text-base">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors text-sm sm:text-base">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors text-sm sm:text-base">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact</h3>
          <p className="text-xs sm:text-sm mb-3">
            <i className="fa-solid fa-location-dot mr-2"></i>
            Professional Services Hub <br />
            123 Main Street, Suite 456 <br />
            New York, NY 10001 USA
          </p>
          <p className="text-xs sm:text-sm mb-4">
            <i className="fa-solid fa-envelope mr-2"></i>
            help@HS-Store.com
          </p>

          <div className="flex justify-center sm:justify-start space-x-2 sm:space-x-4">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-8 sm:h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-8 sm:h-10"
            />
          </div>
        </div>
      </div>

      <div className="text-center text-xs sm:text-sm text-gray-400 mt-8 sm:mt-10 border-t border-gray-700 pt-4 sm:pt-6">
        © 2025 E-commerce | All rights reserved
      </div>
    </footer>
  )
}