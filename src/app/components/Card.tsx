import React from 'react'
import { ITrip } from '../../models/ITrip'

export default function Card(props: ITrip) {

  const truncateText = (text: string, maxLength: number = 120) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  return (
    <div className='max-w-sm overflow-hidden bg-white rounded-lg shadow-xl'>
      <div className='relative w-full aspect-video'>
        <img src={props.coverImage} alt='props_image' className='object-cover w-full h-full' />
      </div>
      <div className='px-6 py-4 bg-slate-300'>
        <div className='font-bold text-xl mb-2'>{props.title}</div>
        <p className='text-gray-700 text-base max-'>
          {truncateText(props.description)}
        </p>
      </div>
    </div>
  )
}
