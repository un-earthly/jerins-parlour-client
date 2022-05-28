import React from 'react'
import { useForm } from 'react-hook-form';

export default function HomeContact() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div class="lg:hero min-h-screen py-10">

            <form class="lg:w-1/2 lg:mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <h1 class="text-center text-xl lg:text-4xl font-bold mb-12 lg:mx-20">Let us handle your
                    project, professionally.</h1>
                <div class="lg:flex lg:space-y-0 space-y-5 items-center justify-center">
                    <div class="flex  flex-col w-full px-2">
                        <input placeholder='First Name' class="input" {...register("firstName", { required: true })} />
                        {errors.firstName && <span class="text-error mt-3 px-2">First Name is required</span>}
                    </div>
                    <div class="flex  flex-col w-full px-2">
                        <input placeholder='Last Name' class="input" {...register("lastname", { required: true })} />
                        {errors.lastname && <span class="text-error mt-3 px-2">Last Name is required</span>}
                    </div >
                </div>
                <div class="lg:flex lg:space-y-0 space-y-5 items-center justify-center my-4">
                    <div class="flex flex-col w-full px-2">
                        <input placeholder='Email' class="input" {...register("email", { required: true })} />
                        {errors.email && <span class="text-error mt-3 px-2">Email is required</span>}
                    </div>
                    <div class="flex flex-col w-full px-2">
                        <input placeholder='Phone' class="input" {...register("phone", { required: true })} />
                        {errors.phone && <span class="text-error mt-3 px-2">Phone is required</span>}
                    </div >
                </div>
                <div class="flex flex-col w-full px-2">
                    <textarea class="textarea py-5 w-full" placeholder='Your Message' id="" cols="30" rows="10"{...register("msg", { required: true })} ></textarea>
                    {errors.msg && <span class="text-error mt-3 px-2">Please Type Your Message</span>}

                </div>
                <div class="flex items-center justify-center mt-8">
                    <input class="btn btn-accent" value='Send Message' type="submit" />
                </div>
            </form >
        </div >
    )
}
