
import {MdArrowOutward} from 'react-icons/md'

export default function About() {
  return (
    <div className='flex-col items-left'>
    <div className='h-auto w-full flex justify-between items-start px-16 py-10'>
        <div className='w-1/2'>
<h1 className='text-md'>About Us:</h1>
        </div>
        <div className='w-1/2 flex'>
<div className='w-1/2 flex-col items-start space-y-10 px-10'>
<p className='text-md'>
In Ukrainian, ochi - means eyes. It's not just a beautiful word, but our philosophy. Almost everything that needs to be communicated is better shown than explained.</p>
<p className='text-md'>We believe a great presentation evokes interest and drives business results far better than any saying can. Hence, we founded ochi to help you persuade colleagues and clients by creating eye-opening presentations.</p>

</div>
<div className='w-1/2'>
 <div className=" flex justify-end items-center space-x-2">
                  <button
                    type="button"
                    className="border-black border w-[140px] hover:bg-black hover:text-white rounded-full p-2"
                  >
                    Our Works
                  </button>
                  <div className="h-[40px] w-[40px] rounded-full border border-black flex justify-center items-center bg-white text-black hover:text-white hover:bg-black   font-semibold">
                    <MdArrowOutward />
                  </div>
                </div>
</div>
        </div>
    </div>
    <h1 className='text-6xl font-medium w-[65%] py-16 pl-16'>We save businesses from ugly and ineffective presentations.</h1>
    <div className='h-auto w-full flex justify-between items-start px-16 py-10 border-t border-t-zinc-300'>
        <div className='w-1/2'>
<h1 className='text-md'>We are ochi design :</h1>
        </div>
        <div className='w-1/2 flex'>
<div className='w-1/2 flex-col items-start space-y-10 px-10'>
<p className='text-md'>

The team of designers, storytellers, and passionate collaborators, who work together to create industry-shifting presentations that win people's hearts and minds.</p>
<p className='text-md'>And we strive to become one of the most recognizable & influential presentation agencies of the time who does that.</p>

</div>

        </div>
    </div>
    <div className='h-[70vh] w-full flex justify-center items-center p-16 mt-16'>
  <img src={"https://ochi.design/wp-content/uploads/2022/05/017091720030-1340x858.jpg"} alt='name' className='rounded-xl w-full'/>
    </div>
    </div>
  )
}
