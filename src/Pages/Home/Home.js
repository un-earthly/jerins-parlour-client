import React, { useEffect } from 'react'
import HomeBanner from './HomeBanner'
import HomeServices from './HomeServices.js'
import Nav from '../../Shared/Nav'

export default function Home() {
    class Service {
        img;
        title;
        price;
        desc;
        constructor(img, title, price, desc) {
            this.img = img
            this.title = title
            this.price = price
            this.desc = desc
        }
    }
    const services = [
        new Service('https://raw.githubusercontent.com/ProgrammingHero1/jerins-parlour/main/Image_Icon/Icon/Group%201372.png', 'Anti Age Face Treatment', '199', 'Anti-aging facial treatments are some of the best non-invasive ways to reduce the appearance of fine lines, wrinkles, and minor skin discolorations.'),
        new Service('https://raw.githubusercontent.com/ProgrammingHero1/jerins-parlour/main/Image_Icon/Icon/Group%201373.png', 'Hair Color & Styleing', '99', 'Hair coloring, or hair dyeing, is the practice of changing the hair color.we provide long lasting color and style for your hair'),
        new Service('https://raw.githubusercontent.com/ProgrammingHero1/jerins-parlour/main/Image_Icon/Icon/Group%201374.png', 'Anti Age Face Treatment', '299', 'Skin care is the range of practices that support skin integrity, enhance its appearance and relieve skin conditions. ')
    ]

    return (
        <>
            {/* <Nav /> */}

            <HomeBanner />
            <HomeServices services={services} />
            {/* <HomeAbout /> */}
        </>
    )
}
