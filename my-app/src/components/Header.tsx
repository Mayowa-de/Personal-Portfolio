import {Sun, Moon} from 'lucide-react'
import {Menu, X} from 'lucide-react'

export default function Header() {
  return (
    <header className=" text-white py-4 flex justify-between px-4 text-center items-center">
        <h1 className='text-2 font-bold text-[#cf6223]'>MayorTech</h1>

        <div className='flex gap-2 justify-center'>
        {/* <div className='bg-white rounded-full text-yellow-600 text-center justify-center flex p-1 cursor-pointer'>
           <Sun/>
        </div> */}
        <div className=' rounded p-1 justify-center text-center cursor-pointer md:hidden'>
          <Menu className='text-[#ed7e39] '/>
        </div>
        </div>
    </header>
  )
}
