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
            In the realm of Full Stack Web Development, I excel as a skilled developer of digital solutions that seamlessly integrate front-end and back-end technologies. With a keen understanding of both domains, I specialize in crafting solutions that meet and exceed expectations.<br /><br />

My expertise lies in leveraging a diverse range of modern technologies to address the ever-changing needs of the industry and users alike. Each project in my portfolio reflects my ability to translate ideas into tangible, user-friendly experiences.<br /><br />

Throughout my journey, I've encountered various challenges that have honed my skills and deepened my understanding of web development. From concept to execution, I navigate these challenges with confidence, ensuring that every solution I deliver is not only functional but also innovative and impactful.<br /><br />
              <div className="grid grid-cols-2 max-sm:grid-cols-1">
                <p className='text-or text-[12px] max-sm:text-[9px] pt-2 '>Age : <span className='text-white'>20</span></p>
                <p className='text-or text-[12px] max-sm:text-[9px] pt-2 '>Gander : <span className='text-white'>Male</span></p>
                <p className='text-or text-[12px] max-sm:text-[9px] pt-2 '>Phone : <span className='text-white'>+212 6 07 76 04 84</span></p>
                <p className='text-or pt-2  max-sm:text-[9px] '>Email : <span className='text-white'>bentouda.khalil@gmail.com</span></p>
                <p className='text-or text-[12px] max-sm:text-[9px] pt-2 '>Langages : <span className='text-white'>Arabic,English,French</span></p>
                <p className='text-or text-[12px] max-sm:text-[9px] pt-2 '>Country : <span className='text-white'>Morroco</span></p>
                // here
              </div>
            </p>
            <button className='border-[0.1px] border-white py-[8px] px-[30px] opacity-30 text-[10px] font-semibold my-[20px]'> Show More ...</button>
        </div>
      </div>
    </section>
  )
}

export default About
