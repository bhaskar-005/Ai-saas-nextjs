import React from "react";
import Link from "next/link";

const Navbar = () => {
  const divItems = [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "History", href: "/history" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
  ];
  return (
    <div className="shadow-sm w-full">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <span className="block text-purple-600 ">
            <span className="sr-only">Home</span>
            AI Pdf
          </span>
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <div aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {divItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <span className="text-gray-700 transition hover:text-gray-900">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link href="/login">
                <span className="block rounded-md bg-purple-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700">
                  Login
                </span>
              </Link>

              <Link href="/register">
                <span className="hidden rounded-md bg-purple-100 px-5 py-2.5 text-sm font-medium text-purple-600 transition hover:text-purple-500 sm:block">
                  Register
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
