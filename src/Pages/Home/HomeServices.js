import React from 'react'
import Card from '../../Components/Card'

export default function HomeServices({ services }) {
    return (
        <div class="hero min-h-screen bg-primary">
            <div className="hero-content lg:flex-col space-y-10">
                <h1 className="text-4xl font-bold">Our Awesome <span className="text-accent">Services</span></h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-5">
                    {
                        services.map(service => <Card service={service} />)
                    }
                </div>
                <button className="btn btn-accent">Explore more</button>
            </div>
        </div>
    )
}
