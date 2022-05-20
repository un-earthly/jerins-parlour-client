import React from 'react'

export default function HomeBanner() {
    return (
        <>

            <div class="hero min-h-screen">
                <div class="hero-content lg:justify-between flex-col lg:flex-row-reverse">
                    <div className="lg:w-1/2 flex items-center justify-center">
                        <img src="https://raw.githubusercontent.com/ProgrammingHero1/jerins-parlour/main/Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept%201.png" class="w-full lg:w-2/3 rounded-lg" />
                    </div>
                    <div className="lg:w-1/2 lg:px-12 space-y-8">
                        <span><h1 class="lg:text-5xl text-3xl text-neutral font-bold">BEAUTY SALON</h1>
                            <h1 class="lg:text-5xl text-3xl text-neutral font-bold"> FOR EVERY WOMEN</h1></span>
                        <p class="text-secondary capitalize lg:pr-16">We Are one of the famous salons situated all over the <strong>globe</strong> and has been carrying out their services with pride.we offer different types of beauty services like makeup, haircut, pedicure, manicure, and others.</p>
                        <button class="btn btn-accent text-white">Get an Appointment</button>
                    </div>
                </div>
            </div>

        </>
    )
}
