
import Link from 'next/link'
import LeftSidebar from '@/components/LeftSidebar'
import MainComponet from '@/components/MainComponet'
import { BsSearch } from 'react-icons/bs'



export default function Home() {
  return (
   <div className="w-full h-full flex justify-center items-center relative bg-black">
    <div className="max-w-[70vw] w-full h-full flex relative border-4"> 

    {/* Left side bar for navigation/header */}
    <LeftSidebar />
    <MainComponet />

   
    {/* Render all things here */}


    <section className="w-full sticky hidden top-2 overflow-y-auto mt-2 xl:flex flex-col items-stretch h-[90vh] overflow-x-hidden px-6">

    <div>
      <div className="relative w-full h-full">
        <label 
        htmlFor="searchBox"
        className="absolute top-0 left-0 h-full flex items-center justify-center">
          <BsSearch className="w-5 h-5 text-gray-500" />
        </label>
      <input 
      id="searchBox"
      type="text" placeholder="Search Twitter" className="outline-none peer focus:border-primary focus:border bg-neutral-900/90 w-full h-full rounded-xl py-4 pl-14 pr-4" />
       </div>
    </div>
    <div></div>
    <div></div>

    </section>


    </div>
   </div>
  )
}
