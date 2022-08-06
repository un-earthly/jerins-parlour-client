import React from 'react'
import TeamMembar from './TeamMembar'

export default function Team() {
    return (
        <section class=" body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="text-2xl font-medium title-font mb-4 tracking-widest">OUR TEAM</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                </div>
                <div class="flex flex-wrap -m-4">
                    <TeamMembar />
                    <TeamMembar />
                    <TeamMembar />
                    <TeamMembar />
                </div>
            </div>
        </section>
    )
}
