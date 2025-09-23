export function PreFooter() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="bg-[#0c1c3a] p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl w-full max-w-5xl mx-auto text-white mt-8 sm:mt-12 mb-8 sm:mb-12">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-4">
          Top Brands Deal
        </h3>
        <p className="text-center text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
          Up To <span className="text-yellow-400 font-semibold">60% off</span>{" "}
          on brands
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
          {[
            "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
            "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Levis-logo-quer.svg/250px-Levis-logo-quer.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Adidas_2022_logo.svg/250px-Adidas_2022_logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Puma_complete_logo.svg/330px-Puma_complete_logo.svg.png",
          ].map((logo, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-2 sm:p-3 flex items-center justify-center h-12 sm:h-14 lg:h-16 hover:shadow-lg transition-shadow"
            >
              <img
                src={logo || "/placeholder.svg"}
                alt="Brand Logo"
                className="h-6 sm:h-8 lg:h-10 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center text-center mb-8 sm:mb-12 mt-6 sm:mt-8">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0c1c3a] mb-2">
          Subscribe Newsletter
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-md">
          Subscribe to our email and get updates right in your inbox
        </p>
        <div className="flex items-center bg-gray-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-md w-full max-w-sm sm:max-w-md">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-500 text-sm sm:text-base"
          />
          <button className="ml-3 sm:ml-4 bg-yellow-400 hover:bg-yellow-500 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-colors shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 sm:w-5 sm:h-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10l9 4 9-9-9 13-3-4H3z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}