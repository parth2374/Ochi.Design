import React from 'react'
import { motion } from 'framer-motion'

function About() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
            <h1 className='text-[4vw] -ms-8 leading-[4vw] tracking-tight mt-2'>
                Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline'>raise funds</span>, <span className='underline'>sell products</span>, <span className='underline'>ex­plain com­plex ideas</span>, and <span className='underline'>hire great peo­ple</span>.
            </h1>
            <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
                <p className='-mt-6 -ms-7 w-full'>What you can expect:</p>
                <p className='-ms-64'>
                    <p className='w-64 -mt-7 -ms-80 leading-6'>
                        We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
                        <br />
                        <br />
                        We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                    </p>
                </p>
                <p className='mt-16 ms-20'>
                    S:
                    <br />
                    <br />
                    <span className='underline cursor-pointer'>Instagram</span>
                    <br />
                    <span className='underline cursor-pointer'>Behance</span>
                    <br />
                    <span className='underline cursor-pointer'>Facebook</span>
                    <br />
                    <span className='underline cursor-pointer'>Linkedin</span>
                </p>
            </div>
            <div className='w-full flex gap-14 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
                <div className='w-1/2'>
                    <h1 className='text-5xl tracking-tight -ms-8 -mt-7'>Our approach:</h1>
                    <button className='-ms-8 flex gap-16 items-center uppercase px-6 py-4 bg-zinc-900 mt-6 rounded-full text-white'>
                        Read More
                        <div className='-ms-8 w-2 h-2 bg-zinc-100 rounded-full'></div>
                    </button>
                </div>
                <div className=' rounded-3xl bg-[#b0c859] -mt-6 -me-6'>
                    <img className='w-[50vw] h-[65vh]' src="about.png"/>
                </div>
            </div>
        </div>
    )
}

export default About
