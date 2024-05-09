import React from 'react'
import home from '../assets/Vector.png'
import arrow from '../assets/Frame.png'

import reset from '../assets/reset.png'
import square from '../assets/square.png'
import left from '../assets/left.png'
import right from '../assets/right.png'
import logo from '../assets/Group 1.png'
import name1 from '../assets/Frame 40.png'
import plus from '../assets/plush.png'
import down from '../assets/down.png'
import './home.css'
import Accordian, { AccordianItem } from '../Components/Accordian'
import Card from '../Components/Card'

const HomePage = () => {
    return (
        <>
        {/* sm:w-[54%] */}

            {/* <div className='flex  justify-center  sm:w-[54%] w-[100%]  h-44 '> */}
            <div className="flex justify-center w-full sm:w-[53%]  h-44">
                <div className="arrow-div flex items-center ">
                    <img src={home} alt="" />
                    <img src={arrow} alt="" />
                    <span className='text-zinc-500 font-medium'>Flashcard</span>
                    <img src={arrow} alt="" />
                    <span className='text-zinc-500 font-medium '>Mathematics</span>
                    <img src={arrow} alt="" />
                    <span className='text-blue-900 font-semibold'>Relation And Function</span>
                </div>


            </div>
            <div className="flex justify-center sm:w-[64%]">

                <h2 className=' text-lg sm:text-3xl gradient font-bold'>Relations and Functions ( Mathematics )</h2>
            </div>
            <div className="flex justify-center mt-16">
                <div className="flex justify-evenly w-[88%] sm:w-6/12">

                    <span className='gradient font-bold border-b-2 border-blue-900 '>Study</span>
                    <span >Quiz</span>
                    <span>Test</span>
                    <span>Game</span>
                    <span>Others</span>
                </div>
            </div>
            <div className="flex justify-center mt-8">

                <Card/>
            </div>
            <div className="flex justify-center">


                <div className="buttons flex w-[100%] sm:w-[60%] justify-evenly items-center mt-8">
                    <img className='h-6' src={reset} alt="" />
                    <div className="flex items-center justify-evenly sm:w-[30%]">
                        <img src={left} className='h-12' alt="" />
                        <span className='font-bold text-2xl'> 01/10 </span>
                        <img src={right} className='h-12' alt="" />

                    </div>
                    <img src={square} className='h-6' alt="" />
                </div>
            </div>

            <div className="flex justify-center mt-6">


                <div className="flex items-center justify-between w-[95%] sm:w-[80%] ">

                    <div className="another-logo flex items-center ">
                        <img src={logo} className='h-14 sm:h-28' alt="" />
                        <img src={name1} className='h-8 sm:h-12' alt="" />
                    </div>
                    <div className="flex items-center ">
                        <img src={plus} className='h-10' alt="" />
                        <span className='sm:text-2xl gradient font-medium'>Create Flashcard</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-center flex-col sm:w-[73%]">


                    <h1 className='gradient text-3xl font-bold m-7'>FAQ</h1>
                    <Accordian className="max-w-lg flex justify-between flex-col h-[250px]">
                        <AccordianItem value="1" trigger="Can education flashcards be used for all age groups?">
                            Yes, education flashcards can be tailored to different age groups and learning levels. There are
                            flashcards designed for preschoolers, elementary school students, high school students, and
                            even for college-level and adult learners.

                        </AccordianItem>
                        <AccordianItem value="2" trigger="How do education flashcards work?">
                            Education flashcards work by presenting a question or prompt on one side and the
                            corresponding answer or information on the other. Users can review the cards repeatedly,
                            reinforcing their memory and enhancing learning through repetition.

                        </AccordianItem>
                        <AccordianItem value="3" trigger="Can education flashcards be used for test preparation?">
                            Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key
                            concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge
                            before exams.

                        </AccordianItem>
                    </Accordian>


                </div>
            </div>

        </>
    )
}

export default HomePage