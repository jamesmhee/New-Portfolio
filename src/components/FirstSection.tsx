'use client'
import React, { useCallback, useEffect, useRef } from 'react'
import BlurryBlob from './animata/background/blurry-blob'
import SwapText from './animata/text/swap-text'
import { RiArrowDownDoubleLine } from "react-icons/ri";
import Link from 'next/link';

const FirstSection = () => {   
  return (
    <div className='flex h-screen w-screen items-center justify-center gap-20 relative p-5 flex-col'>        
        <div className='flex w-screen items-center justify-center'>
            <BlurryBlob
                className="rounded-xl opacity-100"
                firstBlobColor="#ffe900"
                secondBlobColor="#ffac00"
            />
            <SwapText
                disableClick
                finalText="JEMMYBLAIR ;)"
                initialText="NONTASAB SIANGCHIN"
                initialTextClassName=""
                supportsHover
                textClassName="text-3xl sm:text-7xl text-black font-bold w-fit
                "
            />       
        </div>
        <Link href="#second">
            <RiArrowDownDoubleLine style={{fontSize: 30}} className='animate-bounce text-black hover:text-yellow-400 transition-colors duration-700'/>
        </Link>
    </div>
  )
}

export default FirstSection