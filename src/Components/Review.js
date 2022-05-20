import React from 'react'

export default function Review({ tesimonial }) {
    const { img, rating, review, name, professionalTitle } = tesimonial;
    return (
        <div class="text-left">
            <div class="flex items-center">
                <div class="avatar">
                    <div class="w-16 rounded-full">
                        <img src={img} />
                    </div>
                </div>
                <div>
                    <p>{name}</p>
                    <p>{professionalTitle}</p>
                </div>
            </div>
            <div>
                <p>{review}</p>
                <p>{rating}</p>
            </div>
        </div>
    )
}
