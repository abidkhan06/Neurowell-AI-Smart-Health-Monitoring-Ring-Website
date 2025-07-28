import React from "react";
import img1 from "./Blue and White Online School Logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-[100] bg-blue-200 flex justify-center">
      <div className="md:p-3 w-[100%] flex flex-col items-center py-4">
        <Link to={'/'} className="flex gap-0 items-center cursor-pointer">
          <h3 className="text-black font-bold text-2xl">SkillShare</h3>
          <img src={img1} alt="Logo" className="w-16 h-8" />
        </Link>
        <div className="text-sm mt-2">
          © 2025 SkillShareCampus. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
