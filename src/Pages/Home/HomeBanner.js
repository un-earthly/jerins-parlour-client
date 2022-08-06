import React from 'react'

export default function HomeBanner() {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content lg:justify-between lg:flex-row-reverse">
                <div className="lg:w-1/2 flex items-center justify-center">
                    <img src="https://raw.githubusercontent.com/ProgrammingHero1/jerins-parlour/main/Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept%201.png" className="w-full lg:w-2/3 rounded-lg" alt='treatment' />
                </div>
                <div className="lg:w-1/2 space-y-8">
                    <span><h1 className="lg:text-5xl text-3xl text-neutral font-bold">BEAUTY SALON</h1>
                        <h1 className="lg:text-5xl text-3xl text-neutral font-bold"> FOR EVERY WOMEN</h1></span>
                    <p className="text-secondary capitalize lg:pr-16">We Are one of the famous salons situated all over the <strong>globe</strong> and has been carrying out their services with pride.we offer different types of beauty services like makeup, haircut, pedicure, manicure, and others.</p>
                    <button className="btn btn-accent text-white">Get an Appointment</button>
                </div>
            </div>
        </div>

    )
}
