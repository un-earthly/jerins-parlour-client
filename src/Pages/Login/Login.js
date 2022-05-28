import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import Social from '../../Shared/Social'

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [login, setLogin] = useState(true);
    const [show, setShow] = useState(false)
    const loginHandler = data => console.log(data);
    const registerHandler = data => console.log(data);

    return (
        <div className='bg-white h-screen'>
            <div className="max-w-xl mx-auto py-10">
                <Link to='/' className='block mx-auto'>
                    <img src="logo192.png" className="w-1/2 mx-auto lg:mb-20" alt="" />
                </Link>
                {
                    login ?
                        <form onSubmit={handleSubmit(loginHandler)} className='space-y-10'>
                            <h1 className="text-3xl text-accent text-center font-semibold">Login</h1>
                            <div className="flex flex-col">
                                <input className="border border-accent" type="text" {...register("email", { required: "Email Is Required" })} Placeholder="Email" />
                                {errors.email && <span className="text-error">{errors.email.message}</span>}
                            </div>
                            <div className="flex flex-col">
                                <input className="border border-accent" type={show ? "text" : "password"} {...register("pass", { required: "Password Is Required" })} Placeholder="Password" />
                                {errors.pass && <span className="text-error">{errors.pass.message}</span>}
                                <p className={`mt-3 duration-300 text-${show ? 'success' : "error"}`} onClick={() => setShow(!show)}>{show ? "Hide Password" : "Show Password"}</p>
                            </div>

                            <input type="submit" className='btn-accent btn w-full' value="LOGIN" />
                        </form>
                        :
                        <form onSubmit={handleSubmit(registerHandler)} className='space-y-10'>
                            <h1 className="text-3xl text-accent text-center font-semibold">Register</h1>

                            <div className="flex flex-col">
                                <input className="border border-accent" type="text" {...register("name", { required: "Name Is Required" })} Placeholder="Name" />
                                {errors.name && <span className="text-error">{errors.name.message}</span>}
                            </div>
                            <div className="flex flex-col">
                                <input className="border border-accent" type="text" {...register("email", { required: "Email Is Required" })} Placeholder="Email" />
                                {errors.email && <span className="text-error">{errors.email.message}</span>}
                            </div>
                            <div className="flex flex-col">
                                <input className="border border-accent" type={show ? "text" : "password"} {...register("pass", { required: "Password Is Required" })} Placeholder="Password" />
                                {errors.pass && <span className="text-error">{errors.pass.message}</span>}
                                <p className={`mt-3 duration-300 text-${show ? "success" : "error"}`} onClick={() => setShow(!show)}>{show ? "Hide Password" : "Show Password"}</p>
                            </div>
                            <input type="submit" className='btn-accent btn w-full' value="REGISTER" />
                        </form>
                }
                <Social />
                <p className="text-center mt-3">Don’t have an account? <span onClick={() => setLogin(!login)} className="text-accent">Create an account</span></p>
            </div>
        </div>
    )
}
