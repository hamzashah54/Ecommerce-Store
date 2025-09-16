export function Herosec() {
  return (
    <div className="relative w-full flex items-center justify-center text-center">
      {/* Background Image */}
      <img
        src="https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-117919.jpg"
        alt="Hero Background"
        className="w-full h-auto max-h-[90vh] object-contain"
      />

      {/* Overlay (agar zaroori ho) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-[#0c1c3a] drop-shadow-lg">
          Welcome to Our Store
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-[#0c1c3a] drop-shadow-md">
          Discover the latest trends in fashion & lifestyle
        </p>
      </div>
    </div>
  )
}