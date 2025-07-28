import React from "react";
import img1 from "./Blue and White Online School Logo.png";
import { Link } from "react-router-dom";
const Navbar1 = () => {
    return (
        <nav className="w-[100%] h-[80px] bg-blue-200 md:px-[100px] px-[20px] flex justify-between py-4 box-border">
            <Link to={'/'} className="flex justify-between">
                <div className="flex gap-0 items-center cursor-pointer">
                    <h3 className="text-black font-bold text-2xl">SkillShare</h3>
                    <img src={img1} alt="Logo" className="w-16 h-8" />
                </div>
            </Link>
            <div className="flex box-border md-gap-4 gap-2 justify-center items-center">
                <Link to={'/signUp'} className="md:px-4 md:py-2 box-border text-black rounded-3xl text-xl hover:bg-gray-300 cursor-pointer">
                    Join Now
                </Link>
                <Link to={'/logIn'} className="px-4 py-2 box-border border-2 text-blue-800 border-blue-800 rounded-3xl text-xl hover:bg-blue-100 cursor-pointer">
                    Sign In
                </Link>
            </div>
        </nav>
    );
};
export default Navbar1;
