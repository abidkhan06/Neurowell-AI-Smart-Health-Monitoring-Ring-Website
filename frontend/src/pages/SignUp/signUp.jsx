import React from 'react'
import { Link } from 'react-router-dom';
import GoogleLoginComp from '../../components/GoogleLogin/googleLoginComp';
const SignUp = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='text-3xl my-8 text-black'>
                Unlock Your Potential, One Skill at a Time
            </div>
            <div className='w-[90%] sm:w-[360px] md:w-[28%] mx-auto mt-6 bg-white border border-gray-200 shadow-lg rounded-lg p-10'>

                <div className='flex flex-col gap-[2px]'>
                    <label htmlFor="f_name" className='text-sm'>Full Name</label>
                    <input type="text" className='w-full text-sm border rounded px-2 py-1' placeholder='Enter your full name' />
                </div>

                <div className='flex flex-col gap-[2px] mt-3'>
                    <label htmlFor="email" className='text-sm'>Email</label>
                    <input type="text" className='w-full text-sm border rounded px-2 py-1' placeholder='Enter your University email' />
                </div>

                <div className='flex flex-col gap-[2px] mt-3'>
                    <label htmlFor="password" className='text-sm'>Password</label>
                    <input type="password" className='w-full text-sm border rounded px-2 py-1' placeholder='Enter your password' />
                </div>

                <div className='flex flex-col gap-[2px] mt-3'>
                    <label htmlFor="confirmPassword" className='text-sm'>Confirm Password</label>
                    <input type="password" className='w-full text-sm border rounded px-2 py-1' placeholder='Re-enter your password' />
                </div>

                <div className='w-full bg-blue-700 hover:bg-blue-800 text-white py-2 mt-4 rounded text-center text-sm cursor-pointer'>
                    Register
                </div>

                <div className='flex items-center justify-center gap-2 my-4'>
                    <div className='h-px bg-gray-300 w-[45%]' />
                    <div className='text-gray-500 text-xs'>or</div>
                    <div className='h-px bg-gray-300 w-[45%]' />
                </div>

                <GoogleLoginComp />

                <div className='mt-3 text-l text-center'>
                    Already on SkillShareCampus? <Link to="/logIn" className='text-blue-700 hover:underline'>Sign In</Link>
                </div>
            </div>
            <div className='mb-40'> </div>
        </div>
    );
}

export default SignUp