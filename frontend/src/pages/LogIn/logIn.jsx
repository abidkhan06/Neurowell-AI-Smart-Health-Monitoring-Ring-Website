import React from 'react'
import { Link } from 'react-router-dom'
import GoogleLoginComp from '../../components/GoogleLogin/googleLoginComp'
const LogIn = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='w-[90%] sm:w-[360px] mx-auto mt-10 bg-white border border-gray-200 shadow-xl rounded-lg p-6'>

                <div className='text-2xl font-semibold mb-4 text-center'>Sign In</div>

                <div className='mb-4'>
                    <GoogleLoginComp />
                </div>

                <div className='flex items-center justify-center gap-2 my-4'>
                    <div className='h-px bg-gray-300 w-[45%]' />
                    <div className='text-gray-500 text-sm'>or</div>
                    <div className='h-px bg-gray-300 w-[45%]' />
                </div>

                <div className='flex flex-col gap-[2px] mb-3'>
                    <label htmlFor="email" className='text-sm'>Email</label>
                    <input
                        type="text"
                        id="email"
                        className='w-full text-sm border rounded px-2 py-1'
                        placeholder='Enter your email'
                    />
                </div>

                <div className='flex flex-col gap-[2px] mb-4'>
                    <label htmlFor="password" className='text-sm'>Password</label>
                    <input
                        type="password"
                        id="password"
                        className='w-full text-sm border rounded px-2 py-1'
                        placeholder='Enter your password'
                    />
                </div>

                <div className='w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded text-center text-sm cursor-pointer'>
                    Sign In
                </div>
            </div>
            <div className='mt-4 mb-80'>New to SkillShareCampus? <Link to="/signUp" className='text-blue-700 hover:underline cursor-pointer'>Join Now</Link>
            </div>
        </div>
    )
}

export default LogIn