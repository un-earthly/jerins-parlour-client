import React from 'react'

export default function Card({ service }) {
    const { img, title, desc, price } = service
    return (
        <div class="card lg:w-96 w-full hover:shadow-xl duration-500">
            <figure class="lg:px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl w-16" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-neutral">{title}</h2>
                <p className="text-accent font-semibold text-lg">${price}</p>
                <p class="text-secondary">{desc}</p>
            </div>
        </div>
    )
}
