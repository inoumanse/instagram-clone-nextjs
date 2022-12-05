import React from 'react'

const Suggestions = () => {
  return (
    <div className='mt-4 ml-10'>
        <div className='flex justify-between text-sm mb-5'>
            <h3 className='text-sm font-semibold text-gray-400'>Suggestions</h3>
            <button className='text-gray-600 font-semibold'>See All</button>
        </div>

        <div className="flex items-center justify-between mt-3">
            <div className="avatar">
                <div className=" rounded-full w-8 h-8">
                    <img src="https://reqres.in/img/faces/1-image.jpg" />
                </div>
            </div>
            <div className='flex-1 ml-4'>
                <h2 className='font-semibold text-sm'>Johndoe</h2>
                <h3 className='text-xs text-gray-400'>New to Instagram</h3>
            </div>
            <button className='text-blue-400 text-xs font-bold'>Follow</button>
        </div>

        <div className="flex items-center justify-between mt-3">
            <div className="avatar">
                <div className=" rounded-full w-8 h-8">
                    <img src="https://reqres.in/img/faces/12-image.jpg" />
                </div>
            </div>
            <div className='flex-1 ml-4'>
                <h2 className='font-semibold text-sm'>Sarah</h2>
                <h3 className='text-xs text-gray-400'>New to Instagram</h3>
            </div>
            <button className='text-blue-400 text-xs font-bold'>Follow</button>
        </div>

        <div className="flex items-center justify-between mt-3">
            <div className="avatar">
                <div className=" rounded-full w-8 h-8">
                    <img src="https://reqres.in/img/faces/3-image.jpg" />
                </div>
            </div>
            <div className='flex-1 ml-4'>
                <h2 className='font-semibold text-sm'>Emmawong</h2>
                <h3 className='text-xs text-gray-400'>New to Instagram</h3>
            </div>
            <button className='text-blue-400 text-xs font-bold'>Follow</button>
        </div>

        <div className="flex items-center justify-between mt-3">
            <div className="avatar">
                <div className=" rounded-full w-8 h-8">
                    <img src="https://reqres.in/img/faces/10-image.jpg" />
                </div>
            </div>
            <div className='flex-1 ml-4'>
                <h2 className='font-semibold text-sm'>Byronfields</h2>
                <h3 className='text-xs text-gray-400'>New to Instagram</h3>
            </div>
            <button className='text-blue-400 text-xs font-bold'>Follow</button>
        </div>


    </div>
  )
}

export default Suggestions