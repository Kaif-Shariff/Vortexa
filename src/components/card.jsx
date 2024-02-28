import React from "react";

const Card = ({ imageUrl, cardTitle, cardDesc }) => {
  return (
    <>
      <div className="flex max-w-md m-2 lg:m-6 cursor-pointer shadow-lg rounded-lg overflow-hidden hover:translate-y-[-10px] transition-all duration-200 ease">
        <div
          className="bg-cover ml-8 mt-8 w-20 h-20  md:mt-5"
          style={{ backgroundImage: `url(/assets/${imageUrl})` }}
        ></div>
        <div className="w-2/3 p-4">
          <h1 className="text-gray-900 font-bold text-lg lg:text-2xl">
            {cardTitle}
          </h1>
          <p className="mt-2 text-gray-600 text-xss lg:text-sm">{cardDesc}</p>
          <div className="flex item-center justify-between mt-3"></div>
        </div>
      </div>
    </>
  );
};

export default Card;
