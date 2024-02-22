import React from 'react'

const Title = ({title,name}) => {
  return (
    <div className="flex justify-center pb-[50px] max-sm:pb-[30px]">
           <div className="about mx-auto">
                <h1 name={name}  className='text-[30px] max-sm:text-[20px]  font-semibold '>{title}</h1>
           </div>
    </div>
  )
}

export default Title
