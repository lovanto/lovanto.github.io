import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import useLocalStorage from "use-local-storage";

import Link from "./link";
import LinkMobile from "./link_mobile";
import logo from "../images/logo.svg";
import { Outlet } from "react-router-dom";
import OrangeShard from "./orange_shard";
import BlueShard from "./blue_shard";
import Particle from "../components/particles";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Project", href: "/project" },
  // { name: "Contact", href: "/contact" },
  { name: "Coming Soon", href: "/soon" },
];

let background = null;

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [colorChange, setColorChange] = useState(false);
  const [isDarkMode, setDarkMode] = useLocalStorage(false);

  if (background === null && !isDarkMode) {
    background = (
      <div>
        <OrangeShard />
        <BlueShard />
      </div>
    );
  } else if (isDarkMode === true) {
    background = <Particle />;
  }

  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
    if (!isDarkMode) {
      background = <Particle />;
    } else {
      background = (
        <div>
          <OrangeShard />
          <BlueShard />
        </div>
      );
    }
  };

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 ${isDarkMode} ${colorChange ? "bg-white" : ""}`}>
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Lovanto</span>
              <img className="h-8 w-auto logo-rotate" src={logo} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-600"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <div
                key={item.name}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${isDarkMode ? "hover:bg-gray-800" : "hover:bg-transparent"}`}
              >
                <Link name={item.name} href={item.href} />
              </div>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${isDarkMode ? "hover:bg-gray-800" : ""}`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <SunIcon className="h-6 w-6 text-gray-300 hover:text-white" />
              ) : (
                <MoonIcon className="h-6 w-6 text-gray-700 hover:text-black" />
              )}
            </button>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel
            className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 
            sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${isDarkMode} ${colorChange ? "bg-white" : ""}`}
          >
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                {/* <img className="h-8 w-auto logo-rotate" src={logo} alt="" /> */}
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-600 font-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flex flex-col h-full">
              <div className="-my-6 divide-y divide-gray-500/10 flex-1">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      className={`px-4 py-2 rounded-lg transition-all duration-200 ${isDarkMode ? "hover:bg-gray-800" : "hover:bg-transparent"}`}
                    >
                      <LinkMobile name={item.name} href={item.href} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="py-6 border-t border-gray-500/50 mt-auto">
                <div className="flex justify-center">
                  <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-lg transition-all duration-200 ${isDarkMode ? "hover:bg-gray-800" : ""}`}
                    aria-label="Toggle dark mode"
                  >
                    {isDarkMode ? (
                      <SunIcon className="h-6 w-6 text-gray-300 hover:text-white" />
                    ) : (
                      <MoonIcon className="h-6 w-6 text-gray-700 hover:text-black" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <Outlet context={[isDarkMode, background]} />
    </>
  );
}

export default Navigation;
