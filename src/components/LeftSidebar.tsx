import React from 'react'
import {BiHomeCircle, BiUser} from 'react-icons/bi'
import {BsBell, BsBookmark, BsThreeDots, BsTwitter} from 'react-icons/bs'
import {HiOutlineHashtag} from 'react-icons/hi'
import {BsEnvelope} from 'react-icons/bs'
import Link from 'next/link'

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



const LeftSidebar = () => {
  return (
    <div>
          <section className="fixed w-[275px] flex flex-col items-strech h-screen p-6">
      
   <div className="flex flex-col items-strech h-full space-y-4 mt-4">
     {NAVIGATION_ITEMS.map((item) => (
      <Link 
      className="hover:bg-white/10 text-xl transition duration-200 flex items-center justify-start w-fit space-x-2 rounded-3xl py-2 px-6"
        href={`/${item.title.toLocaleLowerCase()}`}
        key = {item.title}
        >
      
      <div>
        <item.icon />
      </div>
      {item.title !== "Twitter" && <div>{item.title}</div>}
      </Link>
    ))}
    <button className="rounded-full m-4 bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
      Tweet
    </button>
   </div>
       <button className="rounded-full flex items-center space-x-2 m-4 bg-transparent p-4 text-2xl text-center hover:bg-white/10 transition duration-200 w-full justify-between">
        <div className="flex items-center space-x-2">
      <div className="rounded-full bg-slate-400 w-8 h-8"></div>
      <div className="text-left text-sm">
        <div className="font-semibold">Club Of Coders</div>
        <div>@clubofcoderscom</div>
      </div>
      </div>
      <div>
        <BsThreeDots />
      </div>

       </button>
    </section>
    </div>
  )
}

export default LeftSidebar
