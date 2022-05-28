import React from 'react'
import HomeBanner from './HomeBanner'
import HomeServices from './HomeServices.js'
import HomeAbout from './HomeAbout';
import HomeTesimonial from './HomeTesimonial';
import Footer from '../../Shared/Footer';
import HomeContact from './HomeContact';

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
    const tesimonials = [
        new Tesimonial('https://randomuser.me/api/portraits/women/61.jpg', 'Nash Patrik', 'CEO', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum!', '4'),
        new Tesimonial('https://randomuser.me/api/portraits/women/62.jpg', 'Nash Patrik', 'CEO', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum!', '5'),
        new Tesimonial('https://randomuser.me/api/portraits/women/63.jpg', 'Nash Patrik', 'CEO', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum!', '4.5'),
        new Tesimonial('https://randomuser.me/api/portraits/women/84.jpg', 'Nash Patrik', 'CEO', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum!', '4.5'),
        new Tesimonial('https://randomuser.me/api/portraits/women/65.jpg', 'Nash Patrik', 'CEO', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum!', '4'),
        new Tesimonial('https://randomuser.me/api/portraits/women/66.jpg', 'Nash Patrik', 'CEO', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum!', '4'),
        new Tesimonial('https://randomuser.me/api/portraits/women/68.jpg', 'Nash Patrik', 'CEO', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum!', '5'),
        new Tesimonial('https://randomuser.me/api/portraits/women/69.jpg', 'Nash Patrik', 'CEO', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum!', '3.9'),
        new Tesimonial('https://randomuser.me/api/portraits/women/79.jpg', 'Nash Patrik', 'CEO', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum!', '5'),
    ]
    const services = [
        new Service('https://raw.githubusercontent.com/ProgrammingHero1/jerins-parlour/main/Image_Icon/Icon/Group%201372.png', 'Anti Age Face Treatment', '199', 'Anti-aging facial treatments are some of the best non-invasive ways to reduce the appearance of fine lines, wrinkles, and minor skin discolorations.'),
        new Service('https://raw.githubusercontent.com/ProgrammingHero1/jerins-parlour/main/Image_Icon/Icon/Group%201373.png', 'Hair Color & Styleing', '99', 'Hair coloring, or hair dyeing, is the practice of changing the hair color.we provide long lasting color and style for your hair'),
        new Service('https://raw.githubusercontent.com/ProgrammingHero1/jerins-parlour/main/Image_Icon/Icon/Group%201374.png', 'Anti Age Face Treatment', '299', 'Skin care is the range of practices that support skin integrity, enhance its appearance and relieve skin conditions. ')
    ]

    return (
        <>
            <HomeBanner />
            <HomeServices services={services} />
            <HomeAbout />
            <HomeTesimonial tesimonials={tesimonials} />
            <HomeContact />
            <Footer />

        </>
    )
}
