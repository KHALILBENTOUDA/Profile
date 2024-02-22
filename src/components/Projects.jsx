import React from 'react'
import Title from './title'
import Slider from 'react-slick'
import chat from '../assets/images/2C8E4266-4745-4411-A750-A26301F3218D_1_201_a.jpeg'
import tail from '../assets/images/B5142DDD-310E-4E79-8D0A-4C6D9F414442.jpeg'
import fruit from '../assets/images/5ACE2C40-22BC-4618-904E-3B185A3D8B2D.jpeg'
import dash from '../assets/images/302807CD-FDD2-4E23-BF3E-502943BA4445.jpeg'
import back from '../assets/images/original-def3fcbb261ef173038156335951c52f-removebg-preview.png'
import tailwind from '../assets/images/tailwind.svg'
import mongodb from '../assets/images/mongodb.svg'
import front from '../assets/images/Premium Vector _ Front end development flat_.jpeg'
import mysql from '../assets/images/mysql.svg'
import socket from '../assets/images/socket.svg'
import express from '../assets/images/express.svg'



const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 5000,
  cssEase: 'linear',
};

const SkillItem = ({ iconClass, title,image,skills,imgsk,link }) => (
  <a className="p-2 max-md:px-1 text-start  rounded-xl bg-kfif cursor-pointer  " href={`${link}`}>
      {/* <i className={`${iconClass} text-7xl  text-or max-md:text-4xl `}></i> */}
      <img src={image} className='h-[200px] w-full rounded-xl'  alt="" />
    <div>
      <h1 className="font-bold text-sm py-4 w-full  text-start ">{title}</h1>
      <div className="flex   ">
      <p className="text-sm w-[50%]  opacity-50 font-mono   max-md:text-[8px]">Keyword </p>
      <div className="flex w-full items-center  justify-end gap-2">
        {
          skills.map((ele)=>{
            return (
              <i className={`fa-brands fa-${ele}`}></i>
            )
          })
        }
        {
          imgsk?.map((img)=>{
            return(
              <img src={img} className='w-5' />
            )
          })
        }
      </div>
      </div>
    </div>
  </a>
);

const Projects = () => {
  const skillsData = [
  
    {
      title: 'Full Stack Matcha Chat_Application',
      image:chat,
      skills:['react','node','express','socket.io','mysql'],
      imgsk:[express,socket,mysql],
      link:"https://matcha-avzq.onrender.com/"
    },
    {
      title: 'GreenShop Fruits_Shop',
      image:fruit,
      skills:['react','css3'],
      link:"https://fruitshop-6m6v.onrender.com"
    },
    {
      title: 'Dashboard',
      image:dash,
      skills:['react','css3'],
      link:"https://dashboard-4dly.onrender.com"
    },
    {
      title: 'Tailwind_Project',
      image:tail,
      skills:['Tailwind','react'],
      imgsk:[tailwind],
      link:"https://tailwindpro.onrender.com"

    },
    {
      title: 'CSS WebSite',
      image:front,
      skills:['css3','html5','js'],
      link:"https://github.com/KHALILBENTOUDA/desing_css_project"

    },
    {
      title: 'BackEnd Courses_Store',
      image:back,
      skills:['node'],
      imgsk:[express,mongodb],
      link:"https://github.com/KHALILBENTOUDA/BackEnd_Courses_store.git"

    },
    {
      title: 'BackEnd Book Store',
      image:back,
      skills:['node','Express','MongoDB','react'],
      imgsk:[express,mongodb],
      link:"https://github.com/KHALILBENTOUDA/book_store.git"

    },
    // Add more skills data as needed
  ];

  return (
    <section className='container pt-[50px] max-sm:pt-[0px] text-white w-[80%] mx-auto'>
       <Title title={"Projects"}/>
       <div className="grid  xl:grid-cols-4  md:grid-cols-3  sm:grid-cols-2 max-sm:grid-cols-1  gap-3">
        {skillsData.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
        <a className="h-full flex items-center justify-around text-center cursor-pointer" href='https://github.com/KHALILBENTOUDA'>

          <div className="text-or max-sm:text-sm">For More Details <i className='fa-solid fa-angle-double-right ml-2'></i></div>
        </a>
       </div>
    </section>
  )
}

export default Projects
