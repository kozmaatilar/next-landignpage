"use client"

import "./globals.css";
import "@/styles/css/style.css"
import "@/styles/css/animate.css"
import "@/styles/css/stripe-nav.css"
import "@/styles/css/search.css"
import Link from "next/link";
import React, { useState, useEffect } from "react"
import Image from "next/image";

import icon from '@/public/assets/logo-white.svg'

export default function RootLayout({ children }) {

  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const handleNavToggle = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);
    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Get scroll position
    const scrollY = window.scrollY;
    console.log(scrollY)
    // Set header position based on scroll position
    if (scrollY > 30 && !isHeaderFixed) {
      setIsHeaderFixed(true);
    } else if (scrollY <= 30) {
      setIsHeaderFixed(false);
    }
  };

  return (
    <html lang="en">
      <body>
        {/* header start */}
        <header className={`header ${isHeaderFixed ? "sticky" : ""} bg-transparent absolute top-0 left-0 z-40 w-full flex items-center transition`}>
          <div className="container">
            <div className="flex mx-[16px] items-center justify-between relative">
              <div className="px-4 w-60 max-w-full">
                <Link href="index.html" className="header-logo w-full block py-5">
                  <img src="/logo.svg" alt="logo" className="w-full" />
                </Link>
              </div>
              <div className="flex px-4 justify-between items-center w-full">
                <div>
                  <button id="navbarToggler" onClick={handleNavToggle} className="block absolute right-4 top-1/2 translate-y-[-50%] lg:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg">
                    <span className={`relative w-[30px] h-[2px] my-[6px] block bg-dark ${isNavVisible ? "top-[7px] transform rotate-[45deg]" : ""}`}></span>
                    <span className={`relative w-[30px] h-[2px] my-[6px] block bg-dark ${isNavVisible ? "opacity-0" : "}"}`}></span>
                    <span className={`relative w-[30px] h-[2px] my-[6px] block bg-dark ${isNavVisible ? "top-[-8px] transform rotate-[135deg]" : ""}`}></span>
                  </button>
                  <nav
                    id="navbarCollapse"
                    className={`absolute py-5 lg:py-0 lg:px-4 xl:px-6 bg-white lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full lg:block lg:static lg:shadow-none ${isNavVisible ? "" : "hidden"}`}
                  >
                    <ul className="blcok lg:flex">
                      <li className="relative group">
                        <Link href="#home" className="menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0"> Home </Link>
                      </li>
                      <li className="relative group">
                        <Link
                          href="#about"
                          className="menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"
                        >
                          Solutions
                        </Link>
                      </li>
                      <li className="relative group">
                        <Link
                          href="#features"
                          className="menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"
                        >
                          Pricing
                        </Link>
                      </li>
                      <li className="relative group">
                        <Link
                          href="#pricing"
                          className="menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"
                        >
                          Documentation
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="sm:flex justify-end hidden pr-16 lg:pr-0">
                  <Link
                    href="signup.html"
                    className="bg-[#006AFF] text-base font-bold text-white py-3 px-8 md:px-9 lg:px-8 xl:px-9 hover:shadow-signUp rounded-sm transition ease-in-out duration-300"
                    style={{ "borderRadius": "5px" }}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* header end */}

        {/* pages here */}
        {children}

        {/* footer start */}
        <footer>
          <div className="bg_light_black min-h-[520px] flex flex-col justify-end">
            <div className="container w-full footer_top_spacing">
              <div className="min-[768px]:hidden mb-4">
                <a href="#">
                  <Image src={icon} alt="foter_logo" width={500} height={102} className="fotr_logo" />
                </a>
              </div>
              <div className="flex flex-wrap">
                <div className="xl:w-1/7 mb-2 hidden min-[768px]:block d-none">
                  <a href="#">
                    <Image src={icon} alt="foter_logo" className="fotr_logo" />
                  </a>
                </div>
                <div className="xl:w-1/7 md:w-1/5 sm:w-1/3 xm:w-1/2 pl-4">
                  <p className="text-white mb-6 font-bold font_sm ff_inter">Solutions</p>
                  <ul className="list-unstyled">
                    <li className="mb-1 mb-sm-2 pb-1"><a href="#" className="text-white font_medium font_sm ff_inter text-decoration-none fotr_link">Property Search</a>
                    </li>
                    <li className="mb-1 mb-sm-2 pb-1"><a href="#" className="text-white font_medium font_sm ff_inter text-decoration-none fotr_link">Property Detail</a>
                    </li>
                    <li className="mb-1 mb-sm-2 pb-1"><a href="#" className="text-white font_medium font_sm ff_inter text-decoration-none fotr_link">Bulk Property Detail</a>
                    </li>
                  </ul>
                </div>
                <div className="xl:w-1/7 md:w-1/5 sm:w-1/3 xm:w-1/2 pl-4 mt-11">
                  <ul className="list-unstyled">
                    <li className="mb-1 mb-sm-2 pb-1"><a href="#" className="text-white font_medium font_sm ff_inter text-decoration-none fotr_link">Property Comps</a>
                    </li>
                    <li className="mb-1 mb-sm-2 pb-1"><a href="#" className="text-white font_medium font_sm ff_inter text-decoration-none fotr_link">Property Boundary</a>
                    </li>
                    <li className="mb-1 mb-sm-2 pb-1"><a href="#" className="text-white font_medium font_sm ff_inter text-decoration-none fotr_link">Autocomplete</a>
                    </li>
                  </ul>
                </div>
                <div className="xl:w-1/7 md:w-1/5 sm:w-1/3 xm:w-1/2 pl-4 mt-11">
                  <ul className="list-unstyled">
                    <li className="mb-1 mb-sm-2 pb-1"><a href="#" className="text-white font_medium font_sm ff_inter text-decoration-none fotr_link">CSV Generator </a>
                    </li>
                    <li className="mb-1 mb-sm-2 pb-1"><a href="#" className="text-white font_medium font_sm ff_inter text-decoration-none fotr_link">Skip Trace</a>
                    </li>
                    <li className="mb-1 mb-sm-2 pb-1"><a href="#" className="text-white font_medium font_sm ff_inter text-decoration-none fotr_link">Bulk Skip Trace</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bottom_border mt-6 mt-sm-5">
              <div className="container custom_container">
                <div className="flex flex-sm-row items-center py-4 py-sm-4 justify-between">
                  <p className="text-white mb-0 fw-light font_md opacity-[0.6] ff_inter">© <span id="current_year">2024</span>
                    RealEstateAPI.com. All rights reserved.</p>
                  <div className="mb-2 mb-sm-0 flex items-center">
                    <a target="_blank" className="text-decoration-none mr-6" href="#">
                      <img src="/assets/images/fotr_icon2.svg" alt="fotr_icon2" className="footer_icons" />
                    </a>
                    <a target="_blank" className="text-decoration-none mr-6" href="#">
                      <img src="/assets/images/fotr_icon3.svg?v=e5f1bd3bed" alt="fotr_icon3" className="footer_icons" />
                    </a>
                    <a target="_blank" className="text-decoration-none me-sm-4" href="#">
                      <img className="footer_icons" src="/assets/images/fotr_icon4.svg" alt="fotr_icon4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* footer end */}
      </body>
    </html >
  );
}
