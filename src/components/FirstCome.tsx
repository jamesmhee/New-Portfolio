import React from 'react'
import TypingText from './animata/text/typing-text'
import { IoPlay } from "react-icons/io5";

interface FirstComeProps {
    isShow: boolean
    onClick: ()=>void
    isLoading: boolean
}

const FirstCome = ({isShow, onClick, isLoading}: FirstComeProps) => {
  return (
    <div className='flex items-center flex-col gap-5 justify-center w-screen h-screen'>
        <div className="max-sm:min-w-72 min-w-96 max-w-96 rounded bg-black px-4 py-2 text-yellow-400 shadow-lg">
            <TypingText
                className="text-white"
                repeat={false}
                delay={50}
                text="SELECT * FROM 'nontasab';"
            />
        </div>
        <button type="button" onClick={onClick} className='w-40 border rounded hover:bg-black hover:text-white transition-colors duration-300 p-2 justify-between text-sm flex gap-2 items-center'>
            {!isLoading ? 
            (<>
                <span className='text-[12px]'>Run Command</span>
                <IoPlay className='text-green-500'/>
            </>) : 
            (<>
                <span className='text-[12px] text-green-600'>Running..</span>
            </>)}
        </button>                    
    </div>
  )
}

export default FirstCome