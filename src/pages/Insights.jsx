import React from 'react'
import Footer from '../Footer'

export default function Insights() {
  return (
    <div className='h-auto w-full flex flex-col justify-start items-left gap-10'>
<div className='w-full py-20 pl-16'>
<h1 className='text-8xl font-[serif,sans] font-bold'>Insights</h1>
</div>
<div className='border-t border-t-zinc-300 flex flex-col justify-start px-16 py-10 gap-10'>
    <div className='w-full h-auto flex justify-betwen items-start'>
<div className='w-1/2'>
<h1 className='text-md'> Our Insights:</h1>
</div>
<div className='w-1/2 flex flex-col justify-start items-start gap-5'>
<div className='flex justify-start w-full space-x-1'>
<button type='button'className='rounded-full bg-black text-white px-5 py-2'>ALL</button>
<button type='button'className='px-2 py-1 rounded-full border border-black hover:bg-black hover:text-white'>NEWS</button>
<button type='button'className='px-2 py-1 rounded-full border border-black hover:bg-black hover:text-white'>PITCH DECK</button>
<button type='button'className='px-2 py-1 rounded-full border border-black hover:bg-black hover:text-white'>PRESENTATION AGENCY</button>
<button type='button'className='px-2 py-1 rounded-full border border-black hover:bg-black hover:text-white'>PRESENTATION TEMPLATE</button>
</div>

<div className=' flex justify-start w-full space-x-1'>
<button type='button'className='px-2 py-1 rounded-full border border-black hover:bg-black hover:text-white'>PRESENTATION AGENCY</button>
<button type='button'className='px-2 py-1 rounded-full border border-black hover:bg-black hover:text-white'>PRESENTATION TEMPLATE</button>
</div>

</div>

    </div>
    <div className='flex justify-start items-start gap-4 w-full'>
        <div className='flex-col items-start w-[320px] space-y-1'>
    <div className='h-[350px] w-[320px]  bg-gray-500 bg-[url("https://ochi.design/wp-content/uploads/2023/11/v3_0-324x324.png")] bg-cover bg-center hover:bg-[length:115%] transition-all duration-1000 rounded-lg'>
</div>
<h1 className='text-md'>Why hiring a presentation agency will boost your business.</h1>
<p className='text-md text-gray-500 underline underline-offset-4'>By Ihor Hulyahroskyy</p>
<p className='text-md text-gray-500'>09 Aug 24</p>
    </div>
    <div className='flex-col items-start w-[320px] space-y-1'>
    <div className='h-[200px] w-[320px]  bg-gray-500 bg-[url("https://ochi.design/wp-content/uploads/2024/07/trawa_website-324x243.png")] bg-cover bg-center hover:bg-[length:115%] transition-all duration-1000 rounded-lg'>
</div>
<h1 className='text-md'>Our client trawa raises 10M in seed funding.</h1>
<p className='text-md text-gray-500 underline underline-offset-4'>By Kseniia Palamarchuk</p>
<p className='text-md text-gray-500'>31 Jul 24</p>
    </div>
    <div className='flex-col items-start w-[320px] space-y-1'>
    <div className='h-[450px] w-[320px]  bg-gray-500 bg-[url("https://ochi.design/wp-content/uploads/2024/08/Frame-41265-324x394.png")] bg-cover bg-center hover:bg-[length:115%] transition-all duration-1000 rounded-lg'>
</div>
<h1 className='text-md'>The art of presenting: Tips on successful presentation & lessons learned.</h1>
<p className='text-md text-gray-500 underline underline-offset-4'>By Ihor Hulyahroskyy</p>
<p className='text-md text-gray-500'>26 May 23</p>
    </div>
    <div className='flex-col items-start w-[320px] space-y-1'>
    <div className='h-[370px] w-[320px]  bg-gray-500 bg-[url("https://ochi.design/wp-content/uploads/2022/12/front-5_optimized-324x324.jpg")] bg-cover bg-center hover:bg-[length:115%] transition-all duration-1000 rounded-lg'>
</div>
<h1 className='text-md'>Developing company wide presentation template for Premium Blend.</h1>
<p className='text-md text-gray-500 underline underline-offset-4'>By Ihor Hulyahroskyy</p>
<p className='text-md text-gray-500'>07 Dec 22</p>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}
