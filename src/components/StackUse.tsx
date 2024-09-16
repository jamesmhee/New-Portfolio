import React from 'react'

interface IStackUseProps{
    list: string[]
}

const StackUse = ({list}: IStackUseProps) => {
  return (
    <div className='flex flex-wrap gap-3 mt-2'>
        {list.map((elm, index)=>(
            <>
                <span className='p-2 bg-zinc-400 rounded'  key={index}>
                    {elm}
                </span>
            </>
        ))}
    </div>
  )
}

export default StackUse