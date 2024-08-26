import React from 'react'

function Cards() {
    return (
        <div className='w-full h-[30vw] bg-zinc-900 flex items-center px-12 gap-5'>
            <div className='cardcontainer h-[50vh] w-1/2'>
                <div className='card relative rounded-xl w-[46vw] h-[28vw] bg-[#004D43] flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
                    <button className='absolute px-5 py-1 rounded-full border-2 border-bg-[#CDEA68] text-[#CDEA68] left-10 bottom-10'>&copy; 2019-2020</button>
                </div>
            </div>
            <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
                <div className='relative flex items-center justify-center card rounded-xl w-1/2 h-[28vw] bg-[#192826]'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" />
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 font-mono tracking-tighter'>RATING 5.0 ON CLUTCH</button>
                </div>
                <div className='relative flex items-center justify-center card rounded-xl w-1/2 h-[28vw] bg-[#192826]'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" />
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 font-mono tracking-tighter'>BUSINESS BOOTCAMP ALUMNI</button>
                </div>
            </div>
        </div>
    )
}

export default Cards