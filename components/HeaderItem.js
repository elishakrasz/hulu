import React from 'react'

const HeaderItem = ({ title, Icon }) => {
  return (
    <div className=' flex flex-col cursor-pointer items-center w-12 sm:12 hover:text-white group'>
        <Icon className='h-8 mb-1 group-hover:animate-bounce' />
        <p className='opacity-0 group-hover:opacity-100 tracking-widest'>{title}</p>
    </div>
  )
}

export default HeaderItem