import Ecommerce from '../assets/ecommerce1 (2).png'
import Blog from '../assets/blog1.png'


export default function Project() {
  return (
    <section className='flex flex-col gap-10 p-4  mt-4 '>
        <h4 className='text-[#cf6223]'>FEATURED WORK</h4>

        <p>Projects I'm Proud Of</p>
        <div className='flex flex-col gap-6 md:grid md:grid-cols-4 '>
        <div className='flex flex-col gap-4 rounded shadow bg-[#030a13] pb-4 '>
    
            <img src={Ecommerce} alt="" />
            <div className='flex flex-col gap-2 px-4'>
            <h4>Ecommerce website</h4>
            <p>

            </p>
            <ul className='flex gap-4 text-sm'>
                <li>REACT</li>
                <li>Tailwindcss</li>
                <li></li>
            </ul>
            </div>
        </div>
        <div className='flex flex-col gap-4 rounded shadow bg-[#030a13] pb-4'>
            <img src={Blog} alt="" />
            <div className='flex flex-col gap-2 px-4'>
            <h4>Blog website</h4>
            <p>

            </p>
            <ul className='flex gap-4 text-sm'>
                <li>REACT</li>
                <li>Tailwindcss</li>
                <li></li>
            </ul>
            </div>
        </div>
        {/* <div className='flex flex-col gap-4 rounded shadow'>
            <img src={Browser} alt="" />
            <h4>Browser website</h4>
            <p>

            </p>
            <ul className='flex gap-4'>
                <li>REACT</li>
                <li>Tailwindcss</li>
                <li></li>
            </ul>
        </div> */}
        </div>
    </section>
  )
}
