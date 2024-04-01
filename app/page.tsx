import Image from 'next/image'
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Educationaltour";
import Projects from "@/components/main/Researchfestival";
import Trainingsandseminars from '@/components/main/Trainingsandseminars';
import Ojtblog from '@/components/main/Ojtblog';
import Industry from '@/components/main/industry';
import Educationaltour from '@/components/main/Educationaltour';
import Researchfestival from '@/components/main/Researchfestival';
import Schoolanddepartment from '@/components/main/Schoolanddepartment';

export default function Home() {
  return (
      <main className="h-full w-full">
          <div className="flex flex-col gap-20 items-center justify-center">
              <Hero />
              <Skills />
              <Industry />
              <Ojtblog /> 
              <Schoolanddepartment />
              <Educationaltour />
              <Researchfestival />
              <Trainingsandseminars />
               
          </div>
      </main>
  )
}
