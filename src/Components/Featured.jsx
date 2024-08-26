import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

function Featured() {

    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({ y: '0' });
    }

    const handleHoverEnd = (index) => {
        cards[index].start({ y: '100%' });
    }

    return (
        <div className='w-full py-28'>
            <div className='w-full px-12 border-b-[1px] border-zinc-700 pb-8'>
                <h1 className='text-6xl tracking-tight'>
                    Featured Projects
                </h1>

            </div>
            <div className='px-20'>
                <div className='cards w-full flex gap-5 mt-10'>
                    <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className='cardcontainer w-[46vw] -ms-8 relative h-[75vh]'>
                        <h1 className='absolute flex text-[#CDEA68] left-full overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-mono text-6xl tracking-tighter'>
                            { "CARDBOARD.SPACESHIP".split('').map((item, index) => <motion.span initial={{ y: "100%" }} animate={cards[0]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className='inline-block text-8xl font-bold font-mono'>{item}</motion.span>)}
                        </h1>
                        <div className='flex gap-3 items-center pb-4'>
                            <div className='bg-zinc-100 h-3 w-3 rounded-full'></div>
                            <p className='uppercase'>Cardboard Spaceship</p>
                        </div>
                        <div className='card w-full rounded-xl h-full overflow-hidden'>
                            <img className='w-full h-full rounded-2xl cursor-pointer bg-cover hover:scale-95 transition-all hover:duration-1000' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" />
                        </div>
                    </motion.div>
                    <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className='cardcontainer relative w-[47vw] h-[81vh] rounded-2xl -me-10'>
                        <div className='card w-full rounded-xl h-full overflow-hidden'>
                            <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-mono text-6xl tracking-tighter'>
                                { "AH2.&.MATT.HORN".split('').map((item, index) => <motion.span initial={{ y: "100%" }} animate={cards[1]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className='inline-block text-8xl font-bold font-mono'>{item}</motion.span>)}
                            </h1>
                            <div className='flex gap-3 items-center pb-4'>
                                <div className='bg-zinc-100 h-3 w-3 rounded-full'></div>
                                <p className='uppercase'>AH2 & MATT HORN</p>
                            </div>
                            <div className='card w-full rounded-xl h-full overflow-hidden'>
                                <img className='w-full h-full cursor-pointer bg-cover rounded-2xl hover:scale-95 transition-all hover:duration-1000' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='px-20 mt-20'>
                <div className='cards w-full flex gap-5 mt-10'>
                    <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className='cardcontainer w-[46vw] -ms-8 relative h-[75vh]'>
                        <h1 className='absolute flex text-[#CDEA68] left-full overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-mono text-6xl tracking-tighter'>
                            { "FYDE".split('').map((item, index) => <motion.span initial={{ y: "100%" }} animate={cards[0]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className='inline-block text-8xl font-bold font-mono'>{item}</motion.span>)}
                        </h1>
                        <div className='flex gap-3 items-center pb-4'>
                            <div className='bg-zinc-100 h-3 w-3 rounded-full'></div>
                            <p className='uppercase'>FYDE</p>
                        </div>
                        <div className='card w-full rounded-xl h-full overflow-hidden'>
                            <img className='w-full h-full rounded-2xl cursor-pointer bg-cover hover:scale-95 transition-all hover:duration-1000' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" />
                        </div>
                    </motion.div>
                    <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className='cardcontainer relative w-[47vw] h-[81vh] rounded-2xl -me-10'>
                        <div className='card w-full rounded-xl h-full overflow-hidden'>
                            <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-mono text-6xl tracking-tighter'>
                                { "VISE".split('').map((item, index) => <motion.span initial={{ y: "100%" }} animate={cards[1]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className='inline-block text-8xl font-bold font-mono'>{item}</motion.span>)}
                            </h1>
                            <div className='flex gap-3 items-center pb-4'>
                                <div className='bg-zinc-100 h-3 w-3 rounded-full'></div>
                                <p className='uppercase'>VISE</p>
                            </div>
                            <div className='card w-full rounded-xl h-full overflow-hidden'>
                                <img className='w-full h-full cursor-pointer bg-cover rounded-2xl hover:scale-95 transition-all hover:duration-1000' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='px-20 mt-20'>
                <div className='cards w-full flex gap-5 mt-10'>
                    <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className='cardcontainer w-[46vw] -ms-8 relative h-[75vh]'>
                        <h1 className='absolute flex text-[#CDEA68] left-full overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-mono text-6xl tracking-tighter'>
                            { "TRAWA".split('').map((item, index) => <motion.span initial={{ y: "100%" }} animate={cards[0]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className='inline-block text-8xl font-bold font-mono'>{item}</motion.span>)}
                        </h1>
                        <div className='flex gap-3 items-center pb-4'>
                            <div className='bg-zinc-100 h-3 w-3 rounded-full'></div>
                            <p className='uppercase'>TRAWA</p>
                        </div>
                        <div className='card w-full rounded-xl h-full overflow-hidden'>
                            <img className='w-full h-full rounded-2xl cursor-pointer bg-cover hover:scale-95 transition-all hover:duration-1000' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" />
                        </div>
                    </motion.div>
                    <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className='cardcontainer relative w-[47vw] h-[81vh] rounded-2xl -me-10'>
                        <div className='card w-full rounded-xl h-full overflow-hidden'>
                            <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-mono text-6xl tracking-tighter'>
                                { "PREMIUM.BLEND".split('').map((item, index) => <motion.span initial={{ y: "100%" }} animate={cards[1]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className='inline-block text-8xl font-bold font-mono'>{item}</motion.span>)}
                            </h1>
                            <div className='flex gap-3 items-center pb-4'>
                                <div className='bg-zinc-100 h-3 w-3 rounded-full'></div>
                                <p className='uppercase'>PREMIUM BLEND</p>
                            </div>
                            <div className='card w-full rounded-xl h-full overflow-hidden'>
                                <img className='w-full h-full cursor-pointer bg-cover rounded-2xl hover:scale-95 transition-all hover:duration-1000' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Featured
// 
// 