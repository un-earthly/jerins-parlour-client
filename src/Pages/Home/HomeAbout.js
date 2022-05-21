import React from 'react'

export default function HomeAbout() {
    return (

        <div class="hero min-h-screen py-10">
            <div class="hero-content lg:justify-center flex-col-reverse lg:flex-row">
                <div className="lg:max-w-lg flex items-center justify-between">
                    <img src="https://raw.githubusercontent.com/ProgrammingHero1/jerins-parlour/main/Image_Icon/Image/engin-akyurt-g-m8EDc4X6Q-unsplash%201.png" class="w-full rounded-lg" />
                </div>
                <div className="lg:max-w-lg lg:px-12 space-y-6">
                    <h1 class="text-4xl text-neutral font-bold">Let us handle your <span>skin <span className="text-accent">Professionally</span></span>.</h1>
                    <p class="text-secondary capitalize lg:pr-16">We Are one of the famous salons situated all over the <strong>globe</strong> and has been carrying out their services with pride.we offer different types of beauty services like makeup, haircut, pedicure, manicure, and others.</p>
                    <div class="flex items-center justify-between lg:w-3/4">
                        <div>
                            <h2 className="text-accent text-2xl font-bold md:my-5">500+</h2>
                            <p class="text-black">Happy Customer</p>
                        </div>
                        <div>
                            <h2 className="text-accent text-2xl font-bold md:my-5">16+</h2>
                            <p class="text-black">Total Service</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
