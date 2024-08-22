import Image from 'next/image'
import React from 'react'
import ProfileImage from '@/assets/imgs/profile.png'

const SecondSection = () => {
  return (
    <div id="second" className='flex w-screen h-[700px] sm:h-[600px] px-10 gap-20 items-center justify-center'>
      <div className='flex flex-col sm:flex-col md:flex-row items-center justify-center md:max-w-[1000px] rounded-2xl p-5 bg-size bg-gradient-to-r from-white from-30% via-zinc-150 via-80% to-zinc-200 to-100% max-sm:bg-gradient-to-b w-max'>
          <div className='shrink-0 z-1'>
              <Image alt="Profile Image" src={ProfileImage} width={300} height={300}/>
          </div>
          <div className='max-sm:grow grow-0 sm:basis-2/4 p-5 z-1'>
              <div className='text-prety text-lg sm:text-xl text-wrap'>
                  <p className='text-xl font-bold text-wrap'>
                    Hi I&apos;m James (Fullstack Developer)
                  </p>
                  <br>
                  </br>
                  I prefer to design and develop the website or application. I am extremely motivated to constantly develop my skills and grow professionally.
              </div>
          </div>        
      </div>
    </div>
  )
}

export default SecondSection