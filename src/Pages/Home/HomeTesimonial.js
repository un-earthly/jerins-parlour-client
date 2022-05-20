import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import Review from '../../Components/Review'

export default function HomeTesimonial({ tesimonials }) {
    return (
        <div>
            <Carousel>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {
                        tesimonials.slice(0, 3).map(tesimonial => <Review tesimonial={tesimonial} />)
                    }
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {
                        tesimonials.slice(3, 6).map(tesimonial => <Review tesimonial={tesimonial} />)
                    }
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {
                        tesimonials.slice(6, 9).map(tesimonial => <Review tesimonial={tesimonial} />)
                    }
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {
                        tesimonials.slice(9, 12).map(tesimonial => <Review tesimonial={tesimonial} />)
                    }
                </div>
            </Carousel>


        </div>
    )
}
