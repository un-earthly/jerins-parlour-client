import React from 'react'

export default function Footer() {
    return (
        <footer class="footer items-center p-10 bg-accent text-white">
            <div class="items-center content-center grid-flow-col">
                <img src="https://raw.githubusercontent.com/ProgrammingHero1/jerins-parlour/main/Image_Icon/Icon/map-pin-2-fill.png" alt="" />
                <div><p>H#000 (0th Floor), Road #00,</p>
                    <p>New DOHS, Mohakhali, Dhaka, Bangladesh</p></div>
            </div>
            <div>
                <span class="text-white font-bold uppercase">Company</span>
                <a class="link link-hover">About
                </a>
                <a class="link link-hover">Project
                </a>
                <a class="link link-hover"> Our Team
                </a>
                <a class="link link-hover">Terms Conditions
                </a>
                <a class="link link-hover">Submit Listing
                </a>
            </div>
            <div>
                <span class="text-white font-bold uppercase">Quick Links</span>
                <a class="link link-hover">Quick Links
                    us</a>
                <a class="link link-hover">Rentals
                </a>
                <a class="link link-hover"> Sales
                </a>
                <a class="link link-hover">Contact
                </a>
                <a class="link link-hover">Our blog
                </a>
            </div>
            <div class="w-2/3">
                <span class="text-white font-bold uppercase">About us</span>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Purus commodo ipsum
                    duis laoreet maecenas. Feugiat </p>
                <div class="text-2xl space-x-4 flex items-center justify-center">

                    <a class="link link-hover"><i className="bi bi-facebook"></i></a>
                    <a class="link link-hover"><i className="bi bi-instagram"></i></a>
                    <a class="link link-hover"><i className="bi bi-linkedin"></i></a>
                    <a class="link link-hover"><i className="bi bi-youtube"></i></a>
                </div>
            </div>
        </footer>
    )
}
