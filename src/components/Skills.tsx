import React, { useLayoutEffect, useRef } from 'react'
import { MdCloseFullscreen } from "react-icons/md";
import { FaReact, FaHtml5, FaCss3Alt, FaNode } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiTypescript, SiTailwindcss, SiAntdesign, SiJquery, SiBootstrap,SiMui, SiExpress, SiPostgresql, SiMysql, SiMongodb, SiPrisma, SiGit, SiGithub, SiDocker, SiPostman, SiFigma, SiNestjs } from "react-icons/si";
import { TbApi } from "react-icons/tb";

interface ISkillsProps{
    showSkills: boolean;
    setShowSkills: (boolean:boolean)=>void;
    type: string;
}

interface ISkillListProps{
    list: ISkillListData[]
}


interface ISkillListData{
    icon:  React.JSX.Element | React.JSX.Element[]
    color: string
    text: string
}

interface IProjectListProps{
    list: IProjectListData[]
}

interface IProjectListData{
    name: string
    detail?: string
    img?: unknown
    github: string
    link: string
}

const listData:ISkillListData[] = [
    {
        icon: <FaHtml5/>,
        color: 'bg-gradient-to-r from-orange-500 to-orange-700',
        text: 'HTML5'
    },    
    {
        icon: <FaCss3Alt/>,
        color: 'bg-gradient-to-r from-blue-500 to-blue-700',
        text: 'CSS3'        
    },
    {
        icon: <BiLogoJavascript/>,
        color: 'bg-gradient-to-r from-yellow-500 to-yellow-700',
        text: 'JavaScript'        
    },
    {
        icon: <SiTypescript/>,
        color: 'bg-gradient-to-r from-blue-500 to-blue-700',
        text: 'TypeScript'        
    },
]

const listDataSecond:ISkillListData[] = [
    {
        icon: <FaReact/>,
        color: 'bg-gradient-to-r from-blue-700 to-blue-900',
        text: 'React.JS'        
    },
    {
        icon: <FaReact/>,
        color: 'bg-gradient-to-r from-blue-700 to-blue-900',
        text: 'React Native'
    },
    {
        icon: <SiTailwindcss/>,
        color: 'bg-gradient-to-r from-blue-500 to-blue-700',
        text: 'Tailwind CSS'
    },
    {
        icon: <SiAntdesign/>,
        color: 'bg-gradient-to-r from-blue-500 to-blue-700',
        text: 'AntDesign'
    },
    {
        icon: <SiMui/>,
        color: 'bg-gradient-to-r from-blue-500 to-blue-700',
        text: 'MUI'
    },
    {
        icon: <SiJquery/>,
        color: 'bg-gradient-to-r from-blue-500 to-blue-700',
        text: 'jQuery'
    },
    {
        icon: <SiBootstrap/>,
        color: 'bg-gradient-to-r from-violet-500 to-violet-700',
        text: 'Bootstrap'
    },
]

const listDataBackend:ISkillListData[] = [
    {
        icon: <FaNode/>,
        color: 'bg-gradient-to-r from-green-500 to-green-700',
        text: 'Node.JS'
    },
    {
        icon: <SiExpress/>,
        color: 'bg-gradient-to-r from-zinc-500 to-zinc-700',
        text: 'Express.JS'
    },
    {
        icon: <SiNestjs/>,
        color: 'bg-gradient-to-r from-red-500 to-red-700',
        text: 'Nest.JS'
    },
    {
        icon: <SiPostgresql/>,
        color: 'bg-gradient-to-r from-blue-500 to-blue-700',
        text: 'PostgreSQL'
    },
    {
        icon: <SiMysql/>,
        color: 'bg-gradient-to-r from-zinc-500 to-zinc-700',
        text: 'MySQL'
    },
    {
        icon: <SiMongodb/>,
        color: 'bg-gradient-to-r from-green-500 to-green-700',
        text: 'MongoDB'
    },
    {
        icon: <SiPrisma/>,
        color: 'bg-gradient-to-r from-zinc-500 to-zinc-700',
        text: 'Prisma'
    },
    {
        icon: <TbApi/>,
        color: 'bg-gradient-to-r from-zinc-500 to-zinc-700',
        text: 'RESTful API'
    },
]

const listDataOther: ISkillListData[] = [
    {
        icon: <SiGit/>,
        color: 'bg-gradient-to-r from-orange-500 to-orange-700',
        text: 'Git'
    },
    {
        icon: <SiGithub/>,
        color: 'bg-gradient-to-r from-violet-500 to-violet-700',
        text: 'Github'
    },
    {
        icon: <SiDocker/>,
        color: 'bg-gradient-to-r from-blue-500 to-blue-700',
        text: 'Docker'
    },
    {
        icon: <SiPostman/>,
        color: 'bg-gradient-to-r from-orange-500 to-orange-700',
        text: 'Postman'
    },
    {
        icon: <SiFigma/>,
        color: 'bg-gradient-to-r from-orange-500 via-violet-500 to-lime-700',
        text: 'Figma'
    },
]

const SkillList = ({list}: ISkillListProps) =>{
    return (
        <div className='flex-wrap flex gap-2 py-5'>
            {list.map((elm, index)=>(
                <div key={index} className={'flex gap-2 w-max py-2 px-3 items-center justify-center rounded-lg ' + elm.color}>
                    {elm.icon}
                    <span className='text-base'>
                        {elm.text}
                    </span>
                </div>
            ))}
        </div>
    )
}

const ProjectList = ({list}: IProjectListProps) =>{
    return (
        <div className='flex-wrap flex gap-2 py-5'>
            {list.map((elm, index)=>(
                <>
                </>
                // <div key={index} className={'flex gap-2 w-max py-2 px-3 items-center justify-center rounded-lg ' + elm.color}>
                //     {elm.icon}
                //     <span className='text-base'>
                //         {elm.text}
                //     </span>
                // </div>
            ))}
        </div>
    )
}

const Skills = ({showSkills, setShowSkills, type}:ISkillsProps ) => {
    const divRef = useRef<HTMLDivElement>(null)    

    useLayoutEffect(()=>{
        divRef?.current?.scrollTo(0,0)
        const handleEscape = () =>{
            const target = document as Document
            target.addEventListener('keydown', (event: KeyboardEvent)=>{                        
                if(showSkills &&(event.code === 'code' || event.key === 'Escape' || event.keyCode == 27)){                
                    setShowSkills(false)                
                }else{                
                    return false
                }
            })
        }
        handleEscape()
    }, [showSkills, setShowSkills])

  return (
    <div className={(showSkills ? 'opacity-100 z-2' : 'opacity-0 z-[-1]') + ' transition-opacity duration-500 fixed text-2xl top-0 right-0 bg-black/85 min-w-screen min-h-screen' }>        
        <div className='flex justify-end w-full gap-3 mt-2 mr-2'>
            <button onClick={()=>setShowSkills(false)} type="button">
                <MdCloseFullscreen className='text-2xl text-white m-3'/>
            </button>            
        </div>
        <div className='w-screen max-w-screen h-[calc(100vh_-_6em)] flex px-7 sm:px-20 mt-5'>            
            <div ref={divRef} className='flex gap-5 text-white flex-col overflow-y-scroll overflow-x-auto'>
                {type === 'skills' ? 
                (
                <>
                    <div className='flex flex-col'>
                        <b className='text-2xl border-b-2 w-screen max-sm:w-auto'>Frontend Skill</b>                
                        <SkillList list={listData}/>
                    </div>
                    <div className='flex flex-col'>
                        <b className='text-2xl border-b-2 max-sm:w-auto'>Frontend Frameworks</b>                
                        <SkillList list={listDataSecond}/>                                                    
                    </div>
                    <div className='flex flex-col'>
                        <b className='text-2xl border-b-2 max-sm:w-auto'>Backend Skills</b>                
                        <SkillList list={listDataBackend}/>                                                    
                    </div>
                    <div className='flex flex-col'>
                        <b className='text-2xl border-b-2 max-sm:w-auto'>Other Skills</b>                
                        <SkillList list={listDataOther}/>                                                    
                    </div>
                </>
                )
                :
                (
                <>
                    <div className='flex flex-col'>
                        <b className='text-2xl border-b-2 w-screen max-sm:w-auto'>My Projects</b>                
                        <ProjectList list={[]}/>
                    </div>
                </>
                )
                }                
            </div>
        </div>
    </div>    
  )
}

export default Skills