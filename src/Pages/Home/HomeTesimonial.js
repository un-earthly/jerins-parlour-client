import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import Review from '../../Components/Review'

export default function HomeTesimonial({ tesimonials }) {
    return (
        <div className="bg-white min-h-screen py-10 flex items-center justify-center flex-col lg:p-14">
            <h1 className="font-bold text-4xl mb-16">Testimonials</h1>
            <div className="lg:mt-10 lg:p-4">
                <Carousel showThumbs={false} showStatus={false} showArrows={false} autoPlay={true}>
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        {
                            tesimonials.slice(0, 3).map(tesimonial => <Review key={tesimonial.img} tesimonial={tesimonial} />)
                        }
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        {
                            tesimonials.slice(3, 6).map(tesimonial => <Review key={tesimonial.img} tesimonial={tesimonial} />)
                        }
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        {
                            tesimonials.slice(6, 9).map(tesimonial => <Review key={tesimonial.img} tesimonial={tesimonial} />)
                        }
                    </div>
                </Carousel>

            </div>




        </div>
    )
}
