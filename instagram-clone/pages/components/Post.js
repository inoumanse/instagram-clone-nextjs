import React from 'react'
import { DotsHorizontalIcon, HeartIcon, PaperAirplaneIcon, BookmarkIcon, EmojiHappyIcon } from '@heroicons/react/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'
const Post = () => {
  return (
    <div className='bg-white my-7 border rouder-sm'>
        <div className='flex items-center p-4'>
            <div className="avatar mr-3">
                <div className=" rounded-full w-10 h-10">
                    <img src="https://reqres.in/img/faces/8-image.jpg" />
                </div>
            </div>
            <p className='flex-1 text-sm font-semibold'>username</p>
            <DotsHorizontalIcon className='h-5'/>
        </div>
        <img className="w-full" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt=""/>
        <div className='flex justify-between p-4'>
            <div className='flex space-x-4 items-center'>
                <HeartIcon className="h-6 cursor-pointer"/>
                <FontAwesomeIcon className='cursor-pointer scale-x-[-1]' icon={faComment} size="lg"/>
                <PaperAirplaneIcon className="h-6 cursor-pointer rotate-[60deg] -translate-y-1"/>
            </div>
            <BookmarkIcon className='h-6 cursor-pointer'/>
        </div>
        <div className='px-4 truncate'>
            <p className='font-semibold mb-1 text-sm'>23 Likes</p>
            <span className='font-semibold mr-1 text-sm'>inouman</span>
            Nice beach!!
        </div>
        <div className='px-4 text-sm mb-1 text-gray-400 cursor-pointer'>View all 14 comments</div>
        <div className='px-4 flex justify-between'>
            <div>
                <span className='font-semibold mr-1 text-sm'>Alan</span>
                That's great!!😁😍
            </div>
            <HeartIcon className='h-4 cursor-pointer'/>
        </div>
        <div className='px-4 flex justify-between'>
            <div>
                <span className='font-semibold mr-1 text-sm'>John</span>
                That's good!!😍
            </div>
            <HeartIcon className='h-4 cursor-pointer'/>
        </div>
        <div className='px-4 mt-2 text-gray-400 text-xs mb-4'>2 DAYS AGO</div>
        <hr/>
        <form action='' className='flex items-center p-4'>
            <EmojiHappyIcon className='h-7 cursor-pointer m-2'/>
            <input type="text" className="border-none flex-1 focus:ring-0 outline-none" placeholder='Add a comment...'></input>
            <button className='font-semibold text-blue-400'>Post</button>

        </form>
    </div>
  )
}

export default Post