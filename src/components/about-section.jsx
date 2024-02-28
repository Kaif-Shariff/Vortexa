import React from "react";

const About = () => {
  return (
    <section id="about" className="w-auto h-screen px-4 md:px-0">
      <div
        className="md:w-[80%] md:h-[60%] mt-10 md:mt-20 mx-auto bg-cover bg-center rounded-md md:pt-24"
        style={{ backgroundImage: "url(assets/about.jpg)" }}
      >
        <div className="ml-[45%] backdrop-brightness-75 backdrop-blur-sm md:space-y-6 cursor-pointer rounded-md p-3 md:py-4 md:px-6 md:w-[50%] md:h-64">
          <div>
            <h1 className="font-bold text-sm md:text-4xl text-white">
              We Are Trusted Solutions Company With 08+ Years Of Experience.
            </h1>
          </div>
          <div>
            <p className="text-white text-xs md:text-base">
              Professional consulting for expert guidance, improving
              organizational performance.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[90%] h-72 mt-24 mx-1 md:mx-28 md:space-x-20 md:flex-row">
        <div className="flex flex-row w-80 h-56 rounded-md shadow-md my-4 md:my-0 md:w-96 md:h-48">
          <div className="absolute ml-[130px] rounded-full shadow-lg p-2 bg-white -mt-7 md:mt-[-50px] md:w-20 md:ml-[150px]">
            <img
              className="md:w-32"
              src="assets/people.svg"
              alt="Customer Oriented"
            />
          </div>

          <div
            id="text-container"
            className="text-center space-y-2 px-4 pb-6 md:pb-0"
          >
            <h1 className="font-bold text-xl mt-14 md:text-2xl">
              Customer Oriented
            </h1>
            <p className="text-xs md:text-sm">
              It is a philosophy that focuses on understanding and meeting the
              needs preference
            </p>
          </div>
        </div>
        <div className="flex flex-row w-80 h-56 rounded-md shadow-md  my-4 md:my-0 md:w-96 md:h-48">
          <div className="absolute ml-[130px] rounded-full shadow-lg p-2 bg-white -mt-7 md:mt-[-50px] md:w-20 md:ml-[150px]">
            <img
              className="md:w-32"
              src="assets/fast_delivery.png"
              alt="Fast"
            />
          </div>

          <div
            id="text-container"
            className="text-center space-y-2 px-4 pb-6 md:pb-0"
          >
            <h1 className="font-bold text-xl mt-14 md:text-2xl">
              Fast & Quality Results
            </h1>
            <p className="text-xs md:text-sm">
              Striving for both fast and high-quality results is a desirable
              goal for any business or project
            </p>
          </div>
        </div>
        <div className="flex flex-row w-80 h-56 rounded-md shadow-md  my-4 md:my-0 md:w-96 md:h-48">
          <div className="absolute ml-[130px] rounded-full shadow-lg p-2 bg-white -mt-7 md:mt-[-50px] md:w-20 md:ml-[150px]">
            <img
              className="md:w-32"
              src="assets/paper_plane.svg"
              alt="Success"
            />
          </div>

          <div
            id="text-container"
            className="text-center space-y-2 px-4 pb-6 md:pb-0"
          >
            <h1 className="font-bold text-xl mt-14 md:text-2xl">
              99.99% Success
            </h1>
            <p className="text-xs md:text-sm">
              This level of uptime indicates a minimal amount of downtime or
              service interruption
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
