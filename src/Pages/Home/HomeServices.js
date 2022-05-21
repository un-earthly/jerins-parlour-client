import React from 'react'
import Card from '../../Components/Card'

export default function HomeServices({ services }) {
    return (
        <div class="hero min-h-screen bg-primary py-10">
            <div className="lg:hero-content lg:flex-col space-y-10">
                <h1 className="text-4xl text-center font-bold">Our Awesome <span className="text-accent">Services</span></h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-5">
                    {
                        services.map(service => <Card key={service.img} service={service} />)
                    }
                </div>
                <div className="flex items-center justify-center">
                    <button className="btn btn-accent">Explore more</button>
                </div>
            </div>
        </div >
    )
}
