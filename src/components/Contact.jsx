import React, { useState } from 'react';
import Title from './title';
import axios from 'axios';
import { BASE_URL } from '../utility/baseURL';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    gmail: '',
    text: ''
  });
  const [message, setmessage] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post(`${BASE_URL}/send-email`, formData);
        if (res.status === 200) {
            console.log('Email sent successfully');
            formData.name=''
            formData.gmail=''
            formData.text=''
            setmessage('your message sent successfully');
        } else {
          setmessage('your message failed to send');

            console.error('Error sending email');
        }
    } catch (error) {
        console.error('Error sending email:', error);
    }
};


  return (
    <div className="mt-[60px] max-sm:mt-[40px]">
      <Title title="Contact Us" />
      <form className='text-center w-[50%] max-sm:w-[80%]  mx-auto flex flex-col items-center' onSubmit={handleSubmit}>
        <p className={`${message?'p-2':''} font-mono bg-kfif rounded-3xl w-[80%] max-sm:w-full  text-green-500  mb-10`}>{message}</p>
        <input name='name' className='  max-sm:text-xs p-2 rounded-2xl mb-5 bg-black outline-none w-[80%] max-sm:w-full  border-[1px] border-white text-white opacity-70 font-mono' placeholder='Name' type="text" value={formData.name} onChange={handleChange} />
        <input name='gmail' className='  max-sm:text-xs p-2 rounded-2xl mb-5 bg-black outline-none w-[80%] max-sm:w-full  border-[1px] border-white text-white opacity-70 font-mono' placeholder='Email' type="text" value={formData.gmail} onChange={handleChange} />
        <textarea name='text' className='  max-sm:text-xs p-2 rounded-2xl mb-5 bg-black outline-none w-[80%] max-sm:w-full  border-[1px] border-white text-white opacity-70 font-mono h-[140px] sm:h-[200px]' placeholder='Your message' value={formData.text} onChange={handleChange} />
        <button className="p-2 rounded-2xl bg-or border-[1px]  text-black   mt-5  font-mono w-[30%] max-sm:w-full max-sm:p-1 max-sm:text-xs" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
