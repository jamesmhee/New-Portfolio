'use client'
import FirstCome from "@/components/FirstCome";
import FirstSection from "@/components/FirstSection";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [ isShow, setIsShow ] = useState<boolean>(false)  
  const [ isLoading, setIsLoading ] = useState<boolean>(false)
  const setShow = () =>{
    setIsLoading(true)
    setTimeout(()=>{
      setIsShow(true)
    }, 2000)
  }
  return (
    <div className="scroll-smooth">
      {
        isShow ? 
        (
          <>
            <FirstSection/>      
            <SecondSection/>
            <ThirdSection/>
          </>
        )
        :
        (
          <FirstCome onClick={setShow} isShow={isShow} isLoading={isLoading}/>
        )
      }      
    </div>
  );
}
