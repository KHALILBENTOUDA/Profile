import React from 'react'
import aboutimg from '../assets/images/about00.24000aa6a06ed2b3bff5.png'
import Title from './title'
const About = () => {
  return (
    <section className='container mx-auto pt-[50px] max-sm:pt-[30px]  w-[80%]'>

      <Title title={"About Us"}/>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="w-[90%] ">
            <img src={aboutimg} alt="" />
        </div>
        <div className="pt-[40px]">
            <h1 className='font-bold text-[21px] py-[30px]  '>
                Hello,<span className='text-or'>I'm</span> BEN TOUDA KHALIL  A Full stack developer
            </h1>
            <p className='text-[11px] max-sm:text-[9px] opacity-50 font-mono '>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias possimus omnis itaque deserunt fugiat tempore officiis optio corporis, sint aut iste nostrum sed porro facilis exercitationem aperiam consequatur reiciendis quam?<br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rerum nam ab a, consequuntur, necessitatibus ea facilis eaque nobis dicta officiis optio. Adipisci sit eveniet sunt sapiente error. Dolor, sequi? <br /><br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis vel iusto laborum ipsa vero ut tempora dolorem incidunt unde, eius possimus aliquid odio numquam excepturi. Doloremque aperiam maiores aliquid suscipit. <br /><br />
              <div className="grid grid-cols-2 max-sm:grid-cols-1">
                <p className='text-or text-[12px] max-sm:text-[9px] pt-2 '>Age : <span className='text-white'>20</span></p>
                <p className='text-or text-[12px] max-sm:text-[9px] pt-2 '>Gander : <span className='text-white'>Male</span></p>
                <p className='text-or text-[12px] max-sm:text-[9px] pt-2 '>Phone : <span className='text-white'>+212 607760484</span></p>
                <p className='text-or pt-2  max-sm:text-[9px] '>Email : <span className='text-white'>benkhaliltouda3201@gmail.com</span></p>
                <p className='text-or text-[12px] max-sm:text-[9px] pt-2 '>Langages : <span className='text-white'>Arabic,English</span></p>
                <p className='text-or text-[12px] max-sm:text-[9px] pt-2 '>Country : <span className='text-white'>Morroco</span></p>
              </div>
            </p>
            <button className='border-[0.1px] border-white py-[8px] px-[30px] opacity-30 text-[10px] font-semibold my-[20px]'> Show More ...</button>
        </div>
      </div>
    </section>
  )
}

export default About
