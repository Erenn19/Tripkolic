"use client"

import React, { useState } from 'react'
import { MenuType } from '../data/menuData'

type Props = {
    menu : MenuType[]
}
export const  Menu:React.FC<Props>=({menu})=>{
   const [activeMenu]= useState<string>('Personal')

  
  return (
    <div className="border-2 border-solid border-gray-200 bg-white rounded-lg shadow-lg p-6 w-80 flex flex-col justify-center">
    <div className='text-black px-4 text-md gap-3 flex flex-col'>
       {
        menu.map((x,index) => (
            <div  key={index} className={`font-bold  p-2 px-5 rounded-lg justify-between  ${x.name == activeMenu ? 'bg-[#F7CA7A]' : ' '}  `}>
                {x.name}
          </div>
        )
    )
       }
       

    
    </div>
</div>
  )
}
