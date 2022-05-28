import React from 'react'

export default function Footer() {
    return (
        <footer className="footer items-center p-10 lg:space-x-10 bg-accent text-white">
            <div className="items-center content-center grid-flow-col">
                <img src="https://raw.githubusercontent.com/ProgrammingHero1/jerins-parlour/main/Image_Icon/Icon/map-pin-2-fill.png" alt="" />
                <div><p>H#000 (0th Floor), Road #00,</p>
                    <p>New DOHS, Mohakhali, Dhaka, Bangladesh</p></div>
            </div>
            <div>
                <span className="text-white font-bold uppercase">Company</span>
                <a className="link link-hover">About
                </a>
                <a className="link link-hover">Project
                </a>
                <a className="link link-hover"> Our Team
                </a>
                <a className="link link-hover">Terms Conditions
                </a>
                <a className="link link-hover">Submit Listing
                </a>
            </div>
            <div>
                <span className="text-white font-bold uppercase">Quick Links</span>
                <a className="link link-hover">Quick Links </a>
                <a className="link link-hover">Rentals
                </a>
                <a className="link link-hover"> Sales
                </a>
                <a className="link link-hover">Contact
                </a>
                <a className="link link-hover">Our blog
                </a>
            </div>
            <div className="w-2/3">
                <span className="text-white font-bold uppercase">About us</span>
                <p>We Provide The Best quality <strong>beauty</strong> solutions in the market.we have qualified beauticians who takes care of customers with most efficient beauty trends and products. </p>
                <div className="text-2xl space-x-4 flex items-center justify-center">

                    <a className="link link-hover"><i className="bi bi-facebook"></i></a>
                    <a className="link link-hover"><i className="bi bi-instagram"></i></a>
                    <a className="link link-hover"><i className="bi bi-linkedin"></i></a>
                    <a className="link link-hover"><i className="bi bi-youtube"></i></a>
                </div>
            </div>
        </footer>
    )
}
