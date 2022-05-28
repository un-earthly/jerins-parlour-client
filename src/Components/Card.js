import React from 'react'

export default function Card({ service }) {
    const { img, title, desc, price } = service
    return (
        <div className="card lg:w-96 w-full hover:shadow-xl duration-500">
            <figure className="lg:px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-16" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-neutral">{title}</h2>
                <p className="text-accent font-semibold text-lg">${price}</p>
                <p className="text-secondary">{desc}</p>
            </div>
        </div>
    )
}
