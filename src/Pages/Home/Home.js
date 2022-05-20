import React, { useEffect } from 'react'
import HomeBanner from './HomeBanner'
import HomeServices from './HomeServices.js'
import Nav from '../../Shared/Nav'
import HomeAbout from './HomeAbout';
import HomeTesimonial from './HomeTesimonial';

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
    class Tesimonial {
        img;
        name;
        professionalTitle;
        review;
        rating;
        constructor(img, name, professionalTitle, review, rating) {
            this.img = img
            this.name = name
            this.professionalTitle = professionalTitle
            this.review = review
            this.rating = rating
        }
    }
    const services = [
        new Service('https://raw.githubusercontent.com/ProgrammingHero1/jerins-parlour/main/Image_Icon/Icon/Group%201372.png', 'Anti Age Face Treatment', '199', 'Anti-aging facial treatments are some of the best non-invasive ways to reduce the appearance of fine lines, wrinkles, and minor skin discolorations.'),
        new Service('https://raw.githubusercontent.com/ProgrammingHero1/jerins-parlour/main/Image_Icon/Icon/Group%201373.png', 'Hair Color & Styleing', '99', 'Hair coloring, or hair dyeing, is the practice of changing the hair color.we provide long lasting color and style for your hair'),
        new Service('https://raw.githubusercontent.com/ProgrammingHero1/jerins-parlour/main/Image_Icon/Icon/Group%201374.png', 'Anti Age Face Treatment', '299', 'Skin care is the range of practices that support skin integrity, enhance its appearance and relieve skin conditions. ')
    ]
    const tesimonials = [
        new Tesimonial('https://randomuser.me/api/portraits/women/61.jpg', 'Nash Patrik', 'CEO', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum!', '1'),
        new Tesimonial('https://randomuser.me/api/portraits/women/62.jpg', 'Nash Patrik', 'CEO', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum!', '2'),
        new Tesimonial('https://randomuser.me/api/portraits/women/63.jpg', 'Nash Patrik', 'CEO', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum!', '3'),
        new Tesimonial('https://randomuser.me/api/portraits/women/84.jpg', 'Nash Patrik', 'CEO', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum!', '4'),
        new Tesimonial('https://randomuser.me/api/portraits/women/65.jpg', 'Nash Patrik', 'CEO', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum!', '5'),
        new Tesimonial('https://randomuser.me/api/portraits/women/66.jpg', 'Nash Patrik', 'CEO', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum!', '6'),
        new Tesimonial('https://randomuser.me/api/portraits/women/68.jpg', 'Nash Patrik', 'CEO', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum!', '7'),
        new Tesimonial('https://randomuser.me/api/portraits/women/69.jpg', 'Nash Patrik', 'CEO', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum!', '8'),
        new Tesimonial('https://randomuser.me/api/portraits/women/79.jpg', 'Nash Patrik', 'CEO', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum!', '9'),
        new Tesimonial('https://randomuser.me/api/portraits/women/43.jpg', 'Nash Patrik', 'CEO', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum!', '10'),
        new Tesimonial('https://randomuser.me/api/portraits/women/23.jpg', 'Nash Patrik', 'CEO', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum!', '11')
    ]

    return (
        <>
            {/* <Nav /> */}

            <HomeBanner />
            <HomeServices services={services} />
            <HomeAbout />
            <HomeTesimonial tesimonials={tesimonials} />
        </>
    )
}
