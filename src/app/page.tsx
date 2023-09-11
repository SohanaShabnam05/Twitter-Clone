import {BiHomeCircle, BiUser} from 'react-icons/bi'
import {BsBell, BsBookmark, BsThreeDots, BsTwitter} from 'react-icons/bs'
import {HiOutlineHashtag} from 'react-icons/hi'
import {BsEnvelope} from 'react-icons/bs'
import Link from 'next/link'
import LeftSidebar from '@/components/LeftSidebar'

const NAVIGATION_ITEMS = [
   {
    title: 'Twitter',
    icon: BsTwitter
  },
  {
    title: 'Home',
    icon: BiHomeCircle
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag
  },
  {
    title: 'Notifications',
    icon: BsBell
  },
  {
    title: 'Messages',
    icon: BsEnvelope
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark
  },
  {
    title: 'Profile',
    icon: BiUser
  }

]


export default function Home() {
  return (
   <div className="w-full h-full flex justify-center items-center relative bg-black">
    <div className="max-w-screen-lg w-full h-full flex relative"> 

    {/* Left side bar for navigation/header */}
    <LeftSidebar />
    <main className="ml-[275px] py-6 mx-2 flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600 px-6">
    <h1 className="text-xl font-bold my-4 p-6">Home</h1>
    <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-strech py-4 space-x-2 border-gray-600 h-32 relative">
      <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
      <div className="flex flex-col w-full h-full">
<input type="text" className="w-full h-full placeholder: text-xl placeholder:text-gray-500 bg-transparent border-b-[0.5px] outline-none border-none" placeholder="What's happening?"/>
      
         <div className="w-full justify-between items-center flex">
        <div>

        </div>
        <div className="w-full max-w-[100px]">
              <button className="rounded-full m-4 bg-primary px-4 py-2 w-full text-lg text-center hover:bg-opacity-70 transition duration-200">
      Tweet
    </button>
        </div>
      </div>
      </div>
    </div>
    </main>
    {/* Render all things here */}


    {/* <main>Home timeline</main>
    <section>Right sidebar</section> */}


    </div>
   </div>
  )
}
