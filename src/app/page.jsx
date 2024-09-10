"use client"
import Link from "next/link";
import { useState, useEffect, useRef } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import Image from "next/image";
import AccordionItem from "@/components/accordion/accordionItem";
import {
  setting, svgPS, header_img, svgPD, svgPC, svgPB, svgST, svgAA, svgCG, svgAV, svgPDB, svgSTB,
  svgPerformance, svgEnablement, svgDevSupport, svgBudget, svgArrow
} from '@/utils/image'

import { accordionData } from "@/utils/accordion";


export default function Home() {
  //selected accordion 
  const [activeAccordion, setActiveAccordion] = useState(accordionData[0].id);
  const [visibleContent, setVisibleContent] = useState({ [accordionData[0].id]: true }); // Initialize with the ID of the first accordion item
  const intervalRef = useRef();

  //Time control
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveAccordion(prevActive => {
        const currentIndex = accordionData.findIndex(item => item.id === prevActive);
        const nextIndex = (currentIndex + 1) % accordionData.length;
        const nextAccordionId = accordionData[nextIndex].id;
        setVisibleContent({ [nextAccordionId]: true }); // Show content of the newly activated accordion
        return nextAccordionId;
      });
    }, 9000); // Change every 10 seconds
  };

  //Animation
  useEffect(() => {
    AOS.init({
      duration: 250, // Animation duration
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, [activeAccordion]);

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  //Click the Tag
  const handleAccordionClick = (id) => {
    setActiveAccordion(id);
    setVisibleContent({ [id]: true });
  };


  //Click the Arrow button
  const handleArrowClick = (e, id) => {
    e.stopPropagation();
    setActiveAccordion(prevActive => {
      if (prevActive === id) {
        return null;
      } else {
        setVisibleContent(prevVisible => ({
          ...Object.fromEntries(accordionData.map(item => [item.id, false])),
          [id]: true
        }));
        return id;
      }
    });
  };

  const activeAccordionItem = accordionData.find(item => item.id === activeAccordion) || accordionData[0];

  return (
    <>
      {/* Hero section start */}
      <section id="home" className="relative overflow-hidden z-10 pt-[120px] pb-16 md:pt-[150px] xl:pt-[180px]" data-aos="fade-up">
        <div className="container">
          <div className="flex flex-wrap mx-[-16px]">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[720px] text-center wow fadeInUp" data-wow-delay=".2s">
                <h1 className="text-black font-bold text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-tight md:leading-tight mb-5 font-sans">
                  Build Intelligent PropTech:<br /><b className="text-gradient">Data-Driven Real Estate API</b>
                </h1>
                <p className="font-medium text-lg md:text-xl leading-relaxed md:leading-relaxed text-black opacity-90 mb-12 font-mono">
                  Advanced APIs for Visionary PropTech Leaders. Comprehensive Property Data for Teams Set to Disrupt the Industry.
                </p>
                <div className="flex items-center justify-center">

                  <Link href="#features" className="menu-scroll text-base font-semibold text-white bg-zillow-blue hover:bg-zillow-dark-blue py-4 px-7 hover:shadow-signUp mx-2 rounded-sm transition ease-in-out duration-300 inline-flex items-center" style={{ 'borderRadius': '5px' }}>
                    <span>Get Started</span>
                  </Link>

                </div>
              </div>
              <div className="text-center">
                <div className="mx-auto mt-10 lg:mt-14 relative z-20 wow fadeInUp inline-block bg-white shadow-image" data-wow-delay=".2s">
                  <Image src={header_img} alt="image" className="w-full max-w-full mx-auto" />
                  <div className="absolute right-[-16px] bottom-[-16px] z-[-1]">
                    <svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M49 98C76.0572 98 98 76.0618 98 49C98 21.9382 76.0572 0 49 0C21.9428 0 0 21.9382 0 49C0 76.0618 21.9428 98 49 98Z"
                        fill="url(#paint0_radial_77:31)"
                      />
                      <defs>
                        <radialGradient id="paint0_radial_77:31" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(49) rotate(90) scale(98)">
                          <stop stopColor="white" />
                          <stop offset="0.569" stopColor="#F0F4FD" />
                          <stop offset="0.993" stopColor="#D9E0F0" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-24 z-[-1]">
          <svg width="111" height="176" viewBox="0 0 111 176" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M87.9999 176C136.614 176 176 136.602 176 88C176 39.3978 136.614 0 87.9999 0C39.4096 0 -0.00012207 39.3978 -0.00012207 88C-0.00012207 136.602 39.4096 176 87.9999 176Z"
              fill="url(#paint0_radial_2:29)"
            />
            <defs>
              <radialGradient id="paint0_radial_2:29" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(87.9999) rotate(90) scale(176)">
                <stop stopColor="white" />
                <stop offset="0.569" stopColor="#F0F4FD" />
                <stop offset="0.993" stopColor="#D9E0F0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute left-0 bottom-0 z-[-1]">

        </div>
      </section>
      {/* Hero section end */}

      <section className="min-[768px]:pt-12 relative" data-aos="fade-up">
        <div className="common_wobble wobble_effect9"></div>
        <div className="xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] text-center m-auto py-12 xl:mb-12 flex flex-col items-center px-[20px] font-sans">
          <Image src={setting} alt="setting_icon" className="rotate" />
          <p className="font_7xl l_height text_grey ff_faktum m-auto text_grey font-bold w_719px pb-4 pb-lg-5 mb-xxl-5 relative z-2">Develop products and
            <span className="fw-semibold text_gradient"> features that will wow your customers.</span>
          </p>
          <div className="m-auto flex flex-col lg:flex-row justify-center w-full relative">
            <div className="m-auto order-2 mt-6 lg:mt-0 lg:order-1 lg:w-[41.667%] md:w-[83.333%] px-[12px]">
              <div>
                {/*Accordion List */}
                {accordionData.map(item => (
                  <AccordionItem
                    key={item.id}
                    item={item}
                    activeAccordion={activeAccordion}
                    visibleContent={visibleContent}
                    handleAccordionClick={handleAccordionClick}
                    handleArrowClick={handleArrowClick}
                  />
                ))}
              </div>
            </div>
            <div className="m-auto order-1 lg:order-2 lg:w-[58.333%] md:w-[83.333%] px-[12px]">
              <div className="develop_img ms-auto">
                <Image id="img_tag" className={`w-full ${activeAccordion ? '' : 'opacity-100'}`} src={activeAccordionItem.imgSrc} alt="develop_products" style={{ visibility: 'visible' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-md-5 mt-lg-0" data-aos="fade-up">
        <div className="container custom_container">
          <h1 className="text-center mb-0 font_8xl font-bold ff_faktum text_grey leading-[91%]">More Than
            <span className="text_gradient block text-center">Just An API</span>
          </h1>
          <p className="ff_inter font-normal text_grey text-center font_2xl fully_spacing lg:my-6 my-4">A FULLY INTEGRATED SYSTEM</p>
          <p className="ff_inter font-normal max-w-[1118px] m-auto text_grey text-center font_2xl">REAPI was
            purpose built for application developers like you. Our family of APIs does more than just fetch data. We've done a lot of work under the hood to ensure your app can retrieve and manipulate data in real-time, without sacrificing performance. We obsess over the gnarly details of cleaning, normalizing and transforming data so you can create engaging apps that users love.
          </p>
          <p className="pt-2 xl:pt-6 xl:mb-6 pb-12 ff_inter font-normal max-w-[1118px] m-auto text_grey text-center font_2xl">
            Choose from a comprehensive offering of endpoints or ask our team to build you a custom endpoint with the complexity your app needs to set it apart from the competition.</p>
          <h5 className="ff_faktum text_grey font-bold font_5xl text-center xl:pb-6 xl:mb-2 lg:pt-2 md:pt-12 sm:pt-6 pb-6 mb-0">
            Data Fetching APIs
          </h5>
          <div className="flex flex-wrap justify-around w-full sm:mb-12 mb-6 px-[12px]">
            <div className="xl:w-1/6 md:w-2/6 w-1/2 px-[12px] flex justify-center">
              <div className="text-center">
                <Link href="#" className="text-decoration-none">
                  <Image className="max_w_88" src={svgPS} alt="ps" data-xblocker="passed" />
                  <p className="font-bold font_2xl fs_16 ff_inter text_grey mt-5 ">Property <br className="d-xxl-none"></br>Search</p>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/6 md:w-2/6 w-1/2 px-[12px] flex justify-center">
              <div className="text-center">
                <Link href="#" className="text-decoration-none">
                  <Image className="max_w_88" src={svgPD} alt="ps" data-xblocker="passed" />
                  <p className="font-bold font_2xl fs_16 ff_inter text_grey mt-4">Property <br className="d-xxl-none"></br>Detail</p>
                </Link>
              </div>
            </div>
            <div className="lg:pt-0 pt-2 xl:w-1/6 md:w-1/3 w-1/2 px-[12px] flex justify-center">
              <div className="text-center">
                <Link href="#" className="text-decoration-none">
                  <Image className="max_w_88" src={svgPC} alt="ps" data-xblocker="passed" />
                  <p className="font-bold font_2xl fs_16 ff_inter text_grey mt-5">Property <br className="d-xxl-none"></br>Comps</p>
                </Link>
              </div>
            </div>
            <div className="lg:pt-0 pt-2 xl:w-1/6 md:w-1/3 w-1/2 px-[12px] flex justify-center">
              <div className="text-center">
                <Link href="#" className="text-decoration-none">
                  <Image className="max_w_88" src={svgPB} alt="ps" data-xblocker="passed" />
                  <p className="font-bold font_2xl fs_16 ff_inter text_grey mt-5 ">Parcel <br className="d-xxl-none"></br>Boundary</p>
                </Link>
              </div>
            </div>
            <div className="lg:pt-0 pt-2 xl:w-1/6 md:w-1/3 w-1/2 px-[12px] flex justify-center">
              <div className="text-center">
                <Link href="#" className="text-decoration-none">
                  <Image className="max_w_88" src={svgST} alt="ps" data-xblocker="passed" />
                  <p className="font-bold font_2xl fs_16 ff_inter text_grey mt-5 ">Skip <br className="d-xxl-none"></br>Trace</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex mx-[12px] xl:flex-row flex-col w-full">
            <div className="xl:w-7/12 md:w-full mb-12">
              <div className="flex mx-[12px] flex-col">
                <div>
                  <h5 className="ff_faktum text_grey font-bold font_5xl text-center xl:pb-12 pb-6 mb-0">Service APIs</h5>
                </div>
                <div className="flex flex-wrap justify-around">
                  <div className="w-1/2 md:w-1/3 sm:w-1/2 ">
                    <div className="text-center">
                      <Link href="#" className="text-decoration-noneinline-block">
                        <Image className="max_w_88 inline-block" src={svgAA} alt="ps" data-xblocker="passed" />
                        <p className="font-bold font_2xl fs_16 ff_inter text_grey mt-4  ">Address <br className="d-xxl-none" />Auto-complete</p>
                      </Link>
                    </div>
                  </div>
                  <div className="w-1/2 md:w-1/3 sm:w-1/2">
                    <div className="text-center">
                      <Link href="#" className="text-decoration-none inline-block">
                        <Image className="max_w_88 inline-block" src={svgCG} alt="ps" data-xblocker="passed" />
                        <p className="font-bold font_2xl fs_16 ff_inter text_grey mt-4  ">CSV <br className="d-xxl-none" />Generator</p>
                      </Link>
                    </div>
                  </div>
                  <div className="pt-2 sm:pt-0 md:w-1/3 justify-center">
                    <div className="text-center">
                      <Link href="#" className="text-decoration-none inline-block">
                        <Image className="max_w_88 inline-block" src={svgAV} alt="ps" data-xblocker="passed" />
                        <p className="font-bold font_2xl fs_16 ff_inter text_grey mt-4  ">Address <br className="d-xxl-none" />Verification</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-5/12 md:w-full xl:mt-0 mt-10 mb-12">
              <div className="flex mx-[12px] flex-col">
                <div>
                  <h5 className="ff_faktum text_grey font-bold font_5xl text-center xl:pb-12 pb-6 mb-0">
                    Bulk Processing APIs
                  </h5>
                </div>
                <div className="flex justify-center">
                  <div className="flex w-1/2 md:w-6/12">
                    <div className="text-center">
                      <Link href="#" className="text-decoration-none">
                        <Image className="max_w_88" src={svgPDB} alt="ps" data-xblocker="passed" />
                        <p className="font-bold font_2xl fs_16 ff_inter text_grey mt-4">Property <br className="d-xxl-none" /> Detail Bulk</p>
                      </Link>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="text-center">
                      <Link href="#" className="text-decoration-none">
                        <Image className="max_w_88" src={svgSTB} alt="ps" data-xblocker="passed" />
                        <p className="font-bold font_2xl fs_16 ff_inter text_grey mt-4 ">Skip <br className="d-xxl-none" />Trace Bulk</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up">
        <div className="container xl:py:12 md:text-left pb-12 xl:max-w-[1200px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px]">
          <p className="ff_faktum font-bold font_4xl xl:mt-12 text_gradient mb-0 md:text-left text-center">Why REAPI<span className="ff_inter">?</span></p>
          <p className="ff_faktum font-bold font_7xl text_grey mb-6 leading-[62px] pb-4 md:text-left text-center">Do more. Build faster. Spend less.</p>
          <div className="flex flex-wrap justify-between md:text-left text-center mx-[12px] pb-16">
            <div className="lg:w-1/4 sm:w-1/2">
              <div className="md:text-left text-center">
                <Image src={svgPerformance} alt="performance" className="pb-4 inline-block" />
                <p className="font-bold ff_inter font_2xl fs_18 text_grey mb-2">Enterprise Grade Performance
                </p>
                <p className="font-normal ff_inter font_lg fs_16 text_grey pt-1 md:pr-12">Retrieve tens of thousands of records with sub 1 second response times. 99.9% uptime.
                </p>
              </div>
            </div>
            <div className="sm:pt-0 pt-6 lg:w-1/4 sm:w-1/2">
              <div className="md:text-left text-center">
                <Image src={svgEnablement} alt="enablement" className="pb-4 inline-block" />
                <p className="font-bold ff_inter font_2xl text_grey fs_18 mb-2">A.I. enablement
                </p>
                <p className="font-normal ff_inter font_lg fs_16 text_grey pt-1 md:pr-12">When you're ready to leverage A.I. for deeper analysis, train your models against our datasets to derive your own proprietary insights.
                </p>
              </div>
            </div>
            <div className="lg:pt-0 pt-6 lg:w-1/4 sm:w-1/2">
              <div className="md:text-left text-center">
                <Image src={svgDevSupport} alt="developer_support" className="pb-4 inline-block" />
                <p className="font-bold ff_inter font_2xl text_grey fs_18 mb-2 pe-3">Developer Support
                </p>
                <p className="font-normal ff_inter font_lg fs_16 text_grey pt-1 md:pr-12">Need help thinking through your architecture? Hit us up directly. Or pop into our Discord. We love to nerd out on this stuff.
                </p>
              </div>
            </div>
            <div className="lg:pt-0 pt-6 lg:w-1/4 sm:w-1/2">
              <div className="md:text-left text-center">
                <Image src={svgBudget} alt="Budget" className="pb-4 inline-block" />
                <p className="font-bold ff_inter font_2xl text_grey fs_18 mb-2">Stretch your budget
                </p>
                <p className="fs_16 font-normal pe-md-5 ff_inter font_lg text_grey pt-1 md:pr-12">Half the price and 10x as powerful as any solution from a big box data provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer_top_box relative mb-md-0 mt-md-5 mt-lg-0 mt-xl-5 pt-xxl-3" data-aos="fade-up">
        <div className="container custom_container">
          <div className="footer_index_bg p-6 px-sm-0 py-sm-5">
            <div className="row justify-center">
              <div className="col-md-11 col-lg-9 text-center">
                <h2 className="font-bold text-white mb-4 mb-sm-4 font_7xl ff_faktum">
                  Ready to <br /> Get Started
                </h2>
                <p className="fw-normal text-white mb-4 mb-sm-4 pb-md-2 font_2xl ff_inter">Our client success team will meet face - to - face with you <br className="d-none d-lg-block" />every step of the way from onboarding to implementation.</p>
                <Link href="#" target="_blank" className="inline-block text-decoration-none bg-white search_talk_btn purple_talk_btn">
                  <div className="flex w-full h-full items-center">
                    <span className="font-bold inline-block font_md ff_inter mr-4 pr-1 text-decoration-none text-color-purple">Talk To a Data Expert</span>
                    <span className="inline-block">
                      <Image src={svgArrow} alt="Arrow" className="w-ful" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
