import React from 'react'
import ProfileSection from './ProfileSection'
type Props = {
    name :string
    role : string
    rating : number
    reviews : number
    hosting: number
}
export const ProfileCard:React.FC<Props>=({hosting,name,rating,reviews,role}) =>{
  return (
    <div className="border-2 border-solid border-gray-200 bg-white rounded-lg shadow-lg p-6 w-80 flex flex-col justify-center items-center ">
    <ProfileSection />
     <h2 className="text-xl font-bold  text-black">{name}</h2>
     <p className="text-black pb-3">{role}</p>
     <div className = "text-black flex flex-row justify-between w-full">
        <div className='flex flex-col items-center'>
            <div className='text-l font-bold'>
                {rating}
            </div>
            <div className='text-sm'>
                Rating
            </div>
        </div>     
        <div className='flex flex-col items-center'>
            <div className='text-l font-bold'>
                {reviews}
            </div>
            <div className='text-sm'>
                Reviews
            </div>
        </div>   
        <div className='flex flex-col items-center'>
            <div className='text-l font-bold'>
                {hosting}
            </div>
            <div className='text-sm'>
                Years hosting 
            </div>
        </div>
     </div>
    </div>
  )
}
