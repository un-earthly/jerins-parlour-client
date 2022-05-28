import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import Social from '../../Shared/Social'

export default function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='bg-white h-screen'>
            <div className="border border-red-400 h-full mx-auto flex items-center justify-center flex-col">
                <img src="logo192.png" className="w-1/4 lg:mb-20" alt="" />
                {/* <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col">
                    <input className="input" type="text" {...register("email", { required: "Email Is Required" })} Placeholder="Email" />
                    {errors.email && <span className="text-error">Email Is Required</span>}
                </div>
                <input type="submit" value="LOGIN" />
            </form> */}
                <Social />
                <p className="text-center mt-3">Don’t have an account? <Link to='/register' className="text-accent">Create an account</Link></p>
            </div>
        </div>
    )
}
