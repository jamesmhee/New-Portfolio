import FirstSection from "@/components/FirstSection";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <FirstSection/>      
      <SecondSection/>
      <ThirdSection/>
    </div>
  );
}
