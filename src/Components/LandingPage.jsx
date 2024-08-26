import { motion } from 'framer-motion'
import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

function LandingPage() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textstructure mt-12 px-12'>
                {['We.Create', 'Eye-Opening', 'Presentations'].map((item, index) => {
                    return <div className='masker'>
                        <div className='w-fit flex items-end'>
                            {index === 1 && (
                                <motion.div initial={{ width: 0 }} animate={{ width: "9vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}>
                                    <img src='fe.png' className='rotate-[180deg] mr-5 w-[9vw] h-[5.7vw] rounded-md relative top-[0.5vw]'></img>
                                </motion.div>
                            )}
                            <h1 className='pt-[2vw] uppercase text-[8.5vw] leading-[5vw] font-mono tracking-tighter font-semibold'>
                                {item}
                            </h1>
                        </div>
                    </div>
                })}
            </div>

            <div className='border-t-[1px] border-zinc-800 mt-28 flex justify-between items-center py-1.5 px-12'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p className='text-md font-light tracking-tight leading-none'>
                        {item}
                    </p>
                ))}
                <div className='start flex items-center gap-2 mt-1'>
                    <div className='px-5 py-2 border-[1px] border-zinc-400 rounded-full cursor-pointer text-sm uppercase hover:bg-white hover:text-black hover:transition-all hover:duration-500'>Start the project</div>
                    <div className='w-10 h-10 border-[1px] border-zinc-400 flex cursor-pointer items-center justify-center rounded-full hover:bg-white hover:text-black hover:transition-all hover:duration-500'>
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>

            <div className='absolute flex justify-center items-center end-0 top-0 mt-52 rotate-[90deg] -me-12 h-14 w-40 bg-red-600 place-items-end'>
                <h1 className='font-bold text-xl rotate-[270deg]'>W.</h1>
                <p className='rotate-[180deg] ms-3 font-medium text-sm'>Site of the day</p>
            </div>
        </div>
    )
}

export default LandingPage
