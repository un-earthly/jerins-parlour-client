import React from 'react'
import Card from '../../Components/Card'

export default function HomeServices({ services }) {
    return (
        <div className="hero bg-primary py-10">
            <div className="lg:hero-content lg:flex-col space-y-10">
                <h1 className="text-4xl text-center font-bold">Our Awesome <span className="text-accent">Services</span></h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-5">
                    {
                        services.map(service => <Card key={service.img} service={service} />)
                    }
                </div>
                <button className="btn block mx-auto btn-accent">Explore more</button>

            </div>
        </div >
    )
}
