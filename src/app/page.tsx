import {BiHomeCircle, BiUser} from 'react-icons/bi'
import {BsBell, BsBookmark, BsThreeDots, BsTwitter, BsDot} from 'react-icons/bs'
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
  },
  {
    title: 'Dot',
    icon: BsDot  
  }

]


export default function Home() {
  return (
   <div className="w-full h-full flex justify-center items-center relative bg-black">
    <div className="max-w-screen-lg w-full h-full flex relative"> 

    {/* Left side bar for navigation/header */}
    <LeftSidebar />

    <main className="ml-[275px] flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
    <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">Home</h1>
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
    <div className="flex flex-col">
{
  Array.from({length:5}).map((_,i) => (
    <div key={i} className="border-b-[0.5px] p-4 flex space-x-4">
      <div>
        <div className="w-10 h-10 bg-slate-200 rounded-full" />
      </div>
      <div className='flex flex-col space-y-4'> 
          <div className="flex items-center space-x-1">
            {/* 3 Divisons */}

            <div className='font-bold'>Club Of Coders</div>
            <div>@clubofcoderscom</div>
            <div>
              <BsDot />
            </div>
            <div>1 hour ago</div>

          </div>
          <div className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa numquam quaerat architecto amet mollitia quo cumque odit possimus? Laboriosam possimus et ipsa, commodi pariatur consectetur quo vero ea adipisci unde exercitationem deserunt dolorem sequi. Maxime voluptas, voluptates, iure veritatis hic velit repudiandae vel iusto dignissimos sit necessitatibus. Alias, perspiciatis quo.
          </div>
          <div className='bg-slate-400 aspect-square w-full h-96 rounded-xl'>

          </div>

        {/* small last section */}
        <div className='flex items-center space-x-2 w-full'>
          <div>C</div>
          <div>R</div>
          <div>L</div>
          <div>S</div>
          <div>SH</div>
        </div>

        </div>
         </div>
  ))
}
    </div>
    </main>
    {/* Render all things here */}


    {/* <main>Home timeline</main>
    <section>Right sidebar</section> */}


    </div>
   </div>
  )
}
