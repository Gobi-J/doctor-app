import React from "react";

import heroimg1 from "../assets/images/hero-img01.jpg";
import heroimg2 from "../assets/images/hero-img02.jpg";
import heroimg3 from "../assets/images/hero-img03.jpg";
import heroimg4 from "../assets/images/hero-img04.jpg";
import heroimg5 from "../assets/images/hero-img05.jpg";
import heroimg6 from "../assets/images/hero-img06.jpg";
import icon1 from "../assets/images/icon01.png";
import icon2 from "../assets/images/icon02.png";
import icon3 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import videoImg from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqIcon from "../assets/images/faq-img.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import About from "../components/About/About";
import ServiceList from "../components/Service/ServiceList";
import FaqList from "../components/FaqList/FaqList";
import DoctorList from "../components/Doctors/DoctorList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <section className="hero__section pt-7 2xl:h-[800px] sm:pt-[10px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[3.5vw]  md:leading-[70px] ">
                  We help patient live a healthy, longer life.
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Architecto debitis illo quasi quibusdam corporis veniam quos
                  esse soluta incidunt, amet, porro obcaecati sequi quisquam
                  perferendis quae. Impedit veniam quis beatae.
                </p>
                <button className="btn">Request an Appointment</button>
              </div>
              {/*        hero counter  */}
              <div className="mt-[30px] flex flex-col md:flex-row md:items-center gap-5 md:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    10+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    20+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Location </p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[0px] justify-evenly">
              <div className="w-[45%]">
                <img src={heroimg3} className="w-[100%] aspect-square object-cover rounded-lg border" />
                <img src={heroimg6} alt="" className="w-[90%] mt-[30px] aspect-square object-cover rounded-lg lg:ml-[30px]" />
              </div>
              <div className="mt-[40px] w-[45%]">
                <img src={heroimg5} alt="" className="w-[90%] mb-[30px] aspect-square object-cover rounded-lg" />
                <img src={heroimg4} alt="" className="w-full aspect-square object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para text-center">
              World class care for everyone. Our health System offers unmatched,
              expert health care
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]
      mt-[30px] lg:mt-[55px]"
          >
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon1} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[20px] leading-9 text-headingColor font-[700] text-center">
                  Find a doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World class care for everyone. Our health System offers
                  unmatched, expert health care
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid  border-[#181A1E]  mt-[30px] mx-auto flex items-center
           justify-center group hover:bg-red-600 hover:border-none duration-200"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon2} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[20px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World class care for everyone. Our health System offers
                  unmatched, expert health care
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid  border-[#181A1E]  mt-[30px] mx-auto flex items-center
           justify-center group hover:bg-red-600 hover:border-none duration-200"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon3} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[20px] leading-9 text-headingColor font-[700] text-center">
                  Book an Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World class care for everyone. Our health System offers
                  unmatched, expert health care
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid  border-[#181A1E]  mt-[30px] mx-auto flex items-center
           justify-center group hover:bg-red-600 hover:border-none duration-200"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto ">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="text__para text-center">
              {" "}
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row text-center">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br /> anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1.Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2. Search for your physician here ,and contact their office.
                </li>
                <li className="text__para">
                  3. View our physicians who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn more</button>
              </Link>
            </div>

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tues,24{" "}
                    </p>
                    <p className="text-[10px] loading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00{" "}
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoImg} alt="Video Icon" />
                  </span>
                </div>
                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[10px] lg:text-[12px] lg:leading-6 text-irisBlueColor font-[500] mt-2 lg:mt-2 rounded-full">
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="Avatar_Icon" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Wayne Collins
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our great doctors</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block ">
              <img src={faqIcon} />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions by our beloved clients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our clients say?</h2>

            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Home;
