import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'

export const Profile = ({image,title,name}) => {
  return (
    <div className='flex flex-col items-center '>
      {!name && !title && <BsPersonCircle className=' mt-14 h-10 w-10 transition-opacity duration-500'/>}
        <div className=' rounded-full h-28 w-28 overflow-hidden transition-opacity duration-500'>{image}</div>
        {name && title && (
          <>
            <div className='flex flex-col items-center'>
              <h2 className='text-xl font-semibold mt-2'>{name}</h2>
              <h3 className='text-sm mt-2'>{title}</h3>
            </div>
          </>
        )}
        
          
    </div>
  )
}

