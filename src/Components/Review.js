import React from 'react'

export default function Review({ tesimonial }) {
    const { img, rating, review, name, professionalTitle } = tesimonial;
    const ratingFl = Math.ceil(rating)


    return (
        <div className="text-left max-w-sm p-5">
            <div className="flex items-center">
                <div className="avatar mb-4">
                    <div className="w-16 rounded-full">
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
                <p>{review}</p>
                <p className="mt-4 flex items-center justify-between">
                    <span className="space-x-1"> {[...Array(ratingFl).keys()].map((i, index) => <i key={index} className="bi bi-star-fill text-[#FFAC0C]"></i>)}</span>{ratingFl}
                </p>
            </div>
        </div>
    )
}
