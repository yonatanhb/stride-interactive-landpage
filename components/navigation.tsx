import Link from "next/link";

export function Navigation() {
  return (
    <nav className="sticky top-0 w-[1440px] z-50 bg-black/80 backdrop-blur-sm">
      <div className="px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          STRIDE
        </Link>
        <div className="flex space-x-6">
          <Link
            href="/"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-gray-300 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
}
