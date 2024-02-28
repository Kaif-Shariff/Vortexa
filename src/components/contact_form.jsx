import React from "react";
import InputBox from "./input-box";

const Contact = () => {
  return (
    <section
      id="contact"
      className="md:w-auto md:h-screen md:bg-white mt-28 md:mt-0"
    >
      <div className="flex flex-col px-4 py-8 md:w-[90%] mx-auto md:mt-10 md:p-14 h-64 ">
        <h1 className="text-2xl md:text-3xl font-bold">Connect With Us</h1>
        <p className="text-sm">
          Whether you have feedback, inquiries, or ideas to share, we're here to
          listen and assist.
        </p>
      </div>

      <form method="post" className=" mx-0 flex flex-col -mt-28 md:mx-28">
        <InputBox inputType={"text"} placeholderTxt={"Enter Name"} />
        <InputBox inputType={"email"} placeholderTxt={"Enter Email"} />
        <InputBox inputType={"text"} placeholderTxt={"Subject"} />
        <InputBox inputType={"number"} placeholderTxt={"Phone Number"} />
        <textarea
          className="ring-1 ring-[#E5E5E5] p-3 m-4 md:w-[617px] h-[148px] font-light resize-none rounded-sm"
          placeholder="Enter your message"
        ></textarea>
        <div className="flex mx-4 my-4">
          <input
            className="w-[296px] h-[45px] ring-2 ring-[#34AFF4] text-[#34AFF4] cursor-pointer font-semibold rounded-sm hover:text-white hover:bg-[#34AFF4]"
            type="reset"
            value="Reset"
          />
          <input
            className="w-[296px] h-[45px] ring-2 ring-[#34AFF4] text-[#34AFF4] cursor-pointer font-semibold ml-6  rounded-sm hover:text-white hover:bg-[#34AFF4]"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
