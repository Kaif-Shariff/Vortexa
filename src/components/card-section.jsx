import React, { useState } from "react";
import Card from "./card";
import ServicesData from "../data/services.json";

const CardSection = () => {

  return (
    <div id="services">
      <div id="text-container" className="px-8 mt-10 lg:mx-10 space-y-3">
        <div className="lg:w-[40%]">
          <h1 className="font-bold text-xl lg:text-3xl ">
            Unleash Your Business Potential with Our Expert Services
          </h1>
        </div>

        <div className="lg:w-[40%]">
          <p className="text-xs text-[#787676] lg:text-sm ">
            With over 08 years of dedicated experience, we are committed to
            providing tailored solutions that drive growth and success. Our
            services encompass:
          </p>
        </div>
      </div>

      {/* Services section  */}
      <div className="flex flex-wrap mx-auto select-none mt-10 md:ml-4">
        {ServicesData
          ? ServicesData.map((service, index) => (
              <Card
                key={index}
                imageUrl={service.img}
                cardTitle={service.title}
                cardDesc={service.desc}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default CardSection;