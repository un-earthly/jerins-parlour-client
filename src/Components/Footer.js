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
                <span class="footer-title">Company</span>
                <a class="link link-hover">Branding</a>
                <a class="link link-hover">Design</a>
                <a class="link link-hover">Marketing</a>
                <a class="link link-hover">Advertisement</a>
            </div>
            <div>
                <span class="footer-title">Quick Links</span>
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Jobs</a>
                <a class="link link-hover">Press kit</a>
            </div>
            <div>
                <span class="footer-title">About us</span>
                <a class="link link-hover">Terms of use</a>
                <a class="link link-hover">Privacy policy</a>
                <a class="link link-hover">Cookie policy</a>
            </div>
        </footer>
    )
}
