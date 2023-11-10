"use client"

import Link from 'next/link'

const MenuLink = ({item}) => {

  return (
    <Link href={item.path}>
        <div className='flex items-center hover:bg-gray-200 text-white cursor-pointer my-4 p-3 rounded-lg inline-block'>
        {item.icon}
        <h2 className='pl-2 text=white'>{item.title}</h2>
        </div>
    </Link>
  )
}

export default MenuLink