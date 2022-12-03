import React from "react";
import Image from "next/legacy/image";
import {SearchIcon} from "@heroicons/react/outline"
import {HomeIcon, PlusCircleIcon} from "@heroicons/react/solid";

const Header = () => {
    return(
        <div className="shadow-sm border-b bg-white top-0 fixed w-full">
            <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto p-2">
                <div className="relative w-24 h-8 lg-inline-grid">
                    <Image src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                        layout="fill" objectFit="contain"/>
                </div>
                <div className="relative mt-1 p-1 pl-1 rounded-sm sm:text-sm
                                border-solid border-[1.2px] border-gray-300 flex bg-gray-50">
                    <SearchIcon className="h-5 w-5 text-gray-400"></SearchIcon>
                    <input type="text" placeholder="search" className="headerinput pl-1
                            bg-gray-50 focus:outline-none"></input>
                    <PlusCircleIcon className="h-5 w-5 text-gray-400 rotate-45"></PlusCircleIcon>

                </div>
            </div>
        </div>
    )
}

export default Header