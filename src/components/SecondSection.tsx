import Image from 'next/image'
import React from 'react'
import ProfileImage from '@/assets/imgs/profile.png'

const SecondSection = () => {
  return (
    <div id="second" className='flex flex-col sm:flex-row w-screen h-screen items-center justify-center px-10 gap-20 sm:px-20'>
        <div className='shrink'>
            <Image alt="Profile Image" src={ProfileImage} width={300} height={300}/>
        </div>
        <div className='grow-0 sm:basis-2/4'>
            <p className='text-prety text-lg sm:text-xl text-wrap'>
                <b className='mr-2'>
                Hi I'm James (Fullstack Developer)
                </b> 
                <br>
                </br>               
                I prefer to design and develop the website or application. I am extremely motivated to constantly develop my skills and grow professionally.
            </p>
        </div>
    </div>
  )
}

export default SecondSection