import { motion } from 'framer-motion'
import React from 'react'


function Marquee() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
            <div className='text border-t-2 border-b-2 overflow-hidden border-zinc-300 flex whitespace-nowrap mt-14'>
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 5 }} className='text-[25vw] -mb-10 tracking-tighter -mt-12 leading-none font-mono uppercase font-semibold pr-20'>We.are.Ochi</motion.h1>
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 5 }} className='text-[25vw] -mb-10 tracking-tighter -mt-12 leading-none font-mono uppercase font-semibold pr-20'>We.are.Ochi</motion.h1>
            </div>
        </div>
    )
}

export default Marquee