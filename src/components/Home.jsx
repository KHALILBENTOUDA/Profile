import React from 'react'
import me from '../assets/images/coding.d7abfb42ee76cab24e35.png'
import { BASE_URL } from '../utility/baseURL';
import axios from 'axios';
const Home = () => {
  const handleDownload = () => {

    // Make a GET request to download the PDF file
    axios({
      url:`${BASE_URL}/download`,
      method: 'GET',
      responseType: 'blob', // Important: responseType should be 'blob' to handle binary data
    })
      .then(response => {
        // Create a temporary link to download the file
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'KHALIL_CV.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(error => {
        console.error('Error downloading the file:', error);
      });
  };
  return (
    <section className='py-[60px] max-sm:pt-[10px]  container  w-[80%] mx-auto'>
      <div className=" grid grid-cols-1  lg:grid-cols-2  ">
        <div className="mt-[100px] relative max-sm:text-center">
            <h1 className='font-bold text-[30px] py-[30px] max-sm:text-center max-sm:text-[26px]    '>
                Hello,<span className='text-or'>I'm</span><br /> BEN TOUDA KHALIL <br /> A Full stack developer
            </h1>
            <p className='text-[10px] opacity-50 font-mono max-sm:text-center '>As a Full Stack Web Developer, I specialize in crafting comprehensive web solutions, proficiently navigating both front-end and back-end development realms. My expertise lies in leveraging a suite of cutting-edge technologies that align with industry standards and market demands. I have a proven track record of conceiving and executing a diverse array of projects, showcasing my adeptness across the entire development spectrum.</p>
            <button className='border-[0.1px] border-white py-[8px] px-[30px] opacity-30 text-[10px] font-semibold my-[30px]' onClick={handleDownload}>DOWNLOAD CV </button>
            <div className="text-[20px]   opacity-90 flex max-sm:justify-center">
                <i className='fa-brands fa-facebook pr-[20px]'></i>
                <i className='fa-brands fa-whatsapp pr-[20px]'></i>
                <i className='fa-brands fa-github pr-[20px]'></i>
                <i className='fa-brands fa-linkedin pr-[20px] max-sm:pr-0'></i>
            </div>
            <div className='w-[100px] h-[25px] absolute bottom-0  max-sm:hidden   border-l-[0.1px] border-b-[0.1px] border-or'></div>
        </div>
      
      <div className=" z-[-1] border-r-[0.1px] border-b-[0.1px] h-full  border-or max-sm:mt-[50px]">
        <img src={me} className='w-full h-full'  alt="" />
      </div>
      </div>

    </section>
  )
}

export default Home
