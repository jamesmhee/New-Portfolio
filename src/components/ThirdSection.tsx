'use client'
import React, { useCallback, useState } from 'react'
import FlippingCard from './animata/list/flipping-cards'
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { MdCloseFullscreen } from "react-icons/md";
import { RiBearSmileLine } from "react-icons/ri";

const ThirdSection = () => {
    const [showSkills, setShowSkills] = useState<boolean>(false)
    const handleSkills = useCallback(()=>{
        setShowSkills(!showSkills)
        console.log("sdsd")
    }, [showSkills])    
    
    const DataList = [
        {
            font: 'GITHUB',
            image: <FaGithub className='text-white font-bold text-6xl'/>,
            title: 'Git',
            textFront: '@jamesmhee',
            linkTo: 'https://github.com/jamesmhee'
        },
        {
            font: 'LINKEDIN',
            image: <FaLinkedin className='text-white font-bold text-6xl'/>,
            title: 'LI',
            textFront: 'Nontasab Siangchin',
            linkTo: 'https://www.linkedin.com/in/nontasab-siangchin-bab735227/'
        },
        {
            font: 'EMAIL',
            image: <FaMailBulk className='text-white font-bold text-6xl'/>,
            title: 'EM',
            textFront: 'nontasabs@gmail.com',
            linkTo: 'mailto:nontasabs@gmail.com'
        },
        {
            font: 'SKILLS',
            image: <FaMailBulk className='text-white font-bold text-6xl'/>,
            title: 'SK',
            textFront: 'My Skills',
            linkTo: '/skills',
            onClick: handleSkills
        }
    ]

  return (
    <div id="third" className='bg-zinc-50 w-screen h-[50vh] max-sm:h-max p-5 flex flex-col items-center justify-center'>
        <FlippingCard
            list={DataList}
        />
        <div className={(showSkills ? 'opacity-100 z-2' : 'opacity-0 z-[-1]') + ' transition-opacity duration-300 fixed text-2xl top-0 bg-black/80 w-screen h-screen' }>
            <div className='flex justify-end w-full'>
                <button onClick={handleSkills} type="button">
                    <MdCloseFullscreen className='text-2xl text-white m-2'/>
                </button>
            </div>
        </div>
        <div className='mt-10 text-[10px] text-black/50 flex items-center gap-2'>
            <pre>
                jemmyblair
            </pre>
            <RiBearSmileLine/> {new Date().getFullYear()}
        </div>
    </div>
  )
}

export default ThirdSection