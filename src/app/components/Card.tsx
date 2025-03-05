import React from 'react'

export default function Card(props: ITrip) {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img src={props.coverImage} alt='props_iamge' />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{props.title}</div>
        <p className='text-gray-700 text-base'>
          {props.description}
        </p>

      </div>
    </div>
  )
}
