import React from "react";
import Image from "next/legacy/image";
import { SearchIcon } from "@heroicons/react/outline"
import { HomeIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faCompass, faPlusSquare, faHeart } from "@fortawesome/free-regular-svg-icons";
import HeartTip from "./HeartTip";
import SearchTip from "./SearchTip";
import Feed from "./Feed";

const Header = () => {

    const [searchVisibility, setSearchVisibility] = useState(true);
    const [crossVisibility, setCrossVisibility] = useState(true);
    const [showToolTip, setShowToolTip] = useState(false);

    const inputAreaRef = useRef(null);

    useEffect(() => {
        const checkIfClickOutside = e =>{
            if(!inputAreaRef?.current?.contains(e.target))
            {
                console.log("Outside input area");
                setCrossVisibility(false);
                setSearchVisibility(true);
                setShowToolTip(false);
            }
            else
            {
                setCrossVisibility(true);
                setSearchVisibility(false);
                setShowToolTip(true);
            }
        }
        document.addEventListener("mousedown", checkIfClickOutside)
        return  () => {
                document.removeEventListener("mousedown", checkIfClickOutside)
        }
    }, [])
    return(
        <div className="shadow-sm border-b bg-white top-0 fixed w-full">
            <div className="flex justify-between max-w-4xl mx-5 xl:mx-auto p-2">
                <div className="flex justify-between w-4/6">
                    <div className="relative w-24 h-8 lg-inline-grid">
                        <Image src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                            layout="fill" objectFit="contain"/>
                    </div>
                    <div ref={inputAreaRef} className="h-9 hidden relative mt-1 p-1 pl-2 rounded-sm sm:text-sm
                                    border-solid border-[1.2px] border-gray-300 md:flex bg-gray-50 items-center w-5/12">
                        {searchVisibility &&<SearchIcon className="h-3 w-5 text-gray-400"></SearchIcon>}
                        <input type="text" placeholder="Search" className="flex-1 headerinput pl-1
                                bg-gray-50 focus:outline-none"></input>
                        {crossVisibility && <PlusCircleIcon className="h-4 w-5 text-gray-400 rotate-45"></PlusCircleIcon>}
                        {showToolTip && <SearchTip/>}
                    </div>
                </div>
                
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="h-6 cursor-pointer" />
                    <div className="relative">
                            <FontAwesomeIcon className="cursor-pointer" icon={faFacebookMessenger} size="lg"/>
                            <span className="absolute -top-1 -right-2 bg-red-500
                                    rounded-full h-4 w-4 text-white -text-xs items-center
                                    justify-center flex loading-none">3</span>
                    </div>
                    <div className="relative">
                        <FontAwesomeIcon className="cursor-pointer" icon={faHeart} size="lg"/>
                        <div className="block absolute w-1 h-1 left-1/2 -translate-x-1/2
                                bg-red-600 rounded-full">
                        </div>
                        <HeartTip/>
                    </div>
                    <FontAwesomeIcon className="cursor-pointer" icon={faPlusSquare} size="lg"/>
                    <FontAwesomeIcon className="cursor-pointer" icon={faCompass} size="lg"/>
                    <div className="avatar">
                        <div className="w-8 h-8 rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header