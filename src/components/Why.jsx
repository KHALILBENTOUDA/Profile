


import React from 'react'
import Title from './title'
import Slider from 'react-slick'
import tailwind from '../assets/images/tailwind.svg'
import mongodb from '../assets/images/mongodb.svg'
import mysql from '../assets/images/mysql.svg'
import socket from '../assets/images/socket.svg'
import express from '../assets/images/express.svg'
import com from '../assets/images/comminucative.314f6a032847567cc076.png'
import col from '../assets/images/collab.217bcd6996bc61605a58.png'
import hard from '../assets/images/hardworking.add85993dd347fefc1c9.png'

const SkillItem = ({  iconClass, title,image,skills,imgsk,link,desc  }) => (
      <div className="p-2 max-md:px-1 flex flex-col justify-center items-center  rounded-xl  cursor-pointer text-center ">
      {/* <i className={`${iconClass} text-7xl  text-or max-md:text-4xl `}></i> */}
      <img src={image} className=' w-[70%] max-sm:w-[50%] rounded-xl'  alt="" />
    <div className=' h-[150px] text-center'>
      <h1 className="font-bold text-xl max-sm:text-sm  py-4 w-full ">{title}</h1>
      <p className="text-xs opacity-50 font-mono  max-md:text-[8px] py-3 ">{desc}</p>
      </div>

  </div>
);

const Why = () => {
  const skillsData = [
  
      {
            title: 'Comminucations',
            image:com,
            desc:`In this sphere,I am good in communication,fostering team unity and clarity, enabling smooth collaboration and goal achievement`
         
          },
          {
            title: 'Collaborative',
            image:col,
            desc:'In this aspect, I am the essence of collaboration, seamlessly uniting strengths, and propelling shared success through teamwork.'
          },
          {
            title: 'HardWorking',
            image:hard,
            desc:'I dedicating myself to every task and challenge with unwavering determination.'
          },
  ];

  return (
    <section className=' py-[120px] max-sm:py-[50px] w-[80%]  text-white  mx-auto'>
       <Title title={"Why Hire Me ?"} name="Why"/>
       <div className="flex items-center justify-between py-5 max-sm:flex-col">
        {skillsData.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
       </div>
       
    </section>
  )
}

export default Why
