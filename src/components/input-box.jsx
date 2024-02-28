import React from "react";

const InputBox = ({ inputType, placeholderTxt }) => {
  return (
    <input
      className="ring-1 ring-[#E5E5E5] p-3 m-4 md:w-[617px] font-light rounded-sm"
      type={inputType}
      placeholder={placeholderTxt}
    />
  );
};

export default InputBox;
