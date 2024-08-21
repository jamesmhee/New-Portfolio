'use client'
import React, { useState } from 'react'
import FlippingCard from './animata/list/flipping-cards'
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { RiBearSmileLine } from "react-icons/ri";
import { GrVulnerability } from "react-icons/gr";
import Skills from './Skills';

const ThirdSection = () => {
    const [showSkills, setShowSkills] = useState<boolean>(false)    
    
    const DataList = [
        {
            font: 'GITHUB',
            image: <FaGithub className='text-white font-bold text-6xl'/>,
            title: 'Git',
            textFront: '@jamesmhee',
            linkTo: 'https://github.com/jamesmhee',
            color: 'bg-gradient-to-b from-violet-500 to-violet-800'
        },
        {
            font: 'LINKEDIN',
            image: <FaLinkedin className='text-white font-bold text-6xl'/>,
            title: 'LI',
            textFront: 'Nontasab Siangchin',
            linkTo: 'https://www.linkedin.com/in/nontasab-siangchin-bab735227/',
            color: 'bg-gradient-to-b from-blue-500 to-blue-800'
        },
        {
            font: 'EMAIL',
            image: <FaMailBulk className='text-white font-bold text-6xl'/>,
            title: 'EM',
            textFront: 'nontasabs@gmail.com',
            linkTo: 'mailto:nontasabs@gmail.com',
            color: 'bg-gradient-to-b from-zinc-500 to-zinc-800'
        },
        {
            font: 'SKILLS',
            image: <GrVulnerability className='text-white font-bold text-6xl'/>,
            title: 'SK',
            textFront: 'My Skills',
            linkTo: '/skills',
            onClick: ()=>setShowSkills(true),
            color: 'bg-gradient-to-b from-red-500 to-red-800'
        }
    ]

  return (
    <div id="third" className='bg-gradient-to-b from-white to-zinc-300 w-screen h-max max-sm:h-max p-5 flex flex-col items-center justify-center'>
        <FlippingCard
            list={DataList}
        />
        <Skills showSkills={showSkills} setShowSkills={()=> setShowSkills(!showSkills)}/>        
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