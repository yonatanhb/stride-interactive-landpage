import Link from "next/link";

export function Navigation() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="px-4 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex-1 flex justify-start">
          <Link href="/" className="font-['anta'] text-white font-bold text-xl">
            STRIDE
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex space-x-4 lg:space-x-6">
            <div className="group flex flex-col items-center">
              <Link
                href="#home"
                className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
              >
                Home
              </Link>
              <span className="block h-2 mt-0 text-2xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity leading-none">
                •
              </span>
            </div>
            <div className="group flex flex-col items-center">
              <Link
                href="#about"
                className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
              >
                About
              </Link>
              <span className="block h-2 mt-0 text-2xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity leading-none">
                •
              </span>
            </div>
            <div className="group flex flex-col items-center">
              <Link
                href="#contact"
                className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
              >
                Contact us
              </Link>
              <span className="block h-2 mt-0 text-2xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity leading-none">
                •
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </nav>
  );
}
