import React from 'react'
import Title from './title'
import Slider from 'react-slick'
import tailwind from '../assets/images/tailwind.svg'
import mongodb from '../assets/images/mongodb.svg'
import mysql from '../assets/images/mysql.svg'
import socket from '../assets/images/socket.svg'
import express from '../assets/images/express.svg'

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 5000,
  cssEase: 'linear',
};

const SkillItem = ({ iconClass, title, description }) => (
  <div className="text-center  pt-8 px-3 max-md:px-1">
    <div>
      <i className={`${iconClass} text-7xl  text-or max-md:text-4xl `}></i>
    </div>
    <div>
      <h1 className="font-bold text-lg p-2">{title}</h1>
      <p className="text-xs opacity-50 font-mono  max-sm:text-[6px]  ">{description}</p>
    </div>
  </div>
);

const Skills = () => {
  const skillsData = [
  
    {
      iconClass: 'fab fa-node',
      title: 'Node JS',
      description:
        'JavaScript runtime for server-side applications',
    },
    {
      iconClass: 'fab fa-js',
      title: 'JavaScript',
      description:
        'Programming language used for adding interactivity to web pages.',
    },
    {
      iconClass: 'fab fa-react',
      title: 'React JS',
      description:
        'JavaScript library for building user interfaces.',
    },
    {
      iconClass: 'fa-solid fa-database',
      title: 'MySql',
      description:
        'Open-source database using SQL for data management. Fast, reliable, widely used',
    },
    {
      iconClass: 'fab fa-html5',
      title: 'Html5',
      description:
        'Hypertext Markup Language, used for creating web pages and web applications.',
    },
    {
      iconClass: 'fab fa-css3',
      title: 'Css3',
      description:
        'Cascading Style Sheets, used for styling web pages.',
    },
    {
      iconClass: 'fab fa-php',
      title: 'Php',
      description:
        'Server-side scripting language for web development',
    },
    {
      iconClass: 'fab fa-python',
      title: 'Python',
      description:
        'High-level, versatile programming language',
    },
    // Add more skills data as needed
  ];

  return (
    <section className='container pt-[50px] text-white w-[80%] mx-auto'>
       <Title title={"Skills"} name="Skills"/>
       <Slider {...settings}>
        {skillsData.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
       
      </Slider>
    </section>
  )
}

export default Skills
