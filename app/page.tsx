import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/nav/navbar";
import Link from "next/link";


export default function Home() {
 

  return (
     <main className="w-full flex justify-center">
       <div className="w-[1200px] ">
       <Navbar/>

        {/* hero section */}
        <section className="py-12 sm:px-20 px-4 flex flex-col gap-6 justify-center items-center text-center bg-gray-50">
        <p className="text-green-600 text-lg font-semibold">Upload your PDF and chat</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
          Upload your PDF and chat effortlessly. <br /> Simplifying document interactions.
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, reprehenderit nesciunt! Similique. Commodi recusandae adipisci magnam repellendus? Quia.
        </p>
        <Link href={'/dashboard'}>
        <Button className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow-lg hover:bg-green-700 transition">
          Get started for free
        </Button>
        </Link>
      </section>

      <section className="py-12 flex justify-center">
        <Image src={'/AI.png'} width={1000} height={500} alt="AI Dashboard Image" className="rounded-lg shadow-lg" />
      </section>
      </div>
     </main>
  )
} 