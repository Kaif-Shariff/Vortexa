import React from "react";
import Navbar from "../components/navbar";
import Btn from "../components/btn";
import CardSection from "../components/card-section";
import Footer from "../components/footer";
import Contact from "../components/contact_form";
import About from "../components/about-section";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* image slideshow */}
      <div className="relative">
        <img
          src="assets/img1.jpg"
          alt="Banner"
          className="w-full h-[650px] object-cover"
        />

        <div className="absolute  top-36 px-8 md:top-0 md:px-0 md:ml-20 md:w-1/2 md:mt-52 ">
          <h1 className=" text-white font-bold text-2xl lg:text-6xl">
            Empowering Your Business Growth
          </h1>
          <p className="text-white mt-4 text-sm lg:text-xl">
            Seamlessly enhance resource-intensive partnerships through top-tier
            specialization, expertly foster personalized customer interactions.
          </p>

          <Btn
            txt="Discover More"
            styles="mt-4 text-white bg-[#34AFF4] rounded-md px-6 py-3 border-2 text-xs font-semibold md:font-normal md:text-base  hover:bg-transparent border-[#34AFF4] transition-all duration-300 ease-in"
          />
        </div>
      </div>

      <CardSection />

      <About />

      <Contact />

      <Footer />
    </>
  );
};

export default Home;
