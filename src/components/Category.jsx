export function Category() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-[95%] sm:w-[90%] max-w-6xl mx-auto px-4">
      {/* Women's Card */}
      <div className="relative rounded-xl overflow-hidden h-64 sm:h-72 md:h-80 flex items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1iOOVmH-3GUICHaj6Jywf5coKsegTJLLwsA&s"
          alt="Women Fashion"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 p-4 sm:p-6 text-white">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
            Collection For Women
          </h3>
          <p className="text-base sm:text-lg mb-3">
            Up To <span className="font-bold text-yellow-400">40% Off</span>
          </p>
          <button className="bg-yellow-400 text-black px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full hover:bg-yellow-500 transition-colors">
            Shop Now
          </button>
        </div>
      </div>

      {/* Men's Card */}
      <div className="relative rounded-xl overflow-hidden h-64 sm:h-72 md:h-80 flex items-center">
        <img
          src="https://t3.ftcdn.net/jpg/02/68/77/20/360_F_268772018_c4jJBONUHzGqUF6m1lBOy44EMSEMb0e3.jpg"
          alt="Men Fashion"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 p-4 sm:p-6 text-white">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
            Collection For Men
          </h3>
          <p className="text-base sm:text-lg mb-3">
            Up To <span className="font-bold text-yellow-400">40% Off</span>
          </p>
          <button className="bg-yellow-400 text-black px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full hover:bg-yellow-500 transition-colors">
            Shop Now
          </button>
        </div>
      </div>

      {/* Baby & Kids Card - Text overlay inside image (left side) */}
      <div className="relative rounded-xl overflow-hidden h-64 sm:h-80 md:h-96 lg:col-span-2">
        {/* Image */}
        <img
          src="https://img.freepik.com/free-photo/shot-cute-baby-girl-looking-camera_329181-19580.jpg"
          alt="Baby Fashion"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text inside Image - Always Left */}
        <div className="relative z-10 h-full flex flex-col justify-center items-start p-6 md:p-12 text-left">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Baby & Kids Fashion
          </h3>
          <div className="mb-4">
            <p className="font-bold text-white text-base sm:text-lg md:text-xl">
              SALE!
            </p>

            <span className="font-bold text-yellow-400 text-[10px] sm:text-xs md:text-sm">
              07 to 14 February
            </span>
          </div>

          <button className="bg-green-700 text-white px-5 sm:px-7 py-2 text-sm sm:text-base rounded-full hover:bg-green-800 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
