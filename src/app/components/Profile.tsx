import React from 'react'
import { ProfileCard } from './ProfileCard'
import { Menu } from './Menu'
import { MenuData } from '../data/menuData'
export default function Profile() {
  return (
    <div className='px-14 flex flex-col gap-2 bg-white'>
            <ProfileCard name='Orca Travel Co.ltd' hosting={4} rating={4.80} reviews={100} role='Super Host'/>
            <Menu menu={MenuData}  />
    </div>
  )
}


