import { CogIcon } from '@heroicons/react/outline'
import React, { useState, initialState } from 'react'
import ProfileStories from './ProfileStrories'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faGripVertical } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { PlayIcon, BookmarkIcon } from '@heroicons/react/outline'
import axios from 'axios'
import { useEffect } from 'react';
import Image from 'next/legacy/image'
import { HeartIcon }  from '@heroicons/react/solid'

const Profile = () => {
    const [images, setImages] = useState([])
    useEffect (() => {
        const fetchData = async ()=>{
            const {data:{results}} = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=office&client_id=${process.env.NEXT_PUBLIC_client_id}`)
            const edited_result = results.map(item=>item.links.download)
            setImages(edited_result)
        }
        fetchData();
    }, [])

  return (
    <div className="max-w-6xl mx-5 p-10 xl:mx-auto">
        <div className="grid grid-cols-4 gap-4">
            <div className="avatar justify-center">
                <div className=" rounded-full w-36 h-36">
                    <img src="https://reqres.in/img/faces/5-image.jpg"/>
                </div>
            </div>
            <div className="col-span-2">
                <span className="text-gray-700 text-2xl mr-4">Nouman.Ibrahim</span>
                <div className="cursor-pointer inline text-sm text-gray-700
                font-semibold p-1 px-2 border border-gray-200 rounded mr-4">Edit Profile</div>
                <CogIcon className='cursor-pointer h-6 inline flex-1'/>
                <div className="mt-4 flex">
                    <div><span className="font-semibold">200</span> posts</div>
                    <div className="ml-4"><span className="font-semibold">200</span> followers</div>
                    <div className="ml-4"><span className="font-semibold">200</span> following</div>
                </div>
                <div>
                    <div className=" pt-3">
                        <span className="text-lg font-semibold text-gray-700">emma.wong javascript</span>
                    </div>
                    <div className=" pt-3">
                        <p className="text-base text-blue-700 mr-2">#javascript #vuehs #reader #blogger #digitalmarketer</p>
                        <p className="text-base font-medium text-blue-700 mr-2">https://www.youtube.com/channel/UCu4-4FnutvSHVo9WHvq80WwShWw/join/join</p>
                    </div>
                </div>
            </div>
        </div>
        <ProfileStories/>
        <hr className='border-gray-500 mt-6'></hr>
        <div className='flex justify-center gap-10'>
            <button className='focus:border-t border-gray-800 py-4 text-sm 
                        font-semibold flex gap-2 text-gray-400 focus:text-gray-600'><FontAwesomeIcon icon={faGripVertical} size="lg"/>POSTS</button>
            <button className='focus:border-t border-gray-800 py-4 text-sm 
                        font-semibold flex gap-2 text-gray-400 focus:text-gray-600'><PlayIcon className='h-6'/> VIDOES</button>
            <button className='focus:border-t border-gray-800 py-4 text-sm 
                        font-semibold flex gap-2 text-gray-400 focus:text-gray-600'><BookmarkIcon className="h-6"/> SAVED</button>
            <button className='focus:border-t border-gray-800 py-4 text-sm 
                        font-semibold flex gap-2 text-gray-400 focus:text-gray-600'><FontAwesomeIcon icon={faAddressCard} size="lg"/>TAGGED</button>
        </div>
        <div className="grid grid-cols-3 gap-5">
            {images.map(image=><div className='h-64 overflow-hidden'>
                <div className='relative group cursor-pointer'>
                    <div className='relative h-64'>
                        <Image 
                            layout="fill"
                            objectFit="cover" 
                            src={image} alt=""/>
                    </div>
                    <div className="absolute top-0 opacity-0 group-hover:opacity-100 left-1/2 
                                    -translate-x-1/2 w-full h-full bg-black-rgba flex text-white 
                                    justify-center items-center space-x-3">
                        <div className='space-x-1'>
                            <HeartIcon className='h-6 inline'/>
                            <span>3</span>
                        </div>
                        <div className='space-x-1'>
                            <FontAwesomeIcon icon={faComment} className="scale-x-[-1]" size="lg"/>
                            <span>1</span>                            
                        </div>
                    </div>
                </div>
                
            </div>)}
        </div>
    </div>
  )
}

export default Profile