import React from 'react'
import { useForm } from 'react-hook-form';

export default function HomeContact() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="lg:hero min-h-screen py-10">

            <form className="lg:w-1/2 lg:mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-center text-xl lg:text-4xl font-bold mb-12 lg:mx-20">Let us handle your
                    project, professionally.</h1>
                <div className="lg:flex lg:space-y-0 space-y-5 items-center justify-center">
                    <div className="flex  flex-col w-full px-2">
                        <input placeholder='First Name' {...register("firstName", { required: true })} />
                        {errors.firstName && <span className="text-error mt-3 px-2">First Name is required</span>}
                    </div>
                    <div className="flex  flex-col w-full px-2">
                        <input placeholder='Last Name' {...register("lastname", { required: true })} />
                        {errors.lastname && <span className="text-error mt-3 px-2">Last Name is required</span>}
                    </div >
                </div>
                <div className="lg:flex lg:space-y-0 space-y-5 items-center justify-center my-4">
                    <div className="flex flex-col w-full px-2">
                        <input placeholder='Email' {...register("email", { required: true })} />
                        {errors.email && <span className="text-error mt-3 px-2">Email is required</span>}
                    </div>
                    <div className="flex flex-col w-full px-2">
                        <input placeholder='Phone' {...register("phone", { required: true })} />
                        {errors.phone && <span className="text-error mt-3 px-2">Phone is required</span>}
                    </div >
                </div>
                <div className="flex flex-col w-full px-2">
                    <textarea className="py-5 w-full" placeholder='Your Message' id="" cols="30" rows="10"{...register("msg", { required: true })} ></textarea>
                    {errors.msg && <span className="text-error mt-3 px-2">Please Type Your Message</span>}

                </div>
                <div className="flex items-center justify-center mt-8">
                    <input className="btn btn-accent" value='Send Message' type="submit" />
                </div>
            </form >
        </div >
    )
}
