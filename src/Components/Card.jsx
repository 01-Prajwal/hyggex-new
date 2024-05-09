import React, { useState } from 'react'
import { motion } from "framer-motion";
import bulb from '../assets/bulb.png'
import sound from '../assets/sound.png'
const Card = () => {
    const [isFlip, setIsFlip] = useState(false)
    const [isAnimate, setIsAnimate] = useState(false)
    const handleFlip = () => {
        if (!isAnimate) {
            setIsFlip(!isFlip)
            setIsAnimate(true)
        }
    }

    return (
        <>
            <div className=" flip-card h-[393px]  w-[80%] sm:w-1/2  cursor-pointer " onClick={handleFlip}>
                <motion.div className="flip-card-inner w-[100%]  h-[100%]"
                    initial={false}
                    animate={{ rotateY: isFlip ? 180 : 360 }}
                    transition={{ duration: 0.6, animationDirection: "normal" }}
                    onAnimationComplete={() => setIsAnimate(false)}>

                    <div className="flip-card-front  background  rounded-[60px] flex flex-col justify-between  w-[100%] sm:w-[100%]">
                        <div className="flex flex-col justify-center mt-4 items-center">
                            <div className=' flex justify-between w-[80%] sm:w-[80%]'>

                                <img src={bulb} alt="" />
                                <img src={sound} alt="" />
                            </div>

                        </div>
                        <div className="h-[290px] flex justify-center items-center">
                            <h2 className='text-white font-bold text-2xl font-lato'>9 + 6 + 7x - 2x - 3</h2>
                        </div>
                    </div>
                    <div className="flip-card-back flex bg-2  rounded-[60px] flex-col justify-between w-[100%] sm:w-[100%]">
                        <div className="flex justify-center mt-4">
                            <div className="flex w-[80%] justify-between">

                                <img src={bulb} alt="" />
                                <img src={sound} alt="" />
                            </div>

                        </div>
                        <div className="h-[290px] flex justify-center items-center">
                            <h2 className='text-white font-bold text-2xl font-lato'>5x + 12</h2>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Card
