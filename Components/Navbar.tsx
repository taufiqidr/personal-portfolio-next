import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    //
    <header className="sticky top-0 z-10 bg-gray-900 text-white">
      <div className="mx-auto flex items-center justify-between p-4 max-w-7xl">
        <Link
          className="text-white text-3xl flex items-center hover:text-blue-500"
          href="/"
        >
          @taufiqidr
        </Link>
        <button
          id="hamburger-button"
          className={`relative h-8 w-8 cursor-pointer text-3xl md:hidden ${
            mobileMenu ? "toggle-btn" : ""
          }`}
          onClick={() => {
            setMobileMenu((prev) => !prev);
          }}
        >
          <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
        </button>
        <nav className="items-center sm:flex hidden">
          <ul className="flex flex-row text-white items-center text-xl space-x-8">
            <li className="">
              <Link className="hover:text-blue-500" href="/about">
                About
              </Link>
            </li>
            <li className="">
              <Link className="hover:text-blue-500" href="/blog">
                Blog
              </Link>
            </li>
            <li className="">
              <Link className="hover:text-blue-500" href="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
        <section
          id="mobile-menu"
          className={`justify-content-center top-16 left-0 absolute w-full origin-top animate-open-menu flex-col backdrop-blur bg-black/30 text-5xl text-white ${
            mobileMenu ? "flex " : "hidden"
          }`}
          onClick={() => {
            setMobileMenu((prev) => !prev);
          }}
        >
          <nav
            className="flex min-h-screen flex-col items-center py-8 backdrop-blur-lg"
            aria-label="mobile"
          >
            <Link
              href="/about"
              className="w-full py-6 text-center hover:opacity-90"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Projects
            </Link>
          </nav>
        </section>
      </div>
    </header>
  );
}
export default Navbar;
