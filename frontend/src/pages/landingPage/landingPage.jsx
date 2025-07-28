import React from "react";
import { Link } from "react-router-dom";
import GoogleLoginComp from "../../components/GoogleLogin/googleLoginComp";
const LandingPage = () => {
    return (
        <div className="bg-gray-100 my-4 py-[120px] md:pl-[120px] px- md:flex justify-between">
            <div className="md:w-[40%]">
                <div className="text-4xl mx-auto text-blue-500">
                    Begin Your Journey at SkillShareCampus
                </div>
                <div className="my-3 flex mx-auto mt-[20px] bg-white gap-2 rounded-3xl w-[70%] text-black justify-center items-center cursor-pointer ">
                    <GoogleLoginComp/>
                </div>
                <Link to={'/LogIn'}className="flex mx-auto mt-[20px] py-2 px-2 bg-white gap-2 rounded-3xl items-center w-[70%] justify-center text-black hover:bg-blue-200 border-2 cursor-pointer ">
                    Sign in email
                </Link>
                <div className="mx-auto w-[70%] mt-6 mb-4 text-sm text-center leading-relaxed">
                    By clicking Continue to join or sign in, you agree to
                    <span className="text-blue-600 cursor-pointer hover:underline"> SkillShareCampus's User Agreement</span>,
                    <span className="text-blue-500 cursor-pointer hover:underline"> Privacy Policy</span>, and
                    <span className="text-blue-500 cursor-pointer hover:underline"> Cookie Policy</span>.
                </div>

                <Link
                    to="/signUp"
                    className="mx-auto w-[70%] text-center text-lg leading-relaxed block mt-4 mb-4"
                >
                    New to SkillShareCampus?
                    <span className="text-blue-600 cursor-pointer hover:underline"> Join now</span>
                </Link>

            </div>
            <div className="md:w-[50%] h-120">
                <img
                    alt="image"
                    className="w-full h-full"
                    src={
                        "https://www.ibusinessinstitute.org/blog/wp-content/uploads/2022/05/pgdm-college-in-uttar-pardesh.png"
                    }
                ></img>
            </div>
        </div>
    );
};

export default LandingPage;
