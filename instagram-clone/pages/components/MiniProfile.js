import React from 'react'

const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-10 ml-10">
        <div className="avatar">
            <div className=" rounded-full w-14 h-14">
                <img src="https://reqres.in/img/faces/8-image.jpg" />
            </div>
        </div>
        <div className='flex-1 mx-4'>
            <h2 className='font-bold'>Nouman.Ibrahim</h2>
            <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
        </div>
        <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  )
}

export default MiniProfile