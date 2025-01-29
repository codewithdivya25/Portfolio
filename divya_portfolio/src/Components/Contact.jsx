import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-[2rem] md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          divyabharti15023003@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          linkedin.com/in/divya-bharti-702831281
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          github.com/codewithdivya25
        </li>
      </ul>
    </div>
  );
};

export default Contact;